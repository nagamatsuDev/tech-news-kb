/**
 * HTTP ヘルパー（タイムアウト・リトライ付き）
 */

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export interface FetchJsonOptions {
  method?: "GET" | "POST";
  headers?: Record<string, string>;
  body?: unknown;
  timeoutMs?: number;
  retries?: number;
}

/** JSON を取得する。429 / 5xx は待ってリトライする */
export async function fetchJson<T>(
  url: string,
  opts: FetchJsonOptions = {},
): Promise<{ data: T; headers: Headers }> {
  const { method = "GET", headers = {}, body, timeoutMs = 30_000, retries = 3 } = opts;
  let lastErr: unknown;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        method,
        headers: {
          "User-Agent": "tech-news-kb-vuln-collector/2.0",
          Accept: "application/json",
          ...(body ? { "Content-Type": "application/json" } : {}),
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
        signal: AbortSignal.timeout(timeoutMs),
      });
      if (res.status === 429 || res.status === 403 || res.status >= 500) {
        // NVD はレート制限時に 403 を返すことがある
        throw new RetryableError(`HTTP ${res.status}`);
      }
      if (!res.ok) throw new Error(`HTTP ${res.status} ${await res.text().catch(() => "")}`.slice(0, 300));
      return { data: (await res.json()) as T, headers: res.headers };
    } catch (err) {
      lastErr = err;
      const retryable = err instanceof RetryableError || (err instanceof Error && err.name === "TimeoutError");
      if (!retryable || attempt === retries) break;
      await sleep(2 ** attempt * 3_000);
    }
  }
  throw lastErr instanceof Error ? lastErr : new Error(String(lastErr));
}

class RetryableError extends Error {}

/** テキストを取得する（依存ファイル用） */
export async function fetchText(url: string, headers: Record<string, string> = {}): Promise<string> {
  const res = await fetch(url, {
    headers: { "User-Agent": "tech-news-kb-vuln-collector/2.0", ...headers },
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
  return res.text();
}

/** 配列を n 件ずつに分割する */
export function chunk<T>(arr: T[], n: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
}

/** 並列数を制限して map する */
export async function mapLimit<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let next = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i]);
    }
  });
  await Promise.all(workers);
  return results;
}

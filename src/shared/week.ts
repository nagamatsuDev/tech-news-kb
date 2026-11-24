/**
 * ISO 週（月曜始まり）を日本時間で扱う
 * 例: 2026-11-16（月）〜 2026-11-22（日）= "2026-W47"
 */

const JST_OFFSET = 9 * 3600_000;
const DAY = 86_400_000;

export const WEEK_RE = /^(\d{4})-W(\d{2})$/;

/** 日時 → JST の ISO 週 */
export function isoWeekOf(date: Date | string | number): string {
  const t = new Date(date).getTime() + JST_OFFSET;
  const d = new Date(t);
  // UTC メソッドで JST の暦日を扱う
  const day = (d.getUTCDay() + 6) % 7; // 月=0 … 日=6
  const thursday = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() - day + 3));
  const year = thursday.getUTCFullYear();
  const jan4 = new Date(Date.UTC(year, 0, 4));
  const jan4Day = (jan4.getUTCDay() + 6) % 7;
  const week1Monday = jan4.getTime() - jan4Day * DAY;
  const week = Math.floor((thursday.getTime() - 3 * DAY - week1Monday) / (7 * DAY)) + 1;
  return `${year}-W${String(week).padStart(2, "0")}`;
}

/** ISO 週の月曜 0:00 JST（UTC の Date） */
export function weekStart(week: string): Date {
  const m = week.match(WEEK_RE);
  if (!m) throw new Error(`invalid week: ${week}`);
  const year = Number(m[1]);
  const w = Number(m[2]);
  const jan4 = Date.UTC(year, 0, 4);
  const jan4Day = (new Date(jan4).getUTCDay() + 6) % 7;
  const monday = jan4 - jan4Day * DAY + (w - 1) * 7 * DAY;
  return new Date(monday - JST_OFFSET);
}

export function addWeeks(week: string, n: number): string {
  return isoWeekOf(weekStart(week).getTime() + n * 7 * DAY + DAY);
}

/** 表示用 "11/16–11/22" */
export function weekRangeLabel(week: string): string {
  const start = weekStart(week).getTime() + JST_OFFSET;
  const fmt = (t: number) => {
    const d = new Date(t);
    return `${d.getUTCMonth() + 1}/${d.getUTCDate()}`;
  };
  return `${fmt(start)}–${fmt(start + 6 * DAY)}`;
}

/** from 〜 to（両端含む）の週一覧 */
export function weeksBetween(from: string, to: string): string[] {
  const out: string[] = [];
  let w = from;
  for (let i = 0; i < 1000 && w <= to; i++) {
    out.push(w);
    w = addWeeks(w, 1);
  }
  return out;
}

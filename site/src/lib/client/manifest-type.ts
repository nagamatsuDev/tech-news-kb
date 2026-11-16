/** 依存ファイル名から形式を判定する（DOM 非依存） */

/** 「package-lock (1).json」のような名前も種類を判定する */
export function manifestType(fileName: string): string | undefined {
  const n = fileName.toLowerCase();
  const table: [RegExp, string][] = [
    [/package-lock.*\.json$/, "package-lock.json"],
    [/pnpm-lock.*\.ya?ml$/, "pnpm-lock.yaml"],
    [/yarn.*\.lock$/, "yarn.lock"],
    [/package.*\.json$/, "package.json"],
    [/poetry.*\.lock$/, "poetry.lock"],
    [/requirements.*\.txt$/, "requirements.txt"],
    [/go.*\.mod$/, "go.mod"],
    [/cargo.*\.lock$/, "Cargo.lock"],
    [/gemfile.*\.lock$/, "Gemfile.lock"],
    [/composer.*\.lock$/, "composer.lock"],
  ];
  return table.find(([re]) => re.test(n))?.[1];
}

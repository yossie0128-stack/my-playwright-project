import fs from "fs";
import path from "path";

const historyDir = "history";

// history ディレクトリが存在しない場合は終了
if (!fs.existsSync(historyDir)) {
  console.error("No history directory found.");
  process.exit(1);
}

// YYYY-MM-DD のフォルダだけを抽出
const dates = fs.readdirSync(historyDir).filter(d =>
  /^\d{4}-\d{2}-\d{2}$/.test(d)
).sort();

const history = [];

for (const date of dates) {
  const summaryPath = path.join(historyDir, date, "flaky-summary.json");

  if (!fs.existsSync(summaryPath)) {
    console.warn(`No flaky-summary.json found for ${date}`);
    continue;
  }

  const summary = JSON.parse(fs.readFileSync(summaryPath, "utf-8"));

  history.push({
    date,
    summary
  });
}

// 出力ファイル
const outputPath = "history-data.json";
fs.writeFileSync(outputPath, JSON.stringify(history, null, 2));

console.log(`Generated ${outputPath} with ${history.length} entries.`);

import fs from "fs";

// history-data.json を読み込む
const history = JSON.parse(fs.readFileSync("history-data.json", "utf-8"));

// 日付一覧
const dates = history.map(h => h.date);

// 全テスト名を集める
const testNames = new Set();
for (const h of history) {
  for (const item of h.summary) {
    testNames.add(item.test);
  }
}

// テーブルデータ構造を作る
const table = {};
for (const test of testNames) {
  table[test] = {};
  for (const date of dates) {
    table[test][date] = null; // 初期値
  }
}

// 成功/失敗を埋める
for (const h of history) {
  const date = h.date;
  for (const item of h.summary) {
    table[item.test][date] = item.fail > 0 ? "fail" : "success";
  }
}

// HTML 生成
const html = `
<html>
<head>
  <meta charset="UTF-8">
  <title>Flaky History Table</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ccc; padding: 6px 10px; text-align: center; }
    th { background: #f0f0f0; position: sticky; top: 0; }
    .success { background: #d4ffd4; }
    .fail { background: #ffd4d4; }
    .unknown { background: #f7f7f7; color: #aaa; }
  </style>
</head>
<body>

<h1>Flaky Test History</h1>
<p>テスト名 × 日付 の履歴テーブル</p>

<table>
  <thead>
    <tr>
      <th>Test Name</th>
      ${dates.map(d => `<th>${d}</th>`).join("")}
    </tr>
  </thead>
  <tbody>
    ${Array.from(testNames).map(test => `
      <tr>
        <td>${test}</td>
        ${dates.map(date => {
          const status = table[test][date];
          if (status === "success") return `<td class="success">✔</td>`;
          if (status === "fail") return `<td class="fail">✖</td>`;
          return `<td class="unknown">-</td>`;
        }).join("")}
      </tr>
    `).join("")}
  </tbody>
</table>

</body>
</html>
`;

fs.writeFileSync("history-report.html", html);
console.log("Generated history-report.html");

 1. プロジェクト概要（Overview）
このプロジェクトは、Playwright.dev の UI を題材にした E2E テスト自動化プロジェクトです。
Playwright の Page Object Model（POM）とコンポーネント設計を用いて、
保守性の高いテストコードを実現しています。



🏗 2. 技術スタック（Tech Stack）
- Playwright
- TypeScript
- Page Object Model (POM)



📁 3. ディレクトリ構成（Project Structure）
my-playwright-project/
  ├─ pages/          # Page Object（DocPage, TestAgentsPage など）
  ├─ components/     # TabCodeBlock などの UI コンポーネント
  ├─ tests/          # 各ページのテスト
  ├─ data/           # URL や定数
  ├─ playwright.config.ts
  └─ README.md



🧩 4. 設計思想（Design Philosophy）
 Playwright.dev の UI を分析し、共通化できる部分をコンポーネント化
- タブ付きコードブロックは TabCodeBlock コンポーネントとして抽象化
- Installation / Getting Started / (PlayWright Test)Test Agents などで再利用
- Writing Tests / Running Tests のようなタブなしページは DocPage で統一




🧪 5. テスト内容（What is Tested）
- 左サイドバーのページ遷移
- タブ付きコードブロックの切り替えと Copy ボタンの動作
- タブなしコードブロックの表示確認
- Test Agents ページのタブ切り替え



▶ 6. 実行方法（How to Run）
npm install
npx playwright test



📝 7. 今後の改善点（Optional）
- Visual Regression Testing の追加
- CI/CD への統合





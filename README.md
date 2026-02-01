[English README](README.en.md)

my-playwright-project

（Playwright を用いた UI / API E2E テスト自動化デモ。ブランク期間中のキャッチアップとして、最新の自動化手法を短期間で習得するために構築。）

本プロジェクトは、Playwright を用いて UI × API の E2E テスト自動化基盤を 10 日以内で構築した実践デモです。
開発環境構築から自動化基盤の整備、API テスト、POM 設計、CI/CD 統合までを一通り実装し、実務でそのまま利用できるレベルのテスト基盤を再現しています。
🎯 プロジェクトの目的

    Playwright を用いた UI テスト自動化の実践

    REST API を対象とした API テストの導入

    UI と API を組み合わせた統合テストの構築

    Page Object Model（POM）によるテスト構造化

    Flaky を抑えるための安定化設計

    並列実行・shard による高速化

    GitHub Actions を用いた CI/CD パイプライン構築

    短期間で実務レベルの自動化基盤を構築できるスキルの証明

🚀 特徴（Features）
■ UI × API の統合テスト

    Playwright の request API を使用

    GET / POST / PUT / DELETE を網羅

    ステータスコード・レスポンスボディの検証

    UI と API を組み合わせたシナリオテストに対応

■ Page Object Model（POM）による拡張性

    ページ単位で責務を分離

    テストコードの可読性・保守性を向上

    実務で一般的な構成を採用

■ Flaky を抑える安定化設計

    適切なロケータ選定

    iframe（frameLocator）対応

    遅延読み込みへの対策

    明示的な待機の最小化

    CI 環境を考慮したリトライ戦略

    個人環境の CI ランナーでは一部 Flaky が発生するが、実務では高性能ランナーを選択することで解消可能

       
■ 並列実行・shard による高速化

    Playwright の並列実行機能を活用

    CI 上でも高速に動作するよう最適化

■ GitHub Actions による CI/CD 統合

    push / PR 時に自動テスト実行

    UI / API テストを並列で実行

    動画・スクリーンショットの保存

    実務のワークフローを再現

🕒 10 日以内で構築した内容

以下の工程を短期間で完了し、キャッチアップ能力と基盤構築力を示しています。

    Playwright セットアップ

    UI テスト実装

    API テスト実装

    POM 設計

    Flaky 対策

    並列実行設定

    GitHub Actions による CI/CD パイプライン構築

📁 ディレクトリ構成（抜粋）
コード

my-playwright-project/
├── playwright.config.ts
├── package.json
├── tests/
│   ├── ui/
│   ├── api/
├── pages/
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
└── .github/
    └── workflows/
        └── playwright.yml

🧪 実行方法

    依存関係インストール
    npm install

    UI テスト
    npx playwright test tests/ui

    API テスト
    npx playwright test tests/api

    UI モード
    npx playwright test --ui

📌 今後の拡張予定

    ディレクトリ構造の整理（pages / components を src 配下へ移動）

    fixtures の導入（過度な抽象化を避け、POM の DI は採用しない方針）

    テストランナーを Linux へ変更（Playwright 推奨・無料枠でも高性能）

    API モックサーバーとの統合

    テストデータ管理の改善

    UI × API の複雑な統合シナリオ追加

    負荷テストとの連携



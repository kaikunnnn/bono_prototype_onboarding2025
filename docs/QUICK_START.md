# クイックスタートガイド

## 📋 プロジェクト概要

**BONO プロトタイプ**: 課金直後のオンボーディング体験を最適化し、14日間でUI/UXデザインの基礎を学べるスターターコースを提供するWebアプリケーション

## 🎯 主要機能

1. **ようこそページ** - レベル別学習パスの提案
2. **スターターページ** - 10章のノック形式学習
3. **章ビューア** - MDXコンテンツ表示と進捗管理
4. **検索機能** - 章・動画の検索

## 🚀 開発開始手順

### Step 1: プロジェクトセットアップ
```bash
# Next.jsプロジェクト作成
npx create-next-app@latest . --typescript --tailwind --app

# 追加パッケージインストール
npm install zustand @mdx-js/loader @mdx-js/react gray-matter
npm install -D @types/mdx

# 開発サーバー起動
npm run dev
```

### Step 2: フォルダ構造の作成
```bash
# ディレクトリ作成
mkdir -p app/welcome app/courses/starter-uiux/chapters/[slug] app/search
mkdir -p components/{layout,welcome,course,chapter,interactive,ui}
mkdir -p stores lib data content/chapters types hooks config
```

### Step 3: 基本ファイルの準備
各docsフォルダ内のドキュメントを参照：
- `REQUIREMENTS.md` - 要件定義
- `PROJECT_STRUCTURE.md` - ファイル構成
- `DEVELOPMENT_PHASES.md` - フェーズ別計画
- `DETAILED_TASKS.md` - 詳細タスク

## 📅 推奨開発スケジュール

| フェーズ | 内容 | 期間 | 優先度 |
|---------|------|------|--------|
| Phase 1 | 基盤セットアップ | 1日 | P0 |
| Phase 2 | ようこそページ | 1日 | P0 |
| Phase 3 | スターターページ | 1日 | P0 |
| Phase 4 | 章ビューア | 2日 | P0 |
| Phase 5 | 進捗管理 | 1日 | P0 |
| Phase 6 | クイズ・穴埋め | 1日 | P1 |
| Phase 7 | UIポリッシュ | 1日 | P1 |
| Phase 8 | 検索機能 | 1日 | P2 |
| Phase 9 | 最終調整 | 1日 | P2 |

## 🎨 デザインシステム

### カラー
- プライマリ: `#2563EB` (Blue)
- 背景: `#FFFFFF`
- テキスト: `#0F172A`
- ミューテッド: `#64748B`

### フォント
- ファミリー: Inter
- ウェイト: 400, 500, 600, 700

### スペーシング
- 8px, 16px, 24px, 32px, 40px

## 💾 データ構造サンプル

### コース情報
```json
{
  "id": "starter-uiux",
  "title": "UI/UXスターターレッスン",
  "chapters": ["trace-01", "trace-02", ...]
}
```

### 章情報
```json
{
  "slug": "trace-01",
  "title": "ベースのUIトレース①",
  "timeEstimate": 8,
  "checklist": ["タスク1", "タスク2", "タスク3"]
}
```

## 🔄 学習フロー

```
Day 1-3:  UIトレース基礎
Day 4-5:  ユーザー理解
Day 6-7:  情報設計（Day7: 必須投稿）
Day 8-11: リデザイン課題
Day 12-14: 完成例比較（Day14: 必須投稿）
```

## ✅ 受け入れ基準チェックリスト

### ようこそページ
- [ ] 3つのレベルカード表示
- [ ] 2クリックで学習開始
- [ ] 学習時間の保存

### スターターページ  
- [ ] 章一覧表示
- [ ] 進捗バー機能
- [ ] 前回の続きボタン

### 章ビューア
- [ ] MDXコンテンツ表示
- [ ] チェックリスト機能
- [ ] Next/Prevナビゲーション
- [ ] 進捗の永続化

## 🛠️ 開発のコツ

1. **モバイルファースト** - 最初からレスポンシブを意識
2. **段階的実装** - P0機能から順番に実装
3. **早期テスト** - 各フェーズ完了時に動作確認
4. **シンプルな状態管理** - Zustandで複雑化を避ける

## 📊 イベント計測

実装すべきイベント：
- `onboarding_view`
- `onboarding_level_select`
- `chapter_view`
- `checklist_check`
- `progress_complete`

## 🚢 デプロイ

推奨: Vercel
```bash
# ビルド確認
npm run build

# Vercel CLIでデプロイ
vercel
```

## 💡 次のステップ

1. Phase 1のタスクから開始
2. 各フェーズの成果物を確認しながら進行
3. 定期的にコミット＆プッシュ
4. 問題があれば早期に相談

---

**質問があれば遠慮なくお聞きください！**
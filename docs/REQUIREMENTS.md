# BONO プロトタイプ 要件整理

## 概要
課金直後のユーザー体験を最適化するプロトタイプ。ユーザーのレベルに応じて適切な学習パスを提案し、14日間でUI/UXデザインの基礎を体験できるスターターコースを提供。

## 必要なページ一覧

### 1. ようこそページ (/welcome)
**目的**: 課金直後のユーザーを迷わせずに学習開始へ導く

**主要機能**:
- レベル別の学習パス提案（beginner/experienced/custom）
- 学習時間の設定（30/45/60分）
- コミュニティ参加の案内
- 2クリックで学習開始

### 2. スターターページ (/courses/starter-uiux)
**目的**: 章一覧をノック形式で表示、進捗の可視化

**主要機能**:
- 10章の章カード表示
- 進捗バー
- 「前回の続き」ボタン
- レベル別UI表示（クエリパラメータで制御）

### 3. 章ビューア (/courses/starter-uiux/chapters/:slug)
**目的**: 各章の内容表示と学習進行

**主要機能**:
- MDX形式の本文表示
- チェックリスト（最大3項目）
- Next/Prevナビゲーション
- Flowピル（現在の工程表示）
- 進捗保存

### 4. 検索ページ (/search)
**目的**: 特定の章や動画を検索

**主要機能**:
- キーワード検索
- 結果表示（章・動画単位）

## 技術スタック
- **フレームワーク**: Next.js 14 (App Router)
- **スタイリング**: Tailwind CSS
- **状態管理**: Zustand + localStorage
- **コンテンツ**: MDX
- **フォント**: Inter
- **アクセントカラー**: #2563EB

## データ構造

### コース情報
```json
{
  "id": "starter-uiux",
  "title": "UI/UXスターターレッスン",
  "description": "...",
  "tags": ["UX", "情報設計", "UI", "Figma"],
  "chapters": ["trace-01", "trace-02", ...]
}
```

### 章情報
```json
{
  "slug": "trace-01",
  "title": "ベースのUIトレース①",
  "goal": "...",
  "timeEstimate": 8,
  "prerequisites": ["Figma"],
  "flowStage": ["UIモデリング", "ビジュアル"],
  "checklist": ["...", "...", "..."],
  "assets": [...],
  "nextSlug": "trace-02",
  "prevSlug": null
}
```

### ユーザー進捗
```json
{
  "completedSlugs": {"trace-01": true, ...},
  "lastVisitedSlug": "trace-02",
  "level": "beginner",
  "dailyMinutes": 30
}
```

## 学習フロー（14日間）

### Day 1-3: ベースのUIトレース
- FigmaでダメなUIをリデザイン
- ホバー、構造、見た目の改善

### Day 4-5: ユーザー理解
- 4択クイズ
- 穴埋め問題
- ペルソナに基づく判断

### Day 6-7: 情報設計
- MSC（Must/Should/Could）仕分け
- 優先度・並び順の決定
- **Day 7: #progress必須投稿**

### Day 8-11: リデザイン課題
- ペルソナ別にUIを再設計
- 最小変更での改善

### Day 12-14: 完成例との比較
- Before/After比較
- 学びの言語化
- **Day 14: #progress必須投稿**

## 各章の構成パターン

### Start (30秒)
- 今日のゴール（1行）
- Flowピル（現在の工程表示）
- Planミニ（学習時間選択）

### Do (本編)
- トレース or 穴埋め
- チェックリスト（最大3項目）
- 動画・Figmaリンク

### Close (60秒)
- ミニふりかえり（50字）
- #progress投稿（Day7/14は必須）

## イベント計測
- `onboarding_view`
- `onboarding_level_select`
- `onboarding_plan_select`
- `onboarding_start_click`
- `chapter_view`
- `checklist_check`
- `quiz_answer`
- `next_click`
- `progress_complete`

## 受け入れ基準（P0）

### ようこそページ
- [ ] 3つのレベルカードが表示される
- [ ] クリックで即座に学習開始できる
- [ ] 学習時間がlocalStorageに保存される
- [ ] コミュニティ参加ボタンが動作する

### スターターページ
- [ ] 章カード一覧が表示される
- [ ] 進捗バーが更新される
- [ ] 「前回の続き」が機能する
- [ ] レベル別UIバッジが表示される

### 章ビューア
- [ ] ゴール/時間/前提がカード表示される
- [ ] Flowピルが表示される
- [ ] チェックリストが保存される
- [ ] Next/Prevで移動できる
- [ ] 再訪時に進捗が復元される

### 全体
- [ ] モバイルレスポンシブ対応
- [ ] 余白・フォント・カラーが統一されている
- [ ] 各イベントが計測される
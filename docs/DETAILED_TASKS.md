# 詳細タスクリスト

## Phase 1: プロジェクト基盤セットアップ

### 1.1 Next.jsセットアップ
```bash
npx create-next-app@latest . --typescript --tailwind --app --import-alias "@/*"
```
- [ ] package.json確認
- [ ] TypeScript設定
- [ ] ESLint設定
- [ ] .gitignore確認

### 1.2 追加パッケージインストール
```bash
npm install zustand @mdx-js/loader @mdx-js/react gray-matter
npm install -D @types/mdx
```

### 1.3 フォルダ構造作成
- [ ] components/フォルダ作成
- [ ] stores/フォルダ作成
- [ ] lib/フォルダ作成
- [ ] data/フォルダ作成
- [ ] content/chapters/フォルダ作成
- [ ] types/フォルダ作成
- [ ] hooks/フォルダ作成

### 1.4 基本設定ファイル
- [ ] next.config.js（MDX設定）
- [ ] tailwind.config.ts（カスタマイズ）
- [ ] globals.css（基本スタイル）

---

## Phase 2: ようこそページ実装タスク

### 2.1 型定義
```typescript
// types/user.ts
type UserLevel = 'beginner' | 'experienced' | 'custom' | null;
type DailyMinutes = 30 | 45 | 60 | null;
```

### 2.2 ストア実装
```typescript
// stores/onboarding.ts
- レベル状態管理
- 学習時間管理
- localStorage永続化
```

### 2.3 コンポーネント実装順序
1. WelcomeHero（静的）
2. LevelCards（インタラクティブ）
3. PlanPicker（選択UI）
4. CommunityCTA（リンク）

### 2.4 ページ統合
- [ ] コンポーネント組み合わせ
- [ ] イベント計測追加
- [ ] レスポンシブ確認

---

## Phase 3: スターターページ実装タスク

### 3.1 データ準備
```json
// data/seed.json
{
  "course": {...},
  "chapters": [...]
}
```

### 3.2 コンポーネント優先順位
1. ChapterCard（単体）
2. CourseHeader（情報表示）
3. ProgressBar（進捗計算）
4. ResumeButton（ナビゲーション）

### 3.3 クエリパラメータ処理
- [ ] useSearchParams実装
- [ ] レベル別表示ロジック
- [ ] バッジ表示制御

---

## Phase 4: 章ビューア実装タスク

### 4.1 MDX設定
```javascript
// next.config.js
const withMDX = require('@mdx-js/loader')({
  extension: /\.mdx$/
});
```

### 4.2 動的ルーティング
- [ ] [slug]/page.tsx作成
- [ ] パラメータ取得
- [ ] MDXファイル読み込み

### 4.3 コンポーネント実装
1. ChapterHeader（メタデータ表示）
2. FlowPill（工程インジケーター）
3. Checklist（状態管理付き）
4. ChapterNav（前後移動）

### 4.4 サイドバー
- [ ] 章リスト表示
- [ ] 現在位置ハイライト
- [ ] モバイル対応

---

## Phase 5: 進捗管理実装タスク

### 5.1 ストア設計
```typescript
// stores/progress.ts
interface ProgressState {
  completedSlugs: Record<string, boolean>;
  lastVisitedSlug: string | null;
  checklistStates: Record<string, boolean[]>;
}
```

### 5.2 永続化設定
- [ ] persist middleware設定
- [ ] ストレージキー定義
- [ ] マイグレーション対応

### 5.3 UI連携
- [ ] 進捗バー計算ロジック
- [ ] チェックリスト状態同期
- [ ] 再開ボタン機能

---

## Phase 6: クイズ・穴埋め実装タスク

### 6.1 データ構造
```typescript
interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface FillBlank {
  id: string;
  text: string;
  blanks: { position: number; answer: string }[];
}
```

### 6.2 コンポーネント
- [ ] Quiz.tsx（4択）
- [ ] FillInBlank.tsx（穴埋め）
- [ ] 回答状態管理
- [ ] 結果表示

### 6.3 MDX統合
- [ ] カスタムコンポーネント登録
- [ ] インタラクティブ要素埋め込み

---

## Phase 7: UIポリッシュタスク

### 7.1 レスポンシブ対応
- [ ] ブレークポイント定義（sm/md/lg）
- [ ] モバイルレイアウト調整
- [ ] タッチ対応

### 7.2 アニメーション
- [ ] ページ遷移
- [ ] カード hover効果
- [ ] プログレスバーアニメーション
- [ ] チェックリストアニメーション

### 7.3 アクセシビリティ
- [ ] キーボードナビゲーション
- [ ] ARIA属性追加
- [ ] フォーカス管理

---

## Phase 8: 検索機能実装タスク

### 8.1 検索ロジック
- [ ] 章タイトル検索
- [ ] 章コンテンツ検索
- [ ] タグ検索

### 8.2 検索UI
- [ ] 検索バー
- [ ] 結果リスト
- [ ] ハイライト表示

---

## Phase 9: 最終調整タスク

### 9.1 コンテンツ作成
- [ ] 全10章のMDXファイル
- [ ] クイズデータ
- [ ] 穴埋めデータ
- [ ] 画像アセット

### 9.2 テスト
- [ ] 全ルートの動作確認
- [ ] localStorage永続化確認
- [ ] レスポンシブ確認
- [ ] イベント計測確認

### 9.3 最適化
- [ ] バンドルサイズ確認
- [ ] 画像最適化
- [ ] コード分割
- [ ] キャッシュ設定

### 9.4 デプロイ準備
- [ ] 環境変数設定
- [ ] ビルド確認
- [ ] Vercelデプロイ設定

---

## チェックポイント

### Phase 1完了時
- プロジェクトが起動する
- 基本レイアウトが表示される

### Phase 2完了時
- ようこそページが完成
- レベル選択が機能する

### Phase 3完了時
- 章一覧が表示される
- 進捗が可視化される

### Phase 4完了時
- 章コンテンツが読める
- ナビゲーションが機能する

### Phase 5完了時
- 進捗が保存される
- 再訪時に復元される

### Phase 6完了時
- インタラクティブ要素が動作する

### Phase 7完了時
- UIが洗練されている
- モバイルで快適に使える

### Phase 8完了時
- 検索が機能する

### Phase 9完了時
- プロトタイプが完成
- デプロイ可能
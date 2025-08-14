# プロジェクト構造

```
bono_prototype_onboarding/
├── app/                           # Next.js App Router
│   ├── layout.tsx                 # ルートレイアウト
│   ├── page.tsx                   # ホームページ（/へのリダイレクト）
│   ├── welcome/                   # ようこそページ
│   │   └── page.tsx
│   ├── courses/
│   │   └── starter-uiux/          # スターターコース
│   │       ├── page.tsx           # 章一覧ページ
│   │       └── chapters/
│   │           └── [slug]/        # 章ビューア
│   │               └── page.tsx
│   └── search/                    # 検索ページ
│       └── page.tsx
│
├── components/                    # 共通コンポーネント
│   ├── layout/
│   │   ├── Header.tsx            # ヘッダー
│   │   ├── Sidebar.tsx           # サイドバー
│   │   └── MobileDrawer.tsx      # モバイル用ドロワー
│   │
│   ├── welcome/                  # ようこそページ用
│   │   ├── WelcomeHero.tsx
│   │   ├── LevelCards.tsx
│   │   ├── PlanPicker.tsx
│   │   └── CommunityCTA.tsx
│   │
│   ├── course/                   # コース関連
│   │   ├── CourseHeader.tsx      # コースヘッダー
│   │   ├── ChapterCard.tsx       # 章カード
│   │   ├── ProgressBar.tsx       # 進捗バー
│   │   └── ResumeButton.tsx      # 前回の続きボタン
│   │
│   ├── chapter/                  # 章ビューア関連
│   │   ├── ChapterHeader.tsx     # 章ヘッダー（ゴール等）
│   │   ├── FlowPill.tsx          # 工程表示ピル
│   │   ├── Checklist.tsx         # チェックリスト
│   │   ├── ChapterNav.tsx        # Next/Prevナビ
│   │   └── MDXContent.tsx        # MDXレンダラー
│   │
│   ├── interactive/              # インタラクティブ要素
│   │   ├── Quiz.tsx              # クイズコンポーネント
│   │   ├── FillInBlank.tsx       # 穴埋めコンポーネント
│   │   └── Reflection.tsx        # ふりかえり入力
│   │
│   └── ui/                       # 基本UIコンポーネント
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       └── Input.tsx
│
├── stores/                        # Zustand ストア
│   ├── onboarding.ts             # オンボーディング状態
│   ├── progress.ts               # 学習進捗
│   └── quiz.ts                   # クイズ回答状態
│
├── lib/                          # ユーティリティ
│   ├── mdx.ts                    # MDX処理
│   ├── analytics.ts             # イベント計測
│   └── utils.ts                  # 汎用ユーティリティ
│
├── data/                         # データファイル
│   ├── seed.json                 # コース・章データ
│   ├── quiz.json                 # クイズデータ
│   └── fillblank.json           # 穴埋めデータ
│
├── content/                      # MDXコンテンツ
│   └── chapters/
│       ├── trace-01.mdx
│       ├── trace-02.mdx
│       ├── ux-quiz-01.mdx
│       ├── ux-fill-01.mdx
│       ├── ia-msc-01.mdx
│       ├── ia-order-01.mdx
│       ├── ui-model-01.mdx
│       ├── visual-01.mdx
│       ├── state-01.mdx
│       └── compare-01.mdx
│
├── styles/                       # スタイル
│   └── globals.css              # グローバルスタイル
│
├── public/                       # 静的ファイル
│   └── images/
│       └── chapters/            # 章用画像
│
├── types/                        # TypeScript型定義
│   ├── course.ts
│   ├── chapter.ts
│   ├── quiz.ts
│   └── user.ts
│
├── hooks/                        # カスタムフック
│   ├── useProgress.ts
│   ├── useAnalytics.ts
│   └── useMediaQuery.ts
│
└── config/                       # 設定ファイル
    ├── site.ts                  # サイト設定
    └── theme.ts                 # テーマ設定
```

## 主要な技術的決定事項

### ルーティング
- Next.js 14 App Routerを使用
- 動的ルーティングは`[slug]`パターン
- クエリパラメータでレベル制御

### 状態管理
- Zustand + persist middlewareでlocalStorage連携
- 3つのストア: onboarding, progress, quiz

### コンテンツ管理
- MDXファイルで章コンテンツ管理
- frontmatterでメタデータ定義
- seed.jsonで構造データ管理

### スタイリング
- Tailwind CSS使用
- カスタムコンポーネントでスタイル統一
- CSS変数でテーマ管理

### レスポンシブ対応
- モバイルファースト設計
- useMediaQueryフックで条件分岐
- ドロワーメニューでモバイル対応

## 命名規則

### ファイル名
- コンポーネント: PascalCase (例: `LevelCards.tsx`)
- ユーティリティ: camelCase (例: `analytics.ts`)
- MDXファイル: kebab-case (例: `trace-01.mdx`)

### 変数・関数名
- 変数: camelCase
- 定数: UPPER_SNAKE_CASE
- 型: PascalCase

### CSSクラス名
- Tailwind標準に準拠
- カスタムクラス: kebab-case

## データフロー

```
1. ユーザーアクセス
   ↓
2. /welcome (初回)
   ↓
3. レベル選択 → onboardingストアに保存
   ↓
4. /courses/starter-uiux?level=beginner
   ↓
5. 章選択 → progressストアに記録
   ↓
6. /courses/starter-uiux/chapters/trace-01
   ↓
7. チェック完了 → progressストア更新
   ↓
8. Next → 次の章へ
```

## 開発時の注意事項

1. **MDXの事前ビルド**: ビルド時にMDXをコンパイル
2. **画像最適化**: Next.js Imageコンポーネント使用
3. **型安全性**: TypeScriptで厳密な型定義
4. **アクセシビリティ**: ARIA属性の適切な使用
5. **パフォーマンス**: 動的インポートでバンドルサイズ最適化
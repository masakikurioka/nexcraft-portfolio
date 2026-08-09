# プロジェクト概要
HP制作(Web制作)の受注につなげるための個人ポートフォリオサイト。屋号「Nex Craft」(運営者: くま)。
Next.js + Tailwind CSS + Framer Motionで、自己紹介・スキル・サンプル制作実績・お問い合わせフォームを掲載している。
実績セクションには、架空クライアントを想定した実際に動くサンプルLPを複数掲載し、技術力をアピールする構成。

- 公開URL: https://nexcraft-portfolio.vercel.app
- GitHubリポジトリ: https://github.com/nexcraft04510/nexcraft-portfolio

# 技術スタック
- フレームワーク: Next.js 16(App Router、Turbopack)
- 言語: TypeScript
- スタイリング: Tailwind CSS v4 + Framer Motion(スクロールアニメーション等)
- アイコン: lucide-react
- データベース: 未使用(お問い合わせフォームはWeb3Forms経由でメール送信、サーバー側の永続化なし)
- ホスティング: Vercel(GitHubのmainブランチにpushすると自動デプロイ)

# ディレクトリ構成のルール
- 共通コンポーネントは `src/components/` に置く(Header, Footer, Hero, About, Skills, Works, Service, Contact など)
- ページ/ルートは `src/app/` 以下(App Router準拠)
- サンプル制作実績(実績1件)は `src/app/works/[slug]/page.tsx` として追加する
  - デザインの都合でフォントなどをサーバーコンポーネントで読み込みたい場合は、`page.tsx`(サーバー)から `Content.tsx`(クライアント)に分離する(例: `works/marche/page.tsx` → `works/marche/MarcheContent.tsx`)
  - 各サンプルページには共通コンポーネント `WorkDemoBar`(「ポートフォリオへ戻る」+ DEMO表記)を必ず入れる
  - 新しい実績を追加したら `src/components/Works.tsx` の `PROJECTS` 配列にも追加する
- 実際にサイトで使う画像などの静的アセットは `public/` 以下に置く(例: `public/works/`)
- 元データ・未使用の生素材フォルダはリポジトリに含めない(`.gitignore` で除外し、使う分だけ `public/` にコピーする)

# コーディングルール
- インデントはスペース2つ
- セミコロンは付ける
- 命名規則: コンポーネント・ファイル名はPascalCase、関数・変数はcamelCase
- コメントは日本語でOK(ただし多用しすぎず、必要な箇所に絞る)
- 不要になったコードは消す(コメントアウトで残さない)
- 新しいルート/ページを追加する際は、その回だけの装飾に留めず、既存ページ(globals.cssのCSS変数、Tailwindのユーティリティ)との一貫性を意識する

# 作業の進め方(重要)
- 大きな変更(新しいページ追加、デザインの方向性が絡む変更など)をする前に、まず方針や選択肢をユーザーに確認してから進める(AskUserQuestion等を使う)
- 1回の指示で複数ファイルにまたがる大改修をする場合は、着手前に簡単な計画・タスク分割を示してから進める
- 動作確認は必ずローカルサーバー(またはビルド)を立てて自分の目でチェックする(推測で「動くはず」と言わない)
  - `npx tsc --noEmit` と `npx eslint .` で型・lintを確認
  - `npm run build` で本番ビルドが通ることを確認
  - Browserツールで実際にページを開き、コンソールエラー・表示内容を確認
- Vercelへの本番反映は、GitHubのmainにpushすれば自動デプロイされる(手動でVercel側から再デプロイする必要は基本的にない)。push後は少し待ってから本番URLでも動作確認する
- わからないこと・仕様が曖昧なことがあれば、進める前に必ず質問する

# 絶対にやってはいけないこと
- `.env*` ファイルの中身を表示したり、外部に送信したりしない
- gitのforce pushはしない
- ユーザーの許可なく、本番環境のデータや設定(環境変数・Vercelの設定など)を削除・変更しない
- package.jsonの依存関係を勝手に大きく変更しない(追加する場合は都度報告する)
- `.claude/settings.local.json` など、ローカル専用の設定ファイルはコミットしない
- 素材フォルダ(生の画像・動画データなど)をまるごとリポジトリにコミットしない。サイトで実際に使うファイルだけを `public/` にコピーして管理する

# 完了の定義
- 見た目のズレがないか、Browserツールで実際に確認する
- コンソールにエラーが出ていないか確認する(`read_console_messages` 等)
- 本番反映を伴う変更は、デプロイ後に本番URLでも同様に確認する
- 修正・追加後は「何をしたか」を一言でまとめて報告する

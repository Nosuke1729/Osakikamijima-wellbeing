# おおさきかみじま Well-being

参考画像をもとにしたレスポンシブな静的アプリです。ホーム、おすすめ、つながり、支援、プロフィール、分析、地域課題、助け合い掲示板を搭載しています。保存した活動・プロフィール・デモ投稿は localStorage に保存されます。人物、スコア、活動、支援情報はデモで、実際の送信や受付は行いません。風景と人物はサイト内の SVG イラストです。フォントは Google Fonts から取得し、取得できない場合は端末のフォントを使用します。

## ローカルで表示

```sh
npm ci
npm run dev
```

## GitHub Pages

GitHub のリポジトリ設定で **Pages → Build and deployment → Source → GitHub Actions** を選択してください。`main` への push でビルド・公開されます。別のブランチを使う場合は `.github/workflows/deploy.yml` の対象ブランチを変更します。

```sh
npm run build
```

公開対象は `dist` です。相対パスとハッシュによる画面切り替えを使うため、リポジトリ配下で表示でき、再読み込みでも 404 になりません。

# backend/Dockerfile

# ベースイメージ
FROM node:14-alpine

# 作業ディレクトリを設定
WORKDIR /app

# パッケージファイルをコピー
COPY package.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションを起動
CMD ["node", "app.js"]

# ポートを公開
EXPOSE 5000

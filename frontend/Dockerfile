# frontend/Dockerfile

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

# 環境変数を設定
ENV CHOKIDAR_USEPOLLING=true

# 開発サーバーを起動
CMD ["npm", "start"]

# ポートを公開
EXPOSE 3000

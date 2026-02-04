# ------------------------------------
# ベースイメージ
# ------------------------------------
FROM node:20-alpine AS base
WORKDIR /app

# package.json / package-lock.json を先にコピーして依存インストール
COPY package*.json ./

# 開発用・本番用共通で依存をインストール
RUN npm install

# ------------------------------------
# 開発用イメージ
# ------------------------------------
FROM base AS dev
# ソースコードをコピー
COPY . .

# ポートを開放
EXPOSE 3000

# 開発用コマンド
CMD ["npm", "run", "dev"]

# ------------------------------------
# 本番用イメージ
# ------------------------------------
FROM base AS prod
# ソースコードをコピー
COPY . .

# TypeScript をビルド
RUN npm run build

# dist を実行する前提
EXPOSE 3000
CMD ["node", "dist/server.js"]

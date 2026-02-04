# Node Auth Portfolio

## 1. 環境（Environment Overview）

本リポジトリは **Node.js + Express + TypeScript** を用いた
**Session 認証付き Web アプリケーションのポートフォリオ**です。

開発・実行環境は Dockerを使用しており、
ローカル PC に Node.js や npm を直接インストールする必要はありません。
Node.js 20 を使用していますが、ローカル環境の Node.js バージョンは問いません。

### 採用方針

* 環境差異を排除（Windows / macOS / Linux 共通）
* 実務を想定した Docker + Node.js 構成

---

## 技術スタック

* Node.js 20
* TypeScript
* Express
* express-session（Session 認証）
* EJS（SSR）
* ESLint（Flat Config / TypeScript 対応）
* Docker / Docker Compose

---

## ディレクトリ構成（抜粋）

```text
node-portfolio/
├─ src/              # アプリケーション本体（TypeScript）
│  └─ server.ts
├─ docker-compose.yml
├─ Dockerfile
├─ tsconfig.json
├─ eslint.config.mts
├─ package.json
├─ README.md
```


## 2. 手順（通常）

## 開発環境の起動

```bash
docker compose up --build


## 開発環境の停止
Ctrl + C
docker compose down



---

## 2. 手順（初回）

以下の手順で **クローン → 起動 → 修正 → 確認 → 停止** まで行えます。

### ① 前提条件

* Docker Desktop がインストールされていること

  * Windows / macOS: Docker Desktop
  * Linux: Docker Engine + docker compose

※ Node.js / npm は不要です

---

### ② リポジトリをクローン

```bash
git clone https://github.com/your-name/node-portfolio.git
cd node-portfolio
```

### ③ アプリケーション起動（初回）

```bash
docker compose up --build
```

* 初回はイメージ作成のため数分かかります
* 2回目以降は `docker compose up` のみで起動可能


### ④ 動作確認

ブラウザで以下にアクセス：
```
http://localhost:3000
```

### ⑤ ソースコード修正

* VSCode など任意のエディタで `src/` 以下を編集
* Docker コンテナは自動的に変更を反映

※ 編集はローカル、実行は Docker 内で行います


### ⑥ テスト / Lint（任意）

```bash
docker compose exec app npm run lint
```

### ⑦ 停止・終了

```bash
Ctrl + C
docker compose down
```

---

## 3. 注意点

### Docker について

* Docker は **PC に一度インストールすれば十分**
* プロジェクトごとに再インストールは不要
* Docker 未インストール環境では実行不可（仕様）

---

### 開発と本番の考え方

* 開発時: `ts-node` / ホットリロード
* 本番想定: `tsc` でビルド → `node dist/server.js`

※ 本番では `ts-node` を使用しません


---

## 起動まとめ（最短）

```bash
git clone <repo>
cd node-portfolio
docker compose up --build
```

---

## 停止

```bash
Ctrl + C
docker compose down
```


## 環境変数について

本プロジェクトでは環境変数を使用します。

実行前に `.env.example` をコピーして `.env` を作成してください。

```bash
cp .env.example .env

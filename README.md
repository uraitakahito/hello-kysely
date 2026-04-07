# hello-kysely

Kysely + PostgreSQL で TODO リストの CRUD 操作を学ぶチュートリアルです。

## セットアップ

```bash
./setup.sh
```

## Development

### サービスの起動

```bash
docker compose --profile dev up -d
```

### 依存パッケージのインストールとビルド

```bash
npm install
npm run build
```

### マイグレーションの実行

```bash
npm run migrate
```

### マイグレーションを戻す

直前に適用したマイグレーションを1つ巻き戻します。

```bash
npm run migrate:down
```

複数回実行すると、さらに前のマイグレーションも順番に巻き戻されます。

### デモスクリプトの実行

各 CRUD 操作を個別に実行できます。

```bash
npm run demo:create
npm run demo:read
npm run demo:update
npm run demo:delete
```

全操作をまとめて実行する場合:

```bash
npm run demo:all
```

### 停止

```bash
docker compose --profile dev down
```

## Production

### ビルドと実行

```bash
docker compose --profile prod up --build
```

マイグレーション済みの PostgreSQL に対して `demo-all.js` を実行し、完了後にコンテナが終了します。

### 停止

```bash
docker compose --profile prod down
```

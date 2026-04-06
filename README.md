# hello-kysely

Kysely + PostgreSQL で TODO リストの CRUD 操作を学ぶチュートリアルです。

## セットアップ

### Development

Please download the required files by following these steps:

```
curl -L -O https://raw.githubusercontent.com/uraitakahito/hello-javascript/refs/tags/1.2.0/Dockerfile.dev
curl -L -O https://raw.githubusercontent.com/uraitakahito/hello-javascript/refs/tags/1.2.0/docker-entrypoint.sh
chmod 755 docker-entrypoint.sh
```

Detailed environment setup instructions are described at the beginning of the [Dockerfile.dev](https://github.com/uraitakahito/hello-javascript/blob/1.2.0/Dockerfile.dev).

### PostgreSQL の起動

```bash
docker compose up -d postgres
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

## デモスクリプトの実行

各 CRUD 操作を個別に実行できます。

```bash
npm run demo:create   # INSERT: TODO を追加
npm run demo:read     # SELECT: TODO を取得
npm run demo:update   # UPDATE: TODO を更新
npm run demo:delete   # DELETE: TODO を削除
```

全操作をまとめて実行する場合:

```bash
npm run demo:all
```

## 停止

```bash
docker compose down
```

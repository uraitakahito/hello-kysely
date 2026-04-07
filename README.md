# hello-kysely

Kysely + PostgreSQL で TODO リストの CRUD 操作を学ぶチュートリアルです。

## セットアップ

### Development

```bash
./setup.sh
```

### サービスの起動

```bash
docker compose up -d
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

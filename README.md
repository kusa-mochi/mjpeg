# mjpeg

MJPEG画像のストリーミング配信およびフロントエンドにおける録画処理のサンプル

## ソフトウェア構成

|構成|概要|開発環境|
|:---|:---|:---|
|HTTPサーバー|MJPEG画像のストリーミング配信のサンプル|Go言語（Dockerfileに含まれる）|
|Webクライアント|MJPEG画像の録画処理のサンプル|npm+Next.js（Dockerfileに含まれる）|

## 実行に必要な前提環境

- Docker
- Docker Compose
- Visual Studio Code
    - 拡張機能 "Docker"
    - 拡張機能 "Dev Containers"

## 実行手順

### 実行用Dockerコンテナの起動

```pwsh
cd .devcontainer
docker compose up -d
```

その後、Visual Studio Codeの拡張機能 "Dev Containers" を使って（Shellではなく）**Visual Studio Codeにより**コンテナにアタッチし、`/project`ディレクトリを開く。

### HTTPサーバーの起動

コンテナにアタッチしたVisual Studio Codeで次のコマンドを実行する。

```bash
cd /project
go mod tidy
cd cmd/server
go run main.go
```

### Webクライアントの起動

コンテナにアタッチしたVisual Studio Codeで次のコマンドを実行する。

```bash
cd /project/cmd/client
npm ci
npm run dev
```

Dockerホスト上でWebブラウザ（Chromeなど）から[http://localhost:4000](http://localhost:4000)にアクセスする。

Webブラウザにランダムドットパターンのストリーミング画像が表示される。

### 録画処理サンプルの操作

1. Webクライアントの "Record" ボタンを押すと、ランダムドットパターンのストリーミング画像の録画が始まる。
1. "Stop" ボタンを押すと、録画が終了する。
1. "Download" リンクを踏むと、録画した画像をローカルにダウンロードできる。

## 参考にしたリポジトリ

[GitHub - nsmith5/mjpeg](https://github.com/nsmith5/mjpeg)
# A-Frame template
A-Frame を簡単に利用するための テンプレート  
vue-cli での webpack テンプレートをベースにした ビルドなどの設定も済んでいる状態なので開発も楽になるハズ。

# デモ
[DEMO](https://tf-webvr-dev.firebaseapp.com)

# 環境
|:-----------|------------:|
|開発環境 | VScode |
| プロジェクトの雛形を作成ツール | vue-cli |

# ダウンロード & ローカル実行

``` bash
vue init webpack a-frame-template
git clone https://github.com/tf-webvr-dev/a-frame-template.git vr-sample
cd vr-sample
npm install
npm run dev
```

# firebase にdeploy
``` bash
cd vr-sample
npm run build
firebase init 
# public ではなくて dist ディレクトリを指定
firebase deploy --only hosting
```

# 開発環境で開く
参考 [MacでVisual Studio Codeをターミナルから起動する方法。](https://qiita.com/naru0504/items/c2ed8869ffbf7682cf5c#mac%E3%81%A7visual-studio-code%E3%82%92%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB%E3%81%8B%E3%82%89%E8%B5%B7%E5%8B%95%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95)

1. Command + Shift + Pでコマンドパレット開く。
2. Shellって検索
3. インストール

```
cd vr-sample
code .
```

# OculusGo に URLを送る 
開発者モードに変更して USB で PCにつなぎ adb で URLを送る  
参考 [Oculus Goにadb経由でapkをインストールするまでメモ](http://htkb.hateblo.jp/entry/2018/05/10/212623)

``` bash
adb shell am start https://tf-webvr-dev.firebaseapp.com
```

# リモートデバッグ
OculusGo を 開発者モードにして adb 接続できる状態で PC 側の Chrome を使ってデバッグできる  
参考 [Android 端末のリモート デバッグを行う](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/?hl=ja)

```
- OculusGo と 開発マシンを usb で繋ぐ。
- 開発マシンで Chrome を開きます。
- DevTools を開きます。
  DevTools で、[Main Menu] Main Menu をクリックして、
  [More tools] > [Remote devices] を選択します。
```

-----
以下はメモ
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

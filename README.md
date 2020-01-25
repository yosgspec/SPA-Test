# お試しSPA!
SPA(シングルページアプリケーション)をVue.jsとBlazorで試しに作ってみたとかそんなやつ。

## 仕様とか
* 上部にメニューバー
* Home/Counter/Todoの独立したWebアプリをコンポーネントとして所持。
	+ Home
		- 別のコンポーネントを読み込んで文字を表示するだけなアプリ。
	+ Counter
		- Blazorの実行サンプルに付いてきたカウンターアプリ。
	+ Todo
		- [Vue.jsミニハンズオン（TODOリスト作成）](https://qiita.com/moonglows76/items/358ef3cd1566c38ece3a)を8割位忠実に実装したTodoアプリ。

## Vue.js(./ve/)
[Node.js](https://nodejs.org/ja/)が必要。  
パッケージマネージャーはnpmでなく[yarn](https://yarnpkg.com/lang/ja/)を使用する。  
Vue.jsプロジェクトを新しく作るときは[Vue CLI](https://cli.vuejs.org/)を使用。  

```bash:実行コマンド
# ディレクトリの移動
~$ cd ve

# 必要なモジュールをインストール
~/ve$ yarn install

# ローカルサーバーを起動
# http://localhost:8080/ で開く
~/ve$ yarn serve

# ビルド
# /ve/dist/ にファイルが書き出される
~/ve$ yarn build
```

[起動サンプル](https://spa-vue-js.web.app/)

## Blazor(./br/)
前提として[Net Core 3.1](https://dotnet.microsoft.com/download)を使用する。  
Blazorのクライアントサイド版はまだ正式なリリースを迎えていないので[テンプレートを別途用意する](https://www.nuget.rg/packages/Microsoft.AspNetCore.Blazor.HttpClient/)必要有。  
新規プロジェクトは下記コマンドで作る。  

```bat
~$ dotnet new blazorwasm -n hoge
```

```bash:実行コマンド
# ディレクトリの移動
~$ cd br

# ローカルサーバーを起動
# http://localhost:5000 で開く
~/br$ dotnet run

# ビルド
# /br/dist/br/dist/ にファイルが書き出される
~/br$ dotnet publish -c Release -o dist
```

[起動サンプル](https://spa-blazor.web.app/)

## React(./rt/)
Node.js+npmを使用。
プロジェクトの作成に[create-react-app](https://ja.reactjs.org/docs/create-a-new-react-app.html])、ルーターを使用するために[react-router-dom](https://www.npmjs.com/package/react-router-dom]を使用。

```bat
~$ npx create-react-app hoge
~$ cd hoge
~/hoge$ npm --save react-router-dom
```

```bash:実行コマンド
# ディレクトリの移動
~$ cd rt

# 必要なモジュールをインストール
~/rt$ npm install

# ローカルサーバーを起動
# http://localhost:3000/ で開く
~/rt$ npm start

# ビルド
# /rt/build/ にファイルが書き出される
~/rt$ yarn build
```

[起動サンプル](https://spa-reacts.web.app/)

## IFrame(./im/)
iframeでSPA風に見せかけたただのhtml。  

Python等で適当にサーバーを立ち上げて動作を確認する。  

```bash:実行コマンド
# ディレクトリの移動
~$ cd im/dist

# サーバーの起動
# http://localhost:8000 で開く
~/im/dist$ py -3 -m http.server 
```

[起動サンプル](https://spa-iflame.web.app/)

## Vanilla JS(./vl/)
JavaScriptの力だけで頑張ろうとした残骸。  

[起動サンプル](https://spa-vanilla-js.web.app/)

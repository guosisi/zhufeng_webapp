## webpack
```
$ npm install webpack webpack-dev-server --save-dev
```
## babel&&loader
```
$ npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react style-loader css-loader url-loader less-loader html-webpack-plugin --save-dev
```
## react
```
$ npm install react react-dom react-router-dom redux react-redux --save
```
## koa
```
$ npm install koa koa-router --save
```
## fetch
```
$ npm install whatwg-fetch es6-promise --save
```


## 目录结构
- containers 智能组件（聪明的组件）
    - 每一个文件夹都是一个页面级的组件
        - subpage 代表的是当前页面级组件中包含的智能组件
- components 木偶组件 （愚蠢的组件）
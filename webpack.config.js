//配置es6语法和node提示
let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./app/index.js',
    output: {
        path:path.resolve('./dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]}
        ]
    },
    devtool:'source-map', //开发时可以看到原始代码
    devServer: {
       proxy:{
           '/api':'http://localhost:3000' //配置请求数据的路径
       }
    },
    plugins: [
        new htmlWebpackPlugin({
            template:'./app/index.html'
        })
    ]
};
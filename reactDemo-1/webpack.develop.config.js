
// 导入关于路径的模块
var path = require('path')
var webpack = require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:path.resolve(__dirname,'src/js/app.js'),
    output:{
        path:path.resolve(__dirname,'aa'),
        filename:'build.js'
    },
    module:{
        rules:[
            // 解析css的加载器
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            // 解析scss的加载器
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            // es6转es5的加载器 jsx -> js
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                      // babel-preset-env  babel-preset-es2015 ...
                    presets: ['env','es2015', 'react','stage-0','stage-1','stage-2','stage-3']
                  }
                }
              },
            // 图片处理的加载器
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 8192
            //             }
            //         }
            //     ]
            // },
            // 图片加载器 25000bit ~3kb
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'url-loader?limit=25000&name=images/[name].[ext]'
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader'
            }
        ]
    },

    // webpack-dev-server的一些配置信息
    devtool: 'eval',
    devServer: {
        contentBase: __dirname + '/src', // 当前服务器监听的路径
        hot: true,  // 热更新
        port:8080,  // 定义端口号
        host: 'localhost',
        open:true    // 是否自动打开浏览器
    },
     plugins: [
        //移动html
        new htmlWebpackPlugin({
            template: './src/index.html'
        })

    ]
}

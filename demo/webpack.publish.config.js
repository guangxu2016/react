// 发布的时候用这个文件

// 导入关于路径的模块
var path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry:path.resolve(__dirname,'src/main.js'),
    entry: {
        app: path.resolve(__dirname, 'src/js/app.js'),
        // 分离第三方插件,填写要分离的文件
        vendors:['react','react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // 解析css的加载器
            // {
            //     test: /\.css$/,
            //     use: [ 'style-loader', 'css-loader' ]
            // },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            // es6转es5的加载器
            {
                test: /\.js$/,
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
                // use: 'url-loader?limit=25000&name=images/demo1.jpg'
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
        ]
    },
    // webpack-dev-server的一些配置信息
    devtool: 'eval',

    // webpack中的所有插件
    plugins: [
        // 压缩的插件,但是我们一般不用,用-p
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // 提取css的插件
        new ExtractTextPlugin("app.css"),
        // 自动生成html文件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            htmlWebpackPlugin: {
                "files": {
                    "css": ["app.css"],
                    "js": ["bundle.js","vendors.js"]
                }
            },
            // 压缩 情怀至上
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),

        // 分离第三方应用信息的插件
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.js' }),
    ]




}


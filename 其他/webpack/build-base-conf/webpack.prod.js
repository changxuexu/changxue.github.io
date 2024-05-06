const path = require('path')
const webpack = require('webpack')
// const { smart } = require('webpack-merge') //webpack4
const { merge } = require('webpack-merge') //webpack5
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const webpackCommonConf = require('./webpack.common.js')
const { srcPath, distPath } = require('./paths')
module.exports = merge(webpackCommonConf, {
    mode:'production', //production下代码会压缩
    output:{
        // 打包代码时，加上。若文件有所改动contentHash就会变，生成的文件名也会变化
        // filename:'bundle.[contentHash:8].js', // webpack4-H大小写
        filename:'bundle.[contenthash:8].js', // webpack5
        // filename:'[name].[contenthash:8].js', // 多入口。name表示entry入口中的index、other,若没指定,则默认为main
        path:distPath,
        // publicPath:'http://cdn.abc.com' //修改所有静态文件url
    },
    module:{
        rules:[
            // 图片-考虑base64编码的情况
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        // 小于 5kb 的图片用 base64 格式产出
                        // 否则，依然延用 file-loader 的形式，产出url格式
                        limit:5*1024,
                        // 打包到 img 目录下, 若配置'/img1/'图片引入会出现“//”
                        outputPath:'img1/',
                        // 设置图片的 cdn 地址(也可以统一在外面的 output 中设置)
                        // publicPath:'http://cdn.abc.com'
                    }
                }
            },
            // 抽离css
            {
                test:/\.css$/,
                // loader的执行顺序事：从后往前
                // 注意这里不再是style-loader在页面中通过style标签加载形式，而目的是抽离css
                use:[MiniCssExtractPlugin.loader, 'css-loader' , 'postcss-loader']
            },
            // 抽离less
            {
                test:/\.less$/,
                // 注意这里不再是style-loader在页面中通过style标签加载形式，而目的是抽离css
                // 增加 'less-loader' 注意顺序
                use:[MiniCssExtractPlugin.loader, 'css-loader',  'postcss-loader' , 'less-loader'] //webpack5
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(), // 会默认清空 output.path 文件夹
        new webpack.DefinePlugin({
            // 使用 window.ENV = 'production'
            ENV:JSON.stringify('production')
        }),

        // 抽离css文件
        new MiniCssExtractPlugin({
            filename:'css/main.[contenthash:8].css'
        })
    ],
    optimization:{
        minimizer:[
            // 压缩js
            new TerserJSPlugin({}),
            // 压缩css
            new CssMinimizerPlugin()
        ]
    }
})
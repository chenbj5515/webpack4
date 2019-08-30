const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const config = require('../config')
const webpack = require('webpack')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpackConfig = merge(baseConfig, {
    mode: 'production',
    // 与UglifyJsPlugin插件中的sourceMap同时设置为true才可以开启映射
    devtool: config.build.productionSourceMap ? config.build.devtool : false,

    optimization: {
        splitChunks: {
            // 默认为async，
            chunks: 'initial',
            // // vendors~bundle包的大小大于这个值才会被从bundle.js中分离出去，默认30000
            // minSize: 1,
            // 注意如果不配置cacheGroups的话是有默认值的，并且会覆盖上面的配置，比如minChunk会被重制为2，默认的有三条（minChunks: 2, priority: -20, reuseExistingChunk: true）
            // cacheGroups: {
            //     vendors: {
            //         test: /[\\/]node_modules[\\/]/,
            //         priority: -10,
            //         name: 'node_modules'
            //     },
            //     // default: {
            //     //     minChunks: 2,
            //     //     name: 'default',
            //     //     priority: 999,
            //     // },
            //     // vendors: {
            //     //     chunk: 'initial',
            //     //     test: 
            //     // }
            //     default: false
            // }
        },
    },
    plugins: [
        // 将script标签写入index.html文件
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            // index.jtml的压缩
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                    // more options:
                    // https://github.com/kangax/html-minifier#options-quick-reference
            },

        }),
        // 需要此插件以及rules中vue-loader才能完成vue文件的解析
        new VueLoaderPlugin(),
        // 注入依赖，意味着你可以在vue文件中使用这个变量
        new webpack.DefinePlugin({
            // 设置process.env为envConfig
            'PROSESS_ENV': JSON.stringify({ name: 'cbj', age: '22' })
        }),
        // 用于每次npm run build的时候清除上次的目录
        new CleanWebpackPlugin(),
        // 压缩JS代码
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    drop_debugger: false, // false可以使用debugger
                    drop_console: false, // rrue可以放弃console.log的调用
                },
            },
            // 是否开启sourceMap,需要在devtool同时设置为true
            sourceMap: true,
            // 启用并行化。默认并发运行数：os.cpus().length - 1。可以直接设置并行数
            parallel: true
        }),
        // 分离所有vue文件中的css代码到一个文件中
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[name].css"
        }),
        // 压缩css代码
        new OptimizeCSSPlugin({
            cssProcessorOptions: config.build.productionSourceMap ? { safe: true, map: { inline: false } } : { safe: true }
        }),
    ],
})

if (config.build.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
        .BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}
module.exports = webpackConfig
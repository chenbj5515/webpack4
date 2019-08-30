const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const postcss = require('./postcss.config');
const utils = require('./utils')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    entry: {
        bundle: path.resolve(__dirname, '../src/main.js'),
        // d: path.resolve(__dirname, '../src/d.js'),
        // e: path.resolve(__dirname, '../src/e.js'),
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'images': resolve('src/assets/images')
        }
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                }]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: postcss.plugins,
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: postcss.plugins,
                            parser: 'postcss-less',
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
        ]
    },
    plugins: [

    ]
}
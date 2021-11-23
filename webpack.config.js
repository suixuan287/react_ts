const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index'),
    output: {
        filename: '[hash].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    devServer: {
        port: 8002,
        compress: false,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '辩题',
            inject: 'body',
            template: './index.html'
        })
    ],
    externals:{
        "react": "React",
        "react-dom": "ReactDOM"
    }
}

module.exports = config
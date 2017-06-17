const path = require('path');

module.exports = {
    // input 설정
    entry: './src/index.tsx',

    // output 설정
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    // 
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },

    // transformations 설정
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
            },
            {
                enforce: "pre",
                test: /\.(ts|tsx)$/,
                loader: "tslint-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    // sourcemaps 설정 : Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    // server 설정
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        historyApiFallback: true
    }
};
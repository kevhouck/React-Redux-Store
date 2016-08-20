var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlPlugin = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './src/js/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, include: __dirname + '/src/js', loader: "babel-loader"},
        ]
    },
    plugins: [HtmlPlugin]
};
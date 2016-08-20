var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlPlugin = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './src/js/index.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8081'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js",
        publicPath: "http://localhost:8081/assets/",
    },
    module: {
        loaders: [
            {test: /\.js$/, include: __dirname + '/src/js', loaders: ['react-hot', 'babel']},
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" }
        ]
    },
    plugins: [HtmlPlugin]
};
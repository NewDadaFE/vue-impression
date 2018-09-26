const path = require('path'),
    webpack = require('webpack'),
    DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        app: [
            `webpack-dev-server/client?http://localhost:9008`,
            'webpack/hot/dev-server',
            './src/scripts/index.js'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/scripts',
    },
    resolve: {
        extensions: ['.js', '.vue'],
        modules: [path.join(__dirname, 'node_modules')],
        alias: {
            vue$: 'vue/dist/vue',
        },
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            enforce: 'pre',
            loader: 'eslint-loader',
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/,
        },{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/,
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'scss-loader'],
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader',
        }, {
            test: /\.json$/,
            loader: 'json-loader',
        }],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin(),
    ],
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
        contentBase: './build',
        publicPath: '/scripts',
        hot: true,
        historyApiFallback: true,
        stats: {
            colors: true,
            chunks: false,
            children: false,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
};

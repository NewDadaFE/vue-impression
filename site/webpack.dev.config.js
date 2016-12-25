const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    DashboardPlugin = require('webpack-dashboard/plugin'),
    PORT = 9008;

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        app: [
            `webpack-dev-server/client?http://localhost:${PORT}`,
            'webpack/hot/dev-server',
            './src/scripts/index.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, 'node_modules')],
        alias: {
            vue$: 'vue/dist/vue',
        },
    },
    resolveLoader: {
        fallback: [path.join(__dirname, 'node_modules')],
    },
    module: {
        preLoaders: [{
            test: /\.vue$/,
            loader: 'eslint',
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/,
        }, {
            test: /\.js$/,
            loader: 'eslint',
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/,
        }],
        loaders: [{
            test: /\.vue$/,
            loader: 'vue',
        }, {
            test: /\.js$/,
            loader: 'babel',
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/,
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'scss'],
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url',
        }, {
            test: /\.json$/,
            loader: 'json',
        }],
    },
    eslint: {
        formatter: require('eslint-friendly-formatter'),
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new DashboardPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
        }),
    ],
    devServer: {
        contentBase: './build',
        publicPath: '/',
        hot: true,
        historyApiFallback: true,
        stats: {
            colors: true,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
};

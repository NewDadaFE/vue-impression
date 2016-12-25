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
    ],
    devServer: {
        contentBase: './build',
        publicPath: '/scripts',
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

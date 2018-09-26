var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './src/scripts/index',
    output: {
        path: path.join(__dirname, 'build', 'scripts'),
        filename: 'app.js',
        publicPath: '/',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            comments: false,
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'module'],
            },
        }),
        new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 51200 }),
        new webpack.optimize.OccurrenceOrderPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        modules: [path.join(__dirname, 'node_modules')],
        alias: {
            vue$: 'vue/dist/vue',
        },
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader',
        }, {
            test: /\.json$/,
            loader: 'json-loader',
        }],
    },
};

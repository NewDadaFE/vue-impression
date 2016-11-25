const webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.dev.config'),
    PORT = 9008;


new WebpackDevServer(webpack(config), {
    contentBase: './build',
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true,
    },
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
}).listen(PORT, 'localhost', err => {
    if (err) {
        console.log(err);
    }

    console.log(`🌎  Server is listening at localhost:${PORT}`);
});

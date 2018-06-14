'use strict'
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var buildConfig = {};

var pkg = require(path.join(__dirname, './package.json'));

var getConfig = function () {
    var config = {
        entry: {},
        output: {
            path: path.resolve(__dirname, 'dist/scripts/components/'),
            filename: "[name].js"
        },
        resolve: {
            extensions: ['', '.js', '.vue'],
        },
        resolveLoader: {
            fallback: [path.join(__dirname, 'node_modules')],
            root: path.join(__dirname, 'node_modules'),
        },
        module: {
            loaders: [{
                test: /\.vue$/,
                loader: 'vue'
            }, {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash:7]'
                }
            }]
        },
        vue: {
            loaders: {
                js: 'babel'
            }
        },
        eslint: {
            formatter: require('eslint-friendly-formatter')
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                compress: {
                    warnings: false
                }
            }),
            new webpack.optimize.OccurenceOrderPlugin(),
        ],
    };

  return config;
};


// var componentsDir = path.resolve(__dirname, './src/scripts/components/');

// fs.readdir(componentsDir, function (err, files) {
//     if (err) {
//         throw err
//     }
//     console.log('***'+files);

//     files.filter(function (file) {
//         fs.exists(file+'/', function (exists) {
//             console.log(file+'/');
//         });

//         return file.endsWith('.vue') && fs.statSync(path.join(componentsDir, file)).isFile();
//     }).forEach(function (file) {
//         console.log('###file###----'+ file);
//         build(file);
//     });
// });



var number = 0;
function build (name, _path) {
    let _config = getConfig();

    let _name = name.replace('.vue', '');
    let file = `./src/scripts/components/${_name}`;
    let _start = new Date().getTime();
    _config.output.libraryTarget = 'umd';
    _config.entry[_name] = path.resolve(__dirname, file);
    _config.output.library = _name;
    console.log('###_config###----'+JSON.stringify(_config));
    console.log('###_config.entry[_name]###----'+ _config.entry[_name]);

    webpack(_config, function (err, stats) {
        var jsonStats = stats.toJson();
        var assets = jsonStats.assets[0];
        var offset = Math.round((new Date().getTime() - _start) / 1000);
        var index = ++number;
        console.log(`[${index < 10 ? ('0' + index) : index}]  `, addWhiteSpace(`${offset}s`, 10), addWhiteSpace('umd ' + _name, 25), `${(_name, assets.size / 1024).toFixed(2)}k`);

        if (err) {
            throw err;
        }
    });
}



/**********    支持查找带层级的vue 以及js文件打包     ***********/

/**
*@param pathStr 资源路径
* example1 '/Users/rongrongxiong/Desktop/work/vue-impression/src/scripts/components/'
* example2'/Users/rongrongxiong/Desktop/work/vue-impression/src/scripts/components/DatePicker'
*@param name 不带后缀文件/文件夹
*/
function newBuild (pathStr, name, _path) {
    let _config = getConfig();
    let _start = new Date().getTime();
    let pathArr = [];

    _config.output.libraryTarget = 'umd';
    _config.entry[name] = `${pathStr}/${name}`;
    _config.output.library = name;
    pathArr = pathStr.match(/components\/(\S*)/);
    _config.output.path =  path.resolve(__dirname, 'dist/scripts/components/' + (pathArr ? pathArr[1] : ''));

    webpack(_config, function (err, stats) {
        var jsonStats = stats.toJson();
        var assets = jsonStats.assets[0];
        var offset = Math.round((new Date().getTime() - _start) / 1000);
        var index = ++number;
        console.log(`[${index < 10 ? ('0' + index) : index}]  `, addWhiteSpace(`${offset}s`, 10), addWhiteSpace('umd ' + name, 25), `${(name, assets.size / 1024).toFixed(2)}k`);

        if (err) {
            throw err;
        }
    });
}

/**
*@param path 要查找的文件路径
*@param file 带后缀文件/文件夹
*/
function findVueFilePath (filePath, file) {
    // 文件夹
    if ((file.indexOf('.vue') < 0) && (file.indexOf('.js') < 0)) {
        filePath = path.resolve(__dirname, filePath, file);
        fs.readdir(filePath, function (err, files) {
            if (files && files.length > 0) {
                files.forEach(function(file){
                    return findVueFilePath(filePath, file);
                });
            }

            return;
        });
    }
    // vue文件
    else if (file.indexOf('.vue') > 0){
        const name = file.replace('.vue', '');

        newBuild(filePath, name);

        return;
    }
    // js文件
    else if (file.indexOf('.js') > 0){
        const name = file.replace('.js', '');

        newBuild(filePath, name);

        return;
    } else return;
}

findVueFilePath('./src/scripts/components/', '');

/**********    支持查找带层级的vue     ***********/



function addWhiteSpace (str, number) {
    if (str.length < number) {
        var rs = str;

        for (var i = 0; i < number - str.length; i++) {
            rs += ' ';
        }

        return rs;
    }
    return str;
}

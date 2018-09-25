const fs = require('fs-extra');
const gulp = require('gulp');
const minimist = require('minimist');
const plugin = require('gulp-load-plugins')();
const replaceExt = require('replace-ext');
const through = require('through2');
const { createDefaultCompiler, assemble } = require('@vue/component-compiler');

const options = minimist(process.argv.slice(2));

process.env.NODE_ENV = options.env || 'production';

const clean = () => Promise.all([fs.emptyDir('dist'), fs.emptyDir('build')]);

const copyHTML = () => fs.copy('index.html', 'build/index.html');

const copyImage = () => fs.copy('src/images', 'build/images');

const style = () => fs.copy('src/styles', 'dist/styles');

const sass = () => {
    return gulp
        .src('src/styles/index.scss')
        .pipe(plugin.sass().on('error', plugin.sass.logError))
        .pipe(plugin.autoprefixer({ browsers: ['last 30 version', '> 90%'] }))
        .pipe(plugin.cssmin())
        .pipe(gulp.dest('build/styles'));
};

const script = () => {
    const directory = ['components', 'directives', 'mixins', 'utils'];
    const compiler = createDefaultCompiler();

    return gulp
        .src(`src/scripts/?(${directory.join('|')})/**/*.{js,vue}`)
        .pipe(
            through.obj((file, encoding, callback) => {
                if(file.extname === '.vue') {
                    const result = compiler.compileToDescriptor(
                        file.basename,
                        file.contents.toString()
                    );
                    const output = assemble(compiler, file.basename, result);

                    file.contents = new Buffer(output.code);
                    file.path = replaceExt(file.path, '.js');
                }
                callback(null, file);
            })
        )
        .pipe(plugin.babel())
        .pipe(gulp.dest('dist/scripts'));
};

const watch = () => gulp.watch('src/styles/**/*.scss', sass);

const build = gulp.series(clean, gulp.parallel(copyHTML, copyImage, sass));

const release = gulp.series(clean, gulp.parallel(style, script));

module.exports = { watch, build, release };

var gulp = require('gulp'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    cssmin = require('gulp-minify-css'),
    sequence = require('gulp-run-sequence'),
    autoprefixer = require('gulp-autoprefixer');


// 清空
gulp.task('clean', function(){
    return gulp.src('build',  {read: false})
    .pipe(clean({force: true}));
});

//复制图片
gulp.task('copy:image', function(){
    return gulp.src('src/images/*.*')
    // .pipe(imagemin({verbose: true}))
    .pipe(gulp.dest('build/images'));
});

//复制字体
gulp.task('copy:font', function(){
    return gulp.src('src/styles/font-awesome/fonts/**')
    .pipe(gulp.dest('build/styles/fonts'));
});

//复制HTML
gulp.task('copy:html', function(){
    return gulp.src('index.html')
    .pipe(gulp.dest('build'));
});

//项目样式
gulp.task('sass:index', function(){
    return gulp.src('src/styles/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 30 version', '> 90%']}))
    .pipe(cssmin())
    .pipe(gulp.dest('build/styles'));
});

//组件样式
gulp.task('sass:impression', function(){
    return gulp.src('src/styles/impression/index.scss')
    .pipe(rename('impression.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 30 version', '> 90%']}))
    .pipe(cssmin())
    .pipe(gulp.dest('build/styles'));
});

//font awesome
gulp.task('sass:font-awesome', function(){
    return gulp.src('src/styles/font-awesome/font-awesome.scss')
    .pipe(rename('font-awesome.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 30 version', '> 90%']}))
    .pipe(cssmin())
    .pipe(gulp.dest('build/styles'));
});

//监听
gulp.task('watch', function(){
    gulp.watch('src/styles/**/*.scss', ['sass:index', 'sass:font-awesome']);
});


//本地启动
gulp.task('build', function(cb) {
    sequence('clean', ['copy:html', 'copy:image', 'copy:font'], ['sass:index', 'sass:impression', 'sass:font-awesome'], cb);
});

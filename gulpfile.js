const { src, dest, watch, series } = require('gulp');

function less(cb) {
    const gulp_less = require('gulp-less');

    return src('./assets/less/styles.less')
        .pipe(gulp_less())
        .pipe(dest('./assets/css'))
    cb();
}

function concat(cb) {
    const gulp_concat = require('gulp-concat');

    return src([
        './assets/js/lax.js',
        './assets/js/tiny-slider.js',
        './assets/js/scripts.js'
    ])
        .pipe(gulp_concat('scripts.min.js'))
        .pipe(dest('./assets/js/min'))
    cb();
}

function uglify(db) {
    const gulp_uglify = require('gulp-uglify');

    return src('./assets/js/min/*.js')
        .pipe(gulp_uglify())
        .pipe(dest('./assets/js/min'))
    cb();
}

function minifyCSS(cb) {
    const clean_css = require('gulp-clean-css');

    return src('./assets/css/*.css')
        .pipe(clean_css({ compatibility: 'ie8' }))
        .pipe(dest('./assets/css'))
    cb();
}

function watchFiles() {
    watch('./assets/less/*.less', less);
    watch('./assets/js/*.js', concat);
}

exports.default = series(watchFiles);
exports.build = series(less, concat, uglify, minifyCSS);
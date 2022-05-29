var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
    return gulp.src('./assets/less/styles.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less')]
        }))
        .pipe(gulp.dest('./assets/css'));
});

function defaultTask(less) {
    less();
}

exports.default = defaultTask
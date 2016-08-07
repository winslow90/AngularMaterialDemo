/**
 * Created by superman90 on 8/7/16.
 */
const path = require('path');

const gulp = require('gulp');
const del = require('del');
// to check the state of a file
const filter = require('gulp-filter');

const conf = require('../conf/gulp.conf');

gulp.task('clean', clean);
gulp.task('other', other);

function clean() {
    return del([conf.paths.dist, conf.paths.tmp]);
}

function other() {
    const fileFilter = filter(file => file.stat.isFile());

    return gulp.src([
            path.join(conf.paths.src, '/**/*'),
            path.join(`!${conf.paths.src}`, '/**/*.{html,css,js,scss}')
        ])
        .pipe(fileFilter)
        .pipe(gulp.dest(conf.paths.tmp));
}

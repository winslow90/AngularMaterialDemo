/**
 * Created by superman90 on 8/7/16.
 */
const gulp = require('gulp');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const conf = require('../conf/gulp.conf');

gulp.task('styles', styles);

function styles() {
    return gulp.src(conf.path.src('**/index.scss'))
        .pipe(sourcemaps.init())
        //sass
        .pipe(sass({outputStyle: 'expanded'})).on('error', conf.errorHandler('Sass'))
        //gulp plugin to pipe CSS through several processors, but parse CSS only once.
        .pipe(postcss([autoprefixer()])).on('error', conf.errorHandler('Autoprefixer'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(conf.path.tmp()))
        .pipe(browserSync.stream());
}

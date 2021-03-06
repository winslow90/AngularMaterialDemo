/**
 * Created by superman90 on 8/7/16.
 */
const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');

const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('inject', gulp.series(gulp.parallel('styles', 'scripts'),'other', 'inject'));
gulp.task('serve', gulp.series('inject', 'watch', 'browsersync'));
gulp.task('default', gulp.series('clean', 'inject'));


gulp.task('watch', watch);

function reloadBrowserSync(cb) {
    browserSync.reload();
    cb();
}

function watch(done) {
    gulp.watch([
        conf.path.src('**/index.html'),
        'bower.json'
    ], gulp.parallel('inject'));

    gulp.watch(conf.path.tmp('**/index.html'), reloadBrowserSync);
    gulp.watch([
        conf.path.src('**/*.scss'),
        conf.path.src('**/*.css')
    ], gulp.series('styles'));
    gulp.watch(conf.path.src('**/*.js'), gulp.series('inject'));
    done();
}

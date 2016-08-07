/**
 * Created by superman90 on 8/7/16.
 */
const conf = require('./gulp.conf');

module.exports = function () {
    return {
        server: {
            baseDir: [
                conf.paths.tmp
            ],
            routes: {
                '/bower_components': 'bower_components'
            }
        },
        open: false
    };
};

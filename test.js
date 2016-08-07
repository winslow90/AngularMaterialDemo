/**
 * Created by superman90 on 8/7/16.
 */
const fs = require("fs");
const conf = require('./conf/gulp.conf');

const files = fs.readdirSync(conf.path.tmp());

console.log(files);

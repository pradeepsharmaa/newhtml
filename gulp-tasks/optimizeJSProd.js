var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('optimizeJSProd',['cleanJS', 'bless', 'handlebarsCompile'], shell.task([
  'node r.js -o gulp-tasks/build.js'
]))
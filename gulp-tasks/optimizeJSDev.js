var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('optimizeJSDev',['bless', 'handlebarsCompile'], shell.task([
	  'node r.js -o gulp-tasks/build.js optimize=none'
]));


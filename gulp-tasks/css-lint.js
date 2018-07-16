var gulp = require('gulp'),
	csslint = require('gulp-csslint'),
	htmlReporter = require('gulp-csslint-report');

//CSS lint
gulp.task('css-lint',['bless'], function(cb) {
  return gulp.src('./build/css/*.css')
    .pipe(csslint())
    .pipe(htmlReporter({'filename': 'RL-csslint-report.html', 'directory': './csslint-reports/'}));
});

var gulp = require('gulp');
var bless = require('gulp-bless');

gulp.task('bless',['sass'], function(cb) {
    return gulp.src(['./web/webroot/_ui/responsive/rl-fe-build/css/**/*.css', '!./web/webroot/_ui/responsive/rl-fe-build/css/global.css'])
        .pipe(bless())
		.pipe(gulp.dest('./web/webroot/_ui/responsive/rl-fe-build/css/'));
});
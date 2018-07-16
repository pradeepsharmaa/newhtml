var gulp = require('gulp');
var jsmin = require('gulp-uglify');
 
gulp.task('js-min',['amdOptimizeProd'], function () {
		return gulp.src('./build/js/*.js')
        .pipe(jsmin())
        .pipe(gulp.dest('./build/js/'));
});
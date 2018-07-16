var gulp = require('gulp');
var clean = require('gulp-clean');
 
gulp.task('cleanJS', function () {
    return gulp.src(['./build/js/'], 
	{read: false})
        .pipe(clean({force: true}));
});
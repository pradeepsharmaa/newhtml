var gulp = require('gulp');
var clean = require('gulp-clean');
 
gulp.task('cleanCSS', function () {
    return gulp.src(['./build/css/'], 
	{read: false})
        .pipe(clean({force: true}));
});
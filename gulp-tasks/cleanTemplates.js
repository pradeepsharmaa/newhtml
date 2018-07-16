var gulp = require('gulp');
var clean = require('gulp-clean');
 
gulp.task('cleanTemplates', function () {
    return gulp.src(['./build/templates/',
                     './build/compiledTemplates/'], 
	{read: false})
        .pipe(clean({force: true}));
});
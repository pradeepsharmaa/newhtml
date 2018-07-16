var gulp = require('gulp');

//copy src files from dev to build folder
gulp.task('devCopyJS',['cleanJS'], function() {
	gulp.src("./fe-source/bower_components/**/")
    .pipe(gulp.dest('./build/bower_components/'));
    gulp.src("./fe-source/icons/**/")
    .pipe(gulp.dest('./build/icons/'));
    gulp.src("./fe-source/fonts/**/")
    .pipe(gulp.dest('./build/fonts/'));
    gulp.src("./fe-source/images/**/")
    .pipe(gulp.dest('./build/images/'));
	gulp.src("./fe-source/json/**/")
    .pipe(gulp.dest('./build/json/'));

    return gulp.src("./fe-source/js/**/")
    .pipe(gulp.dest('./build/js/'));
});

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	rename = require('gulp-rename');
	
//SCSS to CSS generation
gulp.task('sass',['cleanCSS'], function(cb) {
    gulp.src('./fe-source/scss/**/*.scss')
    	.pipe(sourcemaps.init())
    	.pipe(sass({outputStyle: 'compressed'}))
    	.pipe(sourcemaps.write('css-sourcemaps'))
        .pipe(gulp.dest('./build/css'));
    return gulp.src('./fe-source/scss/global.scss')
    .pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('global-IE.css'))
    .pipe(sourcemaps.write('css-sourcemaps'))
    .pipe(gulp.dest('./build/css/'));
});
var gulp = require('gulp');
var defineModule = require('gulp-define-module');
var handlebars = require('gulp-handlebars');

gulp.task('handlebarsCompile', ['cleanTemplates'], function(cb) {
  // Load templates from the templates/ folder relative to where gulp was executed
  return gulp.src('./fe-source/templates/**/*.html')
    // Compile each Handlebars template source file to a template function
    .pipe(handlebars())
    // Define templates as AMD modules
    .pipe(defineModule('amd'))
    // Write the output into the templates folder
    .pipe(gulp.dest('./fe-source/compiledTemplates/'));
});

gulp.task('handlebarsCompileDev', ['cleanTemplates'], function(cb) {
	  // Load templates from the templates/ folder relative to where gulp was executed
	  return gulp.src('./fe-source/templates/**/*.html')
	    // Compile each Handlebars template source file to a template function
	    .pipe(handlebars())
	    // Define templates as AMD modules
	    .pipe(defineModule('amd'))
	    // Write the output into the templates folder
	    .pipe(gulp.dest('./build/compiledTemplates/'));
	});
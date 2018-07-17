'use strict';
var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
requireDir('./gulp-tasks');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync({
	  proxy: "localhost:3000",  // local node app address
	  port: 5000,  // use *different* port than above
	  notify: true
	});
  });
  
  gulp.task('nodemon', function (cb) {
	var called = false;
	return nodemon({
	  script: 'app.js',
	  ignore: [
		'gulpfile.js',
		'node_modules/'
	  ]
	})
	.on('start', function () {
	  if (!called) {
		called = true;
		cb();
	  }
	})
	.on('restart', function () {
	  setTimeout(function () {
		reload({ stream: false });
	  }, 1000);
	});
  });
  
  gulp.task('dev-server', ['browser-sync'], function () {
	gulp.watch(["./views/**/*.html","./build/css/**/*.css", "./build/js/**/*.js", "./build/images/**/*/", "./build/icons/**/*/"], reload);
  });




gulp.task('dev-build',function(){
	runSequence(['css-lint', 'devCopyJS', 'handlebarsCompileDev'],
              function() {
    		//watcher task for JS changes
			gulp.watch(["./fe-source/js/**/*.js"], ['devCopyJS', function(event) {
			  console.log('JS changes done. Proceed with Testing.');
			}]);
			//watcher task for Templates changes
			gulp.watch(["./fe-source/templates/**/*.html"], ['handlebarsCompileDev', function(event) {
			  console.log('Templates changes done. Proceed with Testing.');
			}]);
			//watcher task for CSS changes
			gulp.watch(["./fe-source/scss/**/*.scss"], ['sass', function(){
				console.log('CSS changes done. Proceed with Testing.');
			}]);
			
			console.log('watching changes - CSS, JS, and handlebar templates');
			
		});
	});

//the dev task above times out on the child process, hence the inclusion of two builds.

gulp.task('prod-build', function(callback){
	runSequence('optimizeJSProd');
	runSequence('prodCopy');
});
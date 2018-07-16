var gulp=require('gulp'),
    sonar = require('gulp-sonar'),
    os = require('os'),
    open = require('gulp-open'),
    browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));


gulp.task('sonar-run', function (cb) {
    var options = {
        sonar: {
            login: '<username>',
            username: '<username>',
            password: '<pass>',
            host: {
                url: ''
            },
            analysis:{
                mode: 'preview'
            },
            issuesReport:{
                html:{
                    enable: 'true'
                },
                lightModeOnly : 'false'
            },
            projectKey: '',
            projectName: '',
            projectVersion: '1.0',
            // comma-delimited string of source directories 
            sources: '/fe-source/js',
            language: 'js',
            sourceEncoding: 'UTF-8',
            exec: {
                // All these properties will be send to the child_process.exec method (see: https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback ) 
                // Increase the amount of data allowed on stdout or stderr (if this value is exceeded then the child process is killed, and the gulp-sonar will fail). 
                maxBuffer : 1024*1024
            }
        }
    };
 
    // gulp source doesn't matter, all files are referenced in options object above 
    gulp.src('thisFileDoesNotExist.js', { read: false })
        .pipe(sonar(options))
        .on('error', util.log);
        
    return gulp.src('.sonar/issues-report/issues-report.html')
        .pipe(open({app: browser}));
});
  
gulp.task('sonar',['sonar-run'], function(){
  return gulp.src('.sonar/issues-report/issues-report.html')
  .pipe(open({app: browser}));
});
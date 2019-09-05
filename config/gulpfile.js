var gulp = require('gulp');
var less = require('gulp-less');
var styleInject = require("gulp-style-inject");

gulp.task('less', function() {
    return gulp.src('../src/**/*.less')  
        .pipe(less())
        .pipe(gulp.dest('../src/'))
});
gulp.task('style-inject', function(){
    return gulp.src('../src/pages/**/*.html')
        .pipe(styleInject())
        .pipe(gulp.dest("../src/injectedPages"))
});
gulp.task('watch', function() {
    gulp.watch('../src/pages/**/*.html', gulp.series('style-inject'));
    gulp.watch('../src/pages/**/*.css', gulp.series('style-inject'));
    gulp.watch('../src/**/*.less', gulp.series('less'));  
});

gulp.task('default', gulp.series('watch')); 
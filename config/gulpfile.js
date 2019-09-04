var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
    return gulp.src('../src/**/*.less')  // only compile the entry file
        .pipe(less())
        .pipe(gulp.dest('../src/'))
});
gulp.task('watch', function() {
    gulp.watch('../src/**/*.less', gulp.series('less'));  // Watch all the .less files into styles, then run the less task
});

gulp.task('default', gulp.series('watch')); // Default will run the 'entry' watch task
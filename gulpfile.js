var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var path = require('path');

gulp.task('less', function() {
    return gulp.src('./style.less')  // only compile the entry file
        .pipe(plumber())
        .pipe(less({
            paths: ['./', './node_modules']
        }))
        .pipe(prefix())
        .pipe(gulp.dest('./'))
        .pipe(livereload());
});
gulp.task('watch', function() {
    gulp.watch('./*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['watch']); // Default will run the 'entry' watch task

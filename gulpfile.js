'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');


// server connect
gulp.task('connect', function() {
  connect.server({
    root: 'public/',
    livereload: true
  });
});

gulp.task('sass', function () {
	gulp.src('style.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(autoprefixer('last 2 version', 'ie 8', 'ie 9', 'ios 6', 'android 4'))
		.pipe(gulp.dest('public/css'))
		.pipe(connect.reload());
});

gulp.task('html', function () {
	return gulp.src('public/index.html')
		.pipe(connect.reload());
})

gulp.task('watch', function () {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('index.html', ['html']);
});

gulp.task('default', ['connect' ,'watch', 'html', 'sass']);

'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');

var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename'); 
	
 
sass.compiler = require('node-sass');



gulp.task('styles', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        
		.pipe(minifyCss())
        .pipe(rename({
            extname: '.min.css'
        }))
		
		.pipe(gulp.dest('./css/'));
});


gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', (done) => {
        gulp.series(['styles'])(done);
    });
});



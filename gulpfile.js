var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
let cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uncss = require('gulp-uncss');
var beautify = require('gulp-beautify');

gulp.task('default', function () {
    return gulp.src('./src/css/*.css')
        .pipe(concatCss("styles/bundle.css"))
        .pipe(uncss({
            html: ['./public/index.html']
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(beautify({indent_size: 2}))
        .pipe(rename("bundle.min.css"))
        .pipe(gulp.dest('src/out/'));
});


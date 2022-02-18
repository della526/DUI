const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass')); //处理scss
const cleanCSS = require('gulp-clean-css') //压缩css

gulp.task('scss',async function(){
    return gulp.src('components/css/**/*.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
})
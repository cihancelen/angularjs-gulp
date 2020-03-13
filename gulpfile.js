const gulp = require('gulp');
const gulpConcat = require('gulp-concat');

gulp.task('js', () => {
    return gulp
        .src(['./node_modules/angular/angular.min.js','./src/**/*.js'])
        .pipe(gulpConcat('bundle.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('serve', () => {
    gulp.watch('./src/**/*.js', gulp.series('js'));
});
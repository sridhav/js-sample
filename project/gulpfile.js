var gulp = require('gulp')
, bundle = require("gulp-bundle-assets");
 
// task
gulp.task('bundle', function () {
    gulp.src(['./bundle.config.js']) // path to your files
    .pipe(bundle())
    .pipe(gulp.dest('./js/minified/'));
});
var gulp   = require('gulp');
var config = require('../../config').fonts.development;

/**
 * Copy fonts to folder
 */
// gulp.task('copy:fonts', ['fontcustom'], function() {
//   return gulp.src(config.src)
//     .pipe(gulp.dest(config.dest));
// });


gulp.task('copy:fonts', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
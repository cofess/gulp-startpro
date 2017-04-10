var gulp   = require('gulp');
var config = require('../../config').fonts.production;

/**
 * Copy fonts to folder
 */
gulp.task('copy:fonts:production', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});

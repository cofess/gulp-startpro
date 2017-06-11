var gulp           = require('gulp')
var postcss        = require('gulp-postcss')
var stylelint      = require('stylelint')
var reporter       = require('postcss-reporter')
var config         = require('../../config').csslint

if (!config) return

gulp.task('csslint', function() {
  return gulp.src(config.src)
    .pipe(postcss([
      stylelint(config.options.stylelint),
      reporter(config.options.reporter)
    ]));
});

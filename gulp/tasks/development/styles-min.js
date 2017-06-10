var path           = require('path')
var gulp           = require('gulp')
var minify         = require('gulp-clean-css')
var plumber        = require('gulp-plumber')
// var sourcemaps     = require('gulp-sourcemaps')
var gutil          = require('gulp-util')
var browsersync    = require('browser-sync')
// var autoprefixer   = require('autoprefixer')
var rename         = require('gulp-rename')
var config         = require('../../config').styles

if (!config) return

function onError (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
}

gulp.task('styles-min', function () {
  browsersync.notify('Transforming CSS with CSS Minify');

  return gulp.src(path.join(config.dest,'/*.css'))
    .pipe(plumber({
      errorHandler: onError
    }))
    // .pipe(sourcemaps.init())
    .pipe(minify(config.options.minify))
    // .pipe(sourcemaps.write('.'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dest));
});

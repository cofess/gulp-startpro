var gulp           = require('gulp')
var config         = require('../../config').watch

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {
  // gulp.watch(config.jekyll,  ['jekyll-rebuild']);
  gulp.watch(config.styles,  ['styles', 'styles-lint', 'styles-min']);
  gulp.watch(config.scripts, ['scripts', 'jshint']);
  gulp.watch(config.images,  ['images']);
  gulp.watch(config.fonts,   ['copy:fonts']);
  gulp.watch(config.static,  ['copy:static']);
  gulp.watch(config.sprites, ['sprites']);
  gulp.watch(config.html,    ['html']);
});

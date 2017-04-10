var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
// gulp.task('build:production', function(callback) {
//   runSequence('delete', 'jekyll:production',
//   [
//     'styles',
//     'scripts',
//     'images',
//     'copy:fonts'
//   ],
//   'base64',
//   [
//     'optimize:css',
//     'optimize:js',
//     'optimize:images',
//     'optimize:html',
//     'copy:fonts:production'
//   ],
//   'revision',
//   'rev:collect',
//   [
//     'webp',
//     'gzip'
//   ],
//   callback);
// });
// 
gulp.task('build:production', function(callback) {
  runSequence('delete', 
  [
    'styles',
    'scripts',
    'images',
    'copy:fonts'
  ],
  'base64',
  [
    'optimize:css',
    'optimize:js',
    'optimize:images',
    'optimize:html',
    'copy:fonts:production'
  ],
  'revision',
  'rev:collect',
  [
    'webp',
    'gzip'
  ],
  callback);
});

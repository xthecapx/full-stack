var gulp = require('gulp'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    changed = require('gulp-changed'),
    rev = require('gulp-rev'),
    browserSync = require('browser-sync').create(),
    del = require('del');

gulp.task('serve', function () {
   var files = [
      'templates/*.html',
      'index.html',
      'styles/*.css',
      'scripts/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: "./",
         index: "index.html"
      }
   });

  // Watch any files in dist/, reload on change
  gulp.watch(['scripts/*.js', 'styles/*.css', 'templates/*.html', 'index.html']).on('change', browserSync.reload);
});

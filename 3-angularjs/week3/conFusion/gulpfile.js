var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('serve', function () {
   var files = [
      'app/templates/*.html',
      'index.html',
      'app/index.html',
      'app/styles/*.css',
      'app/scripts/*.js'
   ];

   browserSync.init({
      server: {
        baseDir: "./",
        routes: {
          "/bower_components": "./bower_components"
        }
      }
   });

  // Watch any files in dist/, reload on change
  gulp.watch(files).on('change', browserSync.reload);
});

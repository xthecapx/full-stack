var gulp = require('gulp'),
    usemin = require('gulp-usemin'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css'),
    rev = require('gulp-rev'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    flatten = require('gulp-flatten');


gulp.task('copyimages', function() {
    gulp.src('./app/images/*')
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('copyfonts', function() {
    gulp.src('./bower_components/**/fonts/*.{ttf,woff,woff2,eof,svg}')
    .pipe(flatten({ includeParents: 0} ))
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('dist', ['copyimages', 'copyfonts'], function () {
  return gulp.src('./app/**/*.html')
      .pipe(usemin({
        css: [cleanCSS(), rev()],
        js: [ngAnnotate(), uglify(), rev()]
      }))
      .pipe(gulp.dest('dist/'));
});

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

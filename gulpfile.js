var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  server = require('gulp-express'),
  babel = require('gulp-babel'),
  mergeStream = require('merge-stream');

gulp.task('server', function() {
  return server.run(['server/app.js']);
});

gulp.task('babel', function() {
  return mergeStream(
    gulp.src('node_modules/babel-polyfill/dist/polyfill.min.js'),
    gulp.src('js/**/*.js')
    .pipe(plumber())
    .pipe(babel())
  ).pipe(gulp.dest("dist"));
});

gulp.task('default', ['server', 'babel'], function() {
  gulp.watch("js/**/*.js", ["babel"])
});
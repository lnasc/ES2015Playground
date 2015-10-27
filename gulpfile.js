var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	server = require('gulp-express'),
  babel = require('gulp-babel');

	gulp.task('server', function () {
		return server.run(['server/app.js']);
	});

  gulp.task('babel', function () {
    return gulp.src('js/**/*.js')
      .pipe(plumber())
      .pipe(babel({ modules: 'amd' }))
      .pipe(gulp.dest("dist"));
  });

	gulp.task('default', ['server', 'babel'], function () {
    gulp.watch("js/**/*.js", ["babel"])
  });
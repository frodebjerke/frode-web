var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var _if = require('gulp-if');
var buffer = require('gulp-buffer');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var args = require('yargs').argv;
var isProduction = !!args.production;

gulp.task('default', buildOnce());

var jsSource = './app/app.js';
var www = './www';
var customOpts = {
  debug: !isProduction
};

function buildOnce() {
  var bundle = browserify(jsSource, customOpts);
  return bootstrapBundle(bundle);
}

function bootstrapBundle(bundle) {
  return function () {
    bundle.bundle()
      .on('error', function () {

      })
      .pipe(source('app.bundle.js'))
      .pipe(_if(isProduction, buffer()))
      .pipe(_if(isProduction, uglify()))
      .pipe(gulp.dest(www))
      .pipe(_if(!isProduction, notify('Compiled javascript')));
  }
}

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var _if = require('gulp-if');
var buffer = require('gulp-buffer');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var args = require('yargs').argv;
var isProduction = !!args.production;
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var watchify = require('watchify');
var assign = require('lodash').assign;
var join = require("path").resolve;
var stringify = require('stringify');

var jsSource = './app/app.js';
var output = "www/"
var customOpts = {
  debug: !isProduction
};

gulp.task('js', buildOnce());
gulp.task('watch-js', watchJs());
gulp.task('watch', ['watch-js']);
gulp.task('dev', ['watch'], serve);
gulp.task('default', ['js']);



function serve() {
    browserSync.init({
      server: {
          baseDir: output
      }
    });
}

function buildOnce() {
  var bundle = browserify(jsSource, customOpts);
  return bootstrapBundle(bundle);
}

function watchJs() {
  var opts = assign({}, watchify.args, customOpts);
  var w = watchify(browserify(jsSource, opts));
  var bundle = bootstrapBundle(w);
  w.on('update', bundle);
  return bundle
}

function bootstrapBundle(bundle) {
  bundle.transform(stringify(['.md']))
  return function () {
    return bundle.bundle()
      .on('log', notify)
      .on('error', notify)
      .pipe(source('app.bundle.js'))
      .pipe(_if(isProduction, buffer()))
      .pipe(_if(isProduction, uglify()))
      .pipe(gulp.dest(output))
      .pipe(_if(!isProduction, notify('Compiled javascript')))
      .pipe(_if(!isProduction, reload({stream: true})));
  }
}

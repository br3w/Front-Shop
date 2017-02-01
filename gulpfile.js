

// Load plugins
var gulp = require('gulp'),
    copy = require('copy'),
    es = require('event-stream'),
    connect = require('gulp-connect'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    dependencies = require('gulp-html-dependencies'),
    del = require('del');


gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 8000,
    livereload: false
  });
});

// Copy
gulp.task('copy', function() {
    gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'))

    gulp.src('app/htmls/**/*')
        .pipe(gulp.dest('dist/htmls/'))

    gulp.src('app/data/**/*')
        .pipe(gulp.dest('dist/data/'))

    gulp.src('app/.htaccess')
        .pipe(gulp.dest('dist/'))
});

// Dependencias
gulp.task('dependencies', function() {
    return gulp.src('app/index.html')
        .pipe(dependencies({
            dest: 'dist',
            prefix: '/vendor',
        }))
        .pipe(gulp.dest('dist'));
});

// Styles
gulp.task('styles', function() {
  return sass('app/styles/main.scss', { style: 'expanded' })

    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Vendor
gulp.task('vendor', function() {
  return gulp.src(
      [
        'node_modules/angular/angular.min.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-messages/angular-messages.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/angular-loader/angular-loader.min.js',
        'node_modules/angular-touch/angular-touch.min.js',

        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/jquery.pep/src/jquery.pep.js',
        'bower_components/ngMask/dist/ngMask.min.js'
      ])
      .pipe(gulp.dest('./dist/vendor'));
});

// Scripts
gulp.task('scripts', function() {
    return es.concat(
        gulp.src('app/scripts/app.js')
            .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/scripts')),

        gulp.src('app/scripts/configs/**/*.js')
            .pipe(concat('config.js'))
            .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/scripts')),

        gulp.src('app/scripts/factorys/**/*.js')
            .pipe(concat('factory.js'))
            .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/scripts')),

        gulp.src('app/scripts/controllers/**/*.js')
            .pipe(concat('controller.js'))
            .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/scripts')),

        gulp.src('app/scripts/directives/**/*.js')
            .pipe(concat('directive.js'))
            .pipe(rename({ suffix: '.min' }))
            //.pipe(uglify())
            .pipe(gulp.dest('dist/scripts'))
            .pipe(notify({ message: 'Scripts task complete' }))
        );
});

// Images
gulp.task('images', function() {
  return gulp.src('app/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

// Clean
gulp.task('clean', function() {
  return del('dist/');
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('connect','styles', 'scripts', 'vendor', 'images', 'dependencies', 'copy', 'watch');
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('app/styles/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('app/scripts/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('app/images/**/*', ['images']);

  // Watch html files
  gulp.watch('app/**/*', ['copy', 'dependencies']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);

});

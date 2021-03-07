/*
                        /$$
                       | $$
     /$$$$$$  /$$   /$$| $$  /$$$$$$
    /$$__  $$| $$  | $$| $$ /$$__  $$
   | $$  \ $$| $$  | $$| $$| $$  \ $$
   | $$  | $$| $$  | $$| $$| $$  | $$
   |  $$$$$$$|  $$$$$$/| $$| $$$$$$$/
    \____  $$ \______/ |__/| $$____/
    /$$  \ $$              | $$
   |  $$$$$$/              | $$
    \______/               |__/

*/
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var minifyCss   = require('gulp-minify-css');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');

var messages = {
  jekyllBuild: '<span style="color: grey">Booming:</span> $ jekyll build'
};

// Build the Jekyll Site
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('close', done);
});

// Rebuild Jekyll & do page reload
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

// Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
  browserSync({
    server: {
        baseDir: '_site'
    }
  });
});

// Compile files from styles folder, compress them, prefix them
gulp.task('sass', function () {
  return gulp.src('styles/estilo.scss')
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('styles'))
    .pipe(browserSync.reload({stream:true}));
});

// Watch some files for changes and recompile
gulp.task('watch', function () {
  gulp.watch('styles/**/*.scss', ['sass']);
  gulp.watch(['*.html', '*.md', '_layouts/*.html', '_includes/*', '_posts/*.md', 'styles/*.css', 'scripts/*.js', 'love/*.md', 'olympicgames/*.md', 'wtf/*.md', 'categories/*.md', '_includes/_svg/*', 'images/svg/*.svg'], ['jekyll-rebuild']);
});

// Default task, running just `gulp` will compile the sass, compile the jekyll
// site, launch BrowserSync & watch files.
gulp.task('default', ['browser-sync', 'watch']);
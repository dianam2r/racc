var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
/*gulp.task('hello', function(){
  console.log("Hello Diana")
});*/

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  })
});

gulp.task('sass', function(){
  return gulp.src('app/resources/scss/style.scss')
  .pipe(sass({
      includePaths: ['node_modules/susy/sass']
  }))
  .pipe(gulp.dest('app/resources/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('watch', ['browserSync','sass'], function(){
  gulp.watch('app/resources/scss/style.scss',['sass']);
  gulp.watch('app/*.html',browserSync.reload);
  // En caso de tener JS en el código :
  //gulp.watch('app/resources/js/*.js',browserSync.reload);
});

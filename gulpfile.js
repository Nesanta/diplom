var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

 //и что-то выведем в консоль для подтверждения
gulp.task('default', function(){
  console.log("something");
});

gulp.task('sass', function (cb) {
  return gulp.src('src/sass/**/*.sass') 
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest('./src/css/'))
  cb();
});

gulp.task('watch', function() {
  gulp.watch('.src//sass/**/*.sass', gulp.parallel('sass'));
});

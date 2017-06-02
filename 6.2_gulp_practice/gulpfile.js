var gulp		= require('gulp'),
	extender	= require('gulp-html-extend');

gulp.task('extend',function(){
	gulp.src('./app/dist/*.html')
		.pipe(extender({annotations:false,verbose:false}))
		.pipe(gulp.dest('./app/preview'));
});

gulp.task('default',['extend']);

var gulp 	= require('gulp'),
	compass = require('gulp-compass');

	gulp.task('compass',function(){
		return gulp.src('./style/scss/*.scss')
					.pipe(compass({
						sourcemap: true,
						time: true,
						css: './style/css/',
						sass: './style/scss/',
						style: 'compact' //nested , expanded. compact, compressed
					}))
					.pipe(gulp.dest('./style/css/'));
	});

	gulp.task('watch',function(){
		gulp.watch('./style//scss/*.scss',['compass']);
	})

	gulp.task('default',['compass','watch']);
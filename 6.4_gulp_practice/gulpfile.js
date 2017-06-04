var gulp		= require('gulp'),
	webserver	= require('gulp-webserver'),
	extender	= require('gulp-html-extend'),
	md			= require('gulp-markdown');


	gulp.task('md',function(){
		return gulp.src('./md/**/*.md')//所有md資料夾以下md檔或子資料夾有md檔的都拿
					.pipe(md())
				 	.pipe(gulp.dest('./md/md2html/'));
	})

	gulp.task('extender',['md'],function(){
		return gulp.src('./md/md2html/*.html')
				  	.pipe(extender({annotations:true,verbose:false}))
				  	.pipe(gulp.dest('./dist/'));
	});
	gulp.task('watch',function(){
		gulp.watch('./md/**/*.md',['extender']);
	});
	gulp.task('webserver',['extender'],function(){
		return gulp.src('./dist/')
					.pipe(webserver({
						port:1111,
						livereload: true,
						dirctoryListing: false,
						open: true,
						fallback: 'test.html'
					}));
	});
	gulp.task('default',['watch','webserver']);
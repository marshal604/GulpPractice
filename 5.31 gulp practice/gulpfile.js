var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver',function(){
	gulp.src('./app/')
		.pipe(webserver({
			port: 5555,
			livereload: true,
			directoryListing: false,
			open: true,
			fallback: 'index.html'
		}));
});

gulp.task('default',['webserver']);

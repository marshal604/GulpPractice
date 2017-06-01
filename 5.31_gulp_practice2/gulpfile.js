var gulp 	  	= require('gulp'),//主體
	concat 	  	= require('gulp-concat'),//合併檔案
	cleanCSS 	= require('gulp-clean-css'),//壓縮ＣＳＳ
	uglify 	  	= require('gulp-uglify'),//混淆並壓縮ＪＳ
	rename	  	= require('gulp-rename');//重新命名檔案
	htmlreplace = require('gulp-html-replace');//置換html中的檔案
	minifyHTML	= require('gulp-minify-html');//壓縮js
	//一個作業流程,隨意命名,後面是該名稱要執行的事情
	gulp.task('concat',function(){
		return gulp.src('./css/*.css')//目標資料夾
					.pipe(concat('all.css'))//任務流程,壓縮成all.css
					.pipe(gulp.dest('./build/css/'));//任務流程,儲存目的地
	});
	gulp.task('minify-css',['concat'],function(){
		return gulp.src('./build/css/all.css')
					.pipe(cleanCSS({
						keepBreaks: true
					}))
					.pipe(rename(function(path){
						path.basename += '.min';
						path.extname = ".css";
					}))
					.pipe(gulp.dest('./build/css/'));
	});
	gulp.task('uglify',function(){
		return gulp.src('./js/*.js')
					.pipe(uglify())
					.pipe(rename(function(path){
						path.basename += ".min";
						path.extname = ".js";
					}))
					.pipe(gulp.dest('./build/js/'));
	});
	gulp.task('html-replace',function(){
		var opts = {comments:false,spare:false,quotes:true};
		return gulp.src('index.html')
					.pipe(htmlreplace({
						'css': 'css/all.min.css',
						'js': 'js/all.min.js'
					}))
					.pipe(minifyHTML(opts))
					.pipe(gulp.dest('./build/'));
	});


	gulp.task('default',['html-replace','minify-css','uglify']);

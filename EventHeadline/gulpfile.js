
var gulp       	 = require('gulp'),
		sass         = require('gulp-sass'),
		browserSync  = require('browser-sync'),
		concat  		 = require('gulp-concat'),
		uglify    	 = require('gulp-uglifyjs');
		cssnano    	 = require('gulp-cssnano'),
		rename    	 = require('gulp-rename'),
		del    	     = require('del'),
		imagemin     = require('gulp-imagemin'),
		cache        = require('gulp-cache'),
		autoprefixer = require('gulp-autoprefixer'),
		plumber      = require('gulp-plumber'),
		notify       = require( 'gulp-notify' ),
		spritesmith  = require('gulp.spritesmith');


//*********
gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass().on( 'error', notify.onError({
      message: "<%= error.message %>",
      title  : "Sass Error!"
    }))
	)
	.pipe(plumber())
	.pipe(autoprefixer(['last 20 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});


//**********
gulp.task('min-css', function() { 
	return gulp.src('app/css/style.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('dist/css'))
});

//*********
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		socket: { domain: 'http://localhost:3000' }
	});
});

//**********
//gulp.task('js-libs', function() {
//	return gulp.src([
//		'app/libs/fancybox/jquery.fancybox.js',
//		])
//		.pipe(concat('jquery.fancybox.min.js'))
//		.pipe(uglify())
//		.pipe(gulp.dest('app/libs/fancybox'));
//});

//**********
//gulp.task('css-libs', function() {
//	return gulp.src('app/css/owl-carousel-theme.css')
//		.pipe(cssnano())
//		.pipe(rename({suffix: '.min'}))
//		.pipe(gulp.dest('app/libs/owl-carousel'));
//});


//***********
gulp.task('watch', ['browser-sync', 'sass'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload); 
});


//**********
gulp.task('sprite', function () {
  var spriteData = gulp.src('app/img/icons/*.png').pipe(spritesmith({
  	imgPath: '../img/sprite/sprite.png',
    imgName: 'sprite.png',
    cssName: '_sprite.sass',
  	padding: 1
    //algorithm: 'binary-tree', or 'alt-diagonal' 'diagonal' 'left-right' 'top-down'
  }));
  var imgStream = spriteData.img
    .pipe(gulp.dest('app/img/sprite'));
 
  var cssStream = spriteData.css
    .pipe(gulp.dest('app/sass'));
 
});


//**********
gulp.task('clean', function() {
	return del.sync('dist');
});

//**********
gulp.task('img', function() {
	return gulp.src(['!app/img/icons/*', 'app/img/**/*']) 
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true
		})))
		.pipe(gulp.dest('dist/img'));
});

//***********
gulp.task('build-dist', ['clean', 'img', 'sass', 'min-css'], function() {

	var buildCss = gulp.src('app/css/*style.css')
	.pipe(gulp.dest('dist/css'))

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src('app/js/**/*') 
	.pipe(gulp.dest('dist/js'))

  var buildLibs = gulp.src('app/libs/**/*') 
  .pipe(gulp.dest('dist/libs'))

	var buildHtml = gulp.src('app/*.html') 
	.pipe(gulp.dest('dist'));

});

//*********
gulp.task('build', ['build-dist'], function() {
	return del.sync('dist/img/icons');
});

//*********
gulp.task('clear', function (callback) {
	return cache.clearAll();
});



//********
gulp.task('default', ['watch']);
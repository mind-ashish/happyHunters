const gulp=require('gulp');

const sass=require('gulp-sass');  //sass to css
const cssnano=require('gulp-cssnano'); //minify css
const rev=require('gulp-rev'); //add manifest

const uglify=require('gulp-uglify-es').default; //minify js
const imagemin= require('gulp-imagemin'); //minify img
const del = require('del'); //deletion before each build

gulp.task('conversion',function(done){
    console.log("scss to css and minifying...");
    gulp.src('./assets/scss/**/*.scss')
    //using ./assets/**/*.scss , gulp will create scss folder in destination path, as it reads from all folders
    //but will not make any such if './assets/scss/**/*.scss' is used.
    .pipe(sass())  //scss to css
    .pipe(cssnano())    //css to compressed css 
    .pipe(gulp.dest('./assets/css'))  //save in dest  
    done();
    
});

gulp.task('css',function(done){
    console.log('manifest for css..');
    gulp.src('./assets/**/*.css') 
    .pipe(rev())   //add manifest to file taken from src
    .pipe(gulp.dest('./public/assets'))  //save the manifested file at this destination
    .pipe(rev.manifest())
    .pipe(gulp.dest('./public/assets/css'));
    done();
});


gulp.task('js',function(done){
    console.log('minifying js....');
    gulp.src('./assets/**/*.js')
    .pipe(uglify()) 
    .pipe(rev())
    .pipe(gulp.dest('./public/assets'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./public/assets/js'));
    done();
});

gulp.task('images', function(done){
    console.log('compressing images...');
    gulp.src('./assets/**/*.+(png|jpg|gif|svg|jpeg)')  
    .pipe(imagemin())
    .pipe(rev())
    .pipe(gulp.dest('./public/assets'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./public/assets/images'));
    done();
});

gulp.task('clean:assets', function(done){
    console.log('deleting previous files before new build...');
    del.sync('./public/assets');
    done();
});


gulp.task('build', gulp.series('clean:assets', 'css', 'js','images'), function(done){
    console.log('Building assets...');
    done();
});
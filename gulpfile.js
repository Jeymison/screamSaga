const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

async function Styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

async function Images() {
    const imagemin = (await import('gulp-imagemin')).default;
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

exports.default = gulp.parallel(Styles, Images, scripts);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', Styles);
    gulp.watch('./src/images/**/*', Images);
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
}


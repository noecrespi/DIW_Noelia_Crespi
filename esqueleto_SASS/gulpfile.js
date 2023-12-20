

const { series, src, dest, watch, parallel} = require('gulp');

// implements scss
const scss = require('gulp-sass')(require('sass'));
// implements minimitzacss
const cleanCSS = require('gulp-clean-css');
// implements concat
const concat = require('gulp-concat');



// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
    // body omitted
    cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
    // body omitted
    cb();
}

// scss 
function compilaSCSS() {
    return src('src/scss/*.scss')
        .pipe(scss({outputStyle: 'expanded'}))
        .pipe(dest('src/dist/')) 
}

// WHATCH 
function watcher() {
    watch('src/scss/**/*.scss', compilaSCSS);
}

//EXPORTS 
exports.build = build;
exports.default = series(clean, build);
exports.compilaSCSS = compilaSCSS;
exports.watcher = watcher;

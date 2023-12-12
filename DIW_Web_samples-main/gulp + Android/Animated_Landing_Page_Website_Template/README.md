# Animated_Landing_Page_Website_Template

## GULP

1. Ir a la carpeta del proyecto
2. Crear una carpeta `src` 
3. Guardar las carpetas `assets`, `css`, `js`, `manual`, `scss`, `index.html` y `ajax-email.php` dentro de `src` .
4. Inicializar el proyecto:
   ```bash
   npm init -y
   ```
5. Iniciar el gulp:
   ```bash
   sudo npm install -g gulp
   ```

6. Crear un .gitignore
    - Añadir:
        ```.gitignore
        ##########################
        ## NODE MODULES
        ##########################
        node_modules
        *node_modules/
        ```

7. Instalar los plugins
   ```bash
     sudo npm install --save-dev gulp gulp-sass gulp-concat gulp-uglify gulp-clean-css gulp-imagemin gulp-htmlmin gulp-webserver
   ```

   - Intalar solo sass
```bash
 sudo npm install sass
```

8. Crear la carpeta dist en la carpeta del proyecto
   
9.  Crear archivo `gulpfile.js`.
    - Añadir:
```.js
// const { series, src, dest, watch, parallel} = require('gulp');
const { series, src, dest, watch, paralle} = require('gulp');

// implements scss
const scss = require('gulp-sass')(require('sass'));
// implements minimitzacss
const cleanCSS = require('gulp-clean-css');
// implements minimitzajs
const cleanJS = require('gulp-uglify');
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

// scss task -> tack 1
function compilaSCSS() {
    return src('src/scss/*.scss')
        .pipe(scss())
        .pipe(dest('css/'))
}

// WHATCH -> tack 2
function watcher() {
    watch('src/scss/*.scss', compilaSCSS);
}

// minimitzacss -> tasck 3
function minimitzaCSS() {
    return src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(dest('dist/css/'));
}

// minimitzajs -> tasck 4
function minimitzajs() {
    return src('src/js/*.js')
        .pipe(cleanJS())
        .pipe(dest('dist/js/'));
}

// concat CSS-> tasck 5
function concatcss(){
    return src('dist/css/*.css')
        .pipe(concat('all.css'))
        .pipe(dest('dist/css/'));
}

// concat js -> tasck 6
function concatjs(){
    return src('dist/js/*.js')
        .pipe(concat('all.js'))
        .pipe(dest('dist/js/'));
}

//EXPORTS 
exports.build = build;
exports.default = series(clean, build);
exports.compilaSCSS = compilaSCSS;
exports.watcher = watcher;
exports.minimitzaCSS = minimitzaCSS;
exports.minimitzajs = minimitzajs;
exports.concatcss = concatcss; 
exports.concatjs = concatjs; 

// Animated_Landing_Page_Website_Template -> tasck 7
exports.Horizontal_Scroll_One_Page_Template_Website = series(compilaSCSS, parallel(
                series (minimitzaCSS, concatcss), 
                series (minimitzajs, concatjs))
);
```
gulp --tasks
## WATCHER


## webpack


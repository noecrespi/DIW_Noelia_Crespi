Crear un proyecto sencillo con node y sass

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

const { series, src, dest, watch, parallel} = require('gulp');

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
        .pipe(dest('src/css/'))
}

// WHATCH -> tack 2
function watcher() {
    watch('src/scss/*.scss', compilaSCSS);
}



//EXPORTS 
exports.build = build;
exports.default = series(clean, build);
exports.compilaSCSS = compilaSCSS;
exports.watcher = watcher;

```

10. 
```bash
gulp --tasks
```

11. Creamos la acrpeta 📂`css` dentro de la carpeta 📂`src`
12. Creamos la carpeta 📂`scss`  dentro de la carpera 📂`src` la cual meteremos los archivos de `.scss `



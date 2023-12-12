

#webpack [https://webpack.js.org/guides/getting-started/?authuser=0]

instalar webpack
    
```bash
sudo npm install webpack webpack-cli --save-dev
```

directorio del proyecto 
    
```
webpack-demo
    |- package.json
    |- package-lock.json
    |- index.html
    |- /src
        |- index.js
```

crear la carpeta `dist` dentro del proyecto

poner el inde.html dentro del proyecto
    Añadir:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Getting Started</title>

    <!-- Añadido -->
    <script src="https://unpkg.com/lodash@4.17.20"></script>
  </head>
  <body>
        <!-- Añadido -->
    <script src="./src/index.js"></script>
  </body>
</html>

```

poner el inde.js dentro del src
    añadir :

```js
function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```


paquete.json
    Eliminar:
    `~~"main": "index.js"~~`
    Añadir:
    `"private": true,`


terminal
    ejecutar:
```bash
sudo npm install --save lodash
```

src/index.js
    añadir:
```js
import _ from 'lodash';
```
eliminar: 
`//~~Lodash, currently included via a script, is required for this line to work~~`
Añadir:
`// Lodash, now imported by this script`

dist/index.html
    añadir:
```html
<script src="main.js"></script>
```
eliminar:
`//~~<script src="https://unpkg.com/lodash/lodash.min.js"></script>~~`
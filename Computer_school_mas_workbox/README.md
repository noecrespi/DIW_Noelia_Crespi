# Workbox

iniciar el proyecto
```bash
npm init -y 
```

instalar workbox-cli
```bash
sudo npm install workbox-cli --global 
```

crear el archivo de configuracion
npx workbox-cli wizard
  poner la ruta de las imagenes
  selecionar 
    con(*) si ()no 
    sw.js

Añadir imagen 


genera el service worker
```bash
npx workbox-cli generateSW ./workbox-config.js
```

Registar service worker

añadir en el html el service en el script
``` bash
// Don't register the service worker
    // until the page has fully loaded
    window.addEventListener("load", () => {
      // Is service worker available?
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("./sw.js")
          .then(() => {
            console.log("Service worker registered!");
          })
          .catch((error) => {
            console.warn("Error registering service worker:");
            console.warn(error);
          });
      }
    });
```


Añadir manifest copiado del otro 
``` json
{
    "short_name": "Computer School",
    "name": "Computer School",
    "icons": [
        {
            "src": "img/logo.png",
            "type": "image/png",
            "sizes": "192x192"
        }
    ],
    "start_url": "/index.html",
    "background_color": "#FFFFFF",
    "display": "standalone",
    "scope": "/",
    "theme_color": "#0006af",
    "description": "Best computer school ever",
    "screenshots": [
        {
            "src": "img/fotofrontal.jpg",
            "type": "image/jpg",
            "sizes": "720x540",
            "form_factor": "wide"
        }
    ],
    "shortcuts": [ 
        {
            "name": "Link1",
            "short_name": "Link1",
            "description": "Link1 Description",
            "url": "/link1.html",
            "icons": [
                {
                    "src": "img/javascript.png",
                    "sizes": "192x192"
                }
            ]
        },
        {
            "name": "Link2",
            "short_name": "Link2",
            "description": "Link2 Description",
            "url": "/link2.html",
            "icons": [
                {
                    "src": "img/angular.png",
                    "sizes": "192x192"
                }
            ]
        },
        {
            "name": "Link3",
            "short_name": "Link3",
            "description": "Link3 Description",
            "url": "/link3.html",
            "icons": [
                {
                    "src": "img/php.png",
                    "sizes": "192x192"
                }
            ]
        },
        {
            "name": "Link4",
            "short_name": "Link4",
            "description": "Link4 Description",
            "url": "/link4.html",
            "icons": [
                {
                    "src": "img/html5.png",
                    "sizes": "192x192"
                }
            ]
        }
    ]
}
```

Añadir en el html el manifest
``` html
<link rel="manifest" href="./manifest.json" />
```

Modifiaccion de datos del html: 

si no se ve es porque hay que 
ir a inpeccionar en crhome vamos a Aplicaction -> Service workers-> en la derecha esta el unregister


foto cambio_en_html.png

si no el cambio no va y no funciona la caché podemos poner 
```npx workbox-cli generateSW ./workbox-config.js```
y luego volver a repetir el proceso 

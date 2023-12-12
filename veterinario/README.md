# Instalar cordoba

1. 
```bash
sudo npm install -g cordova
```

2. crear proyecto <path> -> nombre del proyecto
```bash
    sudo cordova create <path> 
```

3. Eliminar carpetas de dentro de www todas
4. añadir index,css, js, scss y assets en la carpeta www 
5. 
Add a platform
After creating a Cordova project, navigate to the project directory. From the project directory, you need to add a platform for which you want to build your app.
To add a platform, type cordova platform add <platform name>.
For a complete list of platforms you can add, run cordova platform

```bash
cd MyApp 
sudo cordova platform add browser
```

4. Arrancar la app 
```bash
sudo cordova run browser
```

5. NO ME VA 
```bash
sudo cordova run android 
```

6. Informacion de la plataforma
```bash
cordova platform list
```
    Installed platforms:
    browser 7.0.0
    Available platforms:
    android
    electron
    ios

7. ir a 📂 wwww
8. ir a 📄 config.xml 
    - cambiar: 
        - eliminar: 
            ~~`<content src="index.html" />`~~ 
        - añadir:
            `<content src="view/animals.html" />` 
            `<content src="view/nombre_index_principal.html" />` 
9. copiar (📂 view,📂 model, 📂 service) y pegar en la carpeta 📂 www 
   -  📂 view
   -  📂 model
   -  📂 service 


10. Volvemos a la termianal del proyecto 
```bash
sudo cordova platform add android
```
11. ERROR
```bash
cordova run android --emulator 
```

12. Poner: 
```bash
cordova update android 
```
12. 1. Si no va bien: 
```bash
    sudo cordova platform remove android
```

```bash
    sudo cordova platform add android
```
## Ultima parte 

1.  Abir la app `Android Estudio`
2.  abrir el proyecto de la carpeta platforms/android

`

    |📂 veterinario 
        |📂 veterinario 
            |📂 plataforms 
                |📂 Android
`

![](/img/1.png)
![](/img/2.png)
![](/img/3.png)

diferentes clasesQueremos crear un mini-framework para CSS, por eso, utilizaremos la tecnología SASS donde implementaremos una serie de estilos que el usuario podrá coger para editar su código. Así, crea un archivo SASS que cumpla las siguientes condiciones:

ESTADOS
Primero, crearemos 4 estilos: success, warning, error y "normal" para los tags "P", "SPAN" y "H1, H2, H3, H4, H5 y H6". Estos tags pueden tener cualquiera de los estados anteriores, por ejemplo, un p con la clase success (<p class="success"), un span con la clase error (<span class="error") o h3 con la clase warning ( <h3 class="warning"). El estado "normal" no llevará etiqueta, será el que venga por defecto si no podemos nada, es decir, cualquier "p" sin clase será con el estilo que definiremos como "normal", es decir, <p class="normal"> NO EXISTE, sería <p>.

Respecto a los tags, tengan "estado" o no debemos saber que todos los "P" tendrán el texto justificado y todos los "Hx" tendrán un tamaño de fuente 2em y restando 0.2 progresivamente hasta h6, es decir, H1 = 2em , H2 = 1.8em, H3=1.6 me.

Respecto a los estados, debemos saber que "success" tiene como color el #2ecc72, "warning" tiene como color "f1c40f", error tiene el color "e74c3c" y el estilo normal tiene el color "333333". Sus respectivos fondos son un 25% más oscuros en el caso de suceso, warning y error y un 50% más claro en el caso del estado normal.

COLOR PERSONALIZADO // no entiendo 
Además, el usuario debe ser capaz de configurar cualquier color con el porcentaje de rojo, verde y azul en clase. Así, color-30-40-10 significa un 30% de rojo, un 40% de verde y un 10% de azul, por tanto, el primer color, es decir, color-0-0-0 será negro y el último color-100-100-100 será el blanco. Además, también debe permitirse por colores de fondo mediante la clase "colorbg-x-x-x".

MESAS
Las tablas deben tener un borde en todas las celdas y los bordes, entre ellos, no deben solaparse. Las bordas deben ser de 1px de ancho de color negro.


IMÁGENES
Las imágenes tendrán un borde redondo de un 45% de inclinación y un tamaño de 300px por imagen. Además, las imágenes pueden tener (o no) efectos, estos efectos durarán 3 segundos (contando desde que comienza el efecto hasta que hace el efecto y vuelve al estado inicial). Los efectos serán los siguientes:
- Blanco y negro
- Sepia
- Desenfocado: de 0px a 5px
- Tonalidad: de 0 grados a 150 grados 
- - Invertido: de 0 a 0.8
- Oscuro: de 1 a 0.5
- Contraste: de 0 a 2

WEBKIT Y MOZ
Cree un mixin que reciba 2 parámetros: propiedad y valor. Entonces, este mixin debe crear las propiedades -webkit- y -moz- de las propiedades que reciba por parámetro. Aplique estos mixin a las propiedades CSS que lo requieran.





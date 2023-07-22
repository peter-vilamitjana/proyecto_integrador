
Agregar las validaciones de HTML 5 que sean pertinentes (campos obligatorios, largos mínimos y máximos, etc).
Pensar qué tipos de elementos se deben utilizar (labels, fieldsets, inputs, textarea, etc).
Verificar que se cumplan con todas las recomendaciones dadas en clase.
El diseño queda a criterio de cada alumno, debiendo presentar un diseño cuidado.
Se valorará la exigencia que pongan a realizar el formulario, valorando especialmente no solo que se cumpla con lo mínimo requerido, sino el grado de profesionalismo que apliquen a la hora de elegir los tipos de elementos, validaciones, diseño, HTML semántico, prolijidad, etc.

Bonus: Definir eventos con JavaScript que habiliten o inhabiliten, en tiempo real, el botón de envío del formulario según todos los campos obligatorios estén o no completados.


a barra de navegación del Proyecto Integrador:

1) Agregar en el encabezado un botón para abrir y cerrar el modal que contendrá el carrito de compras. 
Desarrollar el código necesario para que dicho botón, al ser clickeado, muestre en la consola el mensaje "Abrir carrito" la primera vez que se presione. La siguiente, debe mostrar el mensaje "Cerrar carrito". Mantener este comportamiento de manera alternada.

2) Modificar los estilos de dicho botón para que se muestre distinto cuando esté "presionado" (es decir, en estado "Abrir carrito"). Para esto, utilizar clases de CSS (no atributo "style"), con nombres en inglés.

3) Crear y estilizar un elemento <section>, llamado .cart-modal-container, que deberá mostrarse por adelante de todo lo que haya en la página, ya sea centrado, ocupando un porcentaje del ancho disponible, o en un costado, pero siempre delante de los demás elementos. La altura regularla de tal manera que nunca se exceda de la altura total de la pantalla, a pesar de tener mucho contenido en su interior. Manejar el overflow correctamente. Agregarle sombras, para generar el efecto de estar flotando delante de los demás elementos.

4) Programar el botón utilizado en el punto 1 para que el contenedor del punto 3 se muestre u oculte según corresponda.

5) Programar el evento keydown en el objeto window para que cuando el usuario presione una tecla cualquiera el modal se cierre.

6) Mostrar en la consola cuál es la tecla presionada. Si la tecla es "Esc", mostrar en la consola el texto "Cerrar modal".
Tip: revisar en consola el objeto event "e".

7) Modificar el comportamiento del punto 5 para que el modal se cierre cuando se presione la tecla Esc, y no al presionar cualquier otra tecla.

8) Agregar al modal una x de cierre. Estilizarla para que se muestre como un botón de cerrar. Programarla para que también permita cerrar el modal.

9) Sincronizar los estilos del botón del punto 1 con el estado del modal (visible/oculto), para que su estado no se desacople al del modal al cerrar el mismo con cualquiera de las formas definidas.



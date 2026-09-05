// Espera a que termine de cargar la página antes de seguir ejecutando
document.addEventListener('DOMContentLoaded', function() {  

    // Lógica menú de hamburguesa (global --> para todos los html)

    // Definir variables para el botón del menú de hamburguesa y el menú en sí 
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Verificar si los elementos existen antes de agregar el event listener
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', function() {
            // Alternar la clase 'hidden' en el menú móvil para mostrarlo u ocultarlo
            mobileMenu.classList.toggle('hidden');
        });
    }


    // Lectura del localstorage, contadores del header (carrito y solicitudes)

    // || '0': El operador || significa "O" (OR).
    // Si el usuario entra por primera vez y no hay nada en el localStorage, se le devuelve '0'
    const cantidadCarrito = localStorage.getItem('carritoVeterinaria') || '0';
    const cantidadSolicitud = localStorage.getItem('solicitudesVeterinaria') || '0';


    // Tengo dos barras de navegación: la de computadores (arriba a la derecha) y 
    // la de celulares (adentro del menú hamburguesa). Esto significa que tienes dos iconos de carrito en la misma página
    // queryselectorall atrapa todos los elementos que tengan el id carrito-count y los guarda en un array
    const carritoCountElements = document.querySelectorAll('#carrito-count');
    const solicitudCountElements = document.querySelectorAll('#solicitud-count');

    //forEach --> para cada uno de estos carritos en la pantalla (el), 
    // cámbiales el texto (textContent) y ponles el número que sacamos de la memoria (cantidadCarrito)
    carritoCountElements.forEach(el => {
        el.textContent = cantidadCarrito;
    });

    solicitudCountElements.forEach(el => {
        el.textContent = cantidadSolicitud;
    });



});
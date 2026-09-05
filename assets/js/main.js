// Espera a que termine de cargar la página antes de seguir ejecutando
document.addEventListener('DOMContentLoaded', function() { 
    
    // -----------------------------------------------------------
    // 1. LÓGICA DE MENÚS MÓVILES (Público y Admin)
    // -----------------------------------------------------------
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const menuPublico = document.getElementById('mobile-menu'); // El menú de index, login, etc.
    const sidebarAdmin = document.getElementById('sidebar'); 
    const backdropAdmin = document.getElementById('sidebar-backdrop');
    const closeBtnAdmin = document.getElementById('close-sidebar-btn');

    // ESCENARIO A: Si estamos en la página pública -> Existe menuPublico
    if (mobileBtn && menuPublico) {
        mobileBtn.addEventListener('click', function() {
            menuPublico.classList.toggle('hidden');
        });
    }

    // ESCENARIO B: Si estamos en el panel de Administrador -> Existe sidebarAdmin
    if (mobileBtn && sidebarAdmin) {
        
        // Función para abrir la barra lateral
        function openSidebar() {
            sidebarAdmin.classList.remove('-translate-x-full'); // Desliza hacia adentro
            backdropAdmin.classList.remove('hidden');           // Muestra el fondo oscuro
        }

        // Función para cerrar la barra lateral
        function closeSidebar() {
            sidebarAdmin.classList.add('-translate-x-full');    // Desliza hacia afuera
            backdropAdmin.classList.add('hidden');              // Oculta el fondo oscuro
        }

        // Asignar los eventos de click
        mobileBtn.addEventListener('click', openSidebar);
        
        if(closeBtnAdmin) {
            closeBtnAdmin.addEventListener('click', closeSidebar);
        }
        
        if(backdropAdmin) {
            // Cerrar el menú si el usuario toca la parte oscura de la pantalla
            backdropAdmin.addEventListener('click', closeSidebar);
        }
    }


    // -----------------------------------------------------------
    // 2. Lectura del localstorage, contadores del header 
    // -----------------------------------------------------------

    // || '0': El operador || significa "O" (OR).
    // Si el usuario entra por primera vez y no hay nada en el localStorage, se le devuelve '0'
    const cantidadCarrito = localStorage.getItem('carritoVeterinaria') || '0';
    const cantidadSolicitud = localStorage.getItem('solicitudesVeterinaria') || '0';


    // Tengo dos barras de navegación: la de computadores y la de celulares.
    // querySelectorAll atrapa todos los elementos que tengan ese ID y los guarda en un array
    const carritoCountElements = document.querySelectorAll('#carrito-count');
    const solicitudCountElements = document.querySelectorAll('#solicitud-count');

    // forEach --> para cada uno de estos carritos en la pantalla (el), 
    // cámbiales el texto (textContent) y ponles el número de la memoria
    carritoCountElements.forEach(el => {
        el.textContent = cantidadCarrito;
    });

    // forEach --> lo mismo, pero para actualizar todas las solicitudes
    solicitudCountElements.forEach(el => {
        el.textContent = cantidadSolicitud;
    });

}); // Fin DOMContentLoaded
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

    // -----------------------------------------------------------
    // 3. LÓGICA PARA AGREGAR AL CARRITO (Botones de la Tienda)
    // -----------------------------------------------------------
    
    // Buscamos todos los botones que tengan la clase 'boton-anadir' que usamos en HTML
    const botonesAgregarCarrito = document.querySelectorAll('.boton-anadir');

    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que la página salte si el botón recarga

            // Opcional: Capturar el ID --> pero para el futuro
            // const productoId = boton.getAttribute('data-id'); 
            // console.log("Agregando producto:", productoId);

            // 1. Leer el valor actual de la memoria y convertirlo a número
            let cantidadActual = parseInt(localStorage.getItem('carritoVeterinaria')) || 0;
            
            // 2. Sumarle 1
            let nuevaCantidad = cantidadActual + 1;
            
            // 3. Guardar el nuevo número en el localStorage
            localStorage.setItem('carritoVeterinaria', nuevaCantidad);
            
            // 4. Actualizar visualmente los contadores del header al instante
            carritoCountElements.forEach(el => {
                el.textContent = nuevaCantidad;
            });

            // 5. Feedback visual en el botón
            const textoOriginal = boton.innerHTML;
            boton.innerHTML = "¡Agregado! :D";
            boton.classList.replace('bg-emerald-600', 'bg-emerald-800'); // Lo oscurece
            
            // Después de 1.5 segundos, devuelve el botón a la normalidad
            setTimeout(() => {
                boton.innerHTML = textoOriginal;
                boton.classList.replace('bg-emerald-800', 'bg-emerald-600');
            }, 1500);
        });
    });

    // -----------------------------------------------------------
    // 4. LÓGICA PARA AGREGAR SOLICITUDES (Botones de Servicios)
    // -----------------------------------------------------------
    
    // Busca todos los botones que tengan la clase 'boton-solicitar' en el HTML
    const botonesSolicitar = document.querySelectorAll('.boton-solicitar');

    botonesSolicitar.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault(); // Evita recargas innecesarias

            // 1. Leer el valor actual de la memoria (para solicitudes)
            let cantidadActual = parseInt(localStorage.getItem('solicitudesVeterinaria')) || 0;
            
            // 2. Sumarle 1
            let nuevaCantidad = cantidadActual + 1;
            
            // 3. Guardar el nuevo número en el localStorage
            localStorage.setItem('solicitudesVeterinaria', nuevaCantidad);
            
            // 4. Actualizar visualmente los contadores de "Mi Solicitud" en el header
            solicitudCountElements.forEach(el => {
                el.textContent = nuevaCantidad;
            });

            // 5. Feedback visual para el usuario
            const textoOriginal = boton.innerHTML;
            boton.innerHTML = "¡Agendado! :)";
            boton.classList.replace('bg-emerald-600', 'bg-emerald-800'); // Oscurece el botón
            
            // Volver a la normalidad después de 1.5 segundos
            setTimeout(() => {
                boton.innerHTML = textoOriginal;
                boton.classList.replace('bg-emerald-800', 'bg-emerald-600');
            }, 1500);
        });
    });

    // -----------------------------------------------------------
    // 5. LÓGICA PARA ELIMINAR DEL CARRITO
    // -----------------------------------------------------------
    
    // Buscamos todos los botones de "Eliminar" en la página del carrito
    const botonesEliminarCarrito = document.querySelectorAll('.btn-eliminar-carrito');

    botonesEliminarCarrito.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault();

            // 1. Leer el valor actual del carrito
            let cantidadActual = parseInt(localStorage.getItem('carritoVeterinaria')) || 0;
            
            // 2. Restarle 1
            let nuevaCantidad = cantidadActual - 1;
            
            // Seguridad: Asegurarnos de que el carrito nunca tenga números negativos (-1, -2)
            if (nuevaCantidad < 0) {
                nuevaCantidad = 0;
            }
            
            // 3. Guardar el nuevo número en el localStorage
            localStorage.setItem('carritoVeterinaria', nuevaCantidad);
            
            // 4. Actualizar visualmente los contadores del header al instante
            carritoCountElements.forEach(el => {
                el.textContent = nuevaCantidad;
            });

            // 5. Borrar el producto de la pantalla
            // El método .closest() busca al "padre" más cercano que tenga esa clase
            // y .remove() lo destruye del HTML visualmente sin tener que recargar la página
            const filaProducto = boton.closest('.item-carrito');
            if (filaProducto) {
                filaProducto.remove();
            }
        });
    });



}); // Fin DOMContentLoaded
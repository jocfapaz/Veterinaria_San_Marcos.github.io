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
    // 2. HELPERS GENÉRICOS PARA LOCALSTORAGE Y CONTADORES
    // -----------------------------------------------------------
    
    // Lee un número del localStorage. Si no existe o es inválido, devuelve 0.
    function getStoredCount(key) {
        return parseInt(localStorage.getItem(key)) || 0;
    }

    // Guarda un número en el localStorage, pero NUNCA permite guardar negativos.
    function setStoredCount(key, value) {
        if (value < 0) value = 0;
        localStorage.setItem(key, value);
    }

    // Actualiza TODOS los elementos .contador-header que tengan el data-storage indicado.
    // Esto es clave porque hay contadores en desktop y en el menú móvil.
    function updateCounterDisplay(key) {
        document.querySelectorAll(`.contador-header[data-storage="${key}"]`).forEach(el => {
            el.textContent = getStoredCount(key);
        });
    }

    // ============================================================
    // 3. LÓGICA DE AGREGAR (Carrito + Solicitudes en una sola función)
    // ============================================================

    function handleAdd(button) {
        // data-storage dice QUÉ contador actualizar (carritoVeterinaria o solicitudesVeterinaria)
        const storageKey = button.dataset.storage;
        // data-success dice qué texto mostrar temporalmente (ej: "¡Agregado! :D")
        const successText = button.dataset.success;
        
        if (!storageKey) return;

        // 1. Leer, sumar y guardar
        const newCount = getStoredCount(storageKey) + 1;
        setStoredCount(storageKey, newCount);

        // 2. Actualizar todos los contadores visuales (header desktop + móvil)
        updateCounterDisplay(storageKey);

        // 3. Feedback visual: cambiamos el texto y oscurecemos el botón
        const originalText = button.textContent;
        button.textContent = successText;
        button.classList.replace('bg-emerald-600', 'bg-emerald-800');

        // Después de 1.5 segundos, volvemos todo a la normalidad
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.replace('bg-emerald-800', 'bg-emerald-600');
        }, 1500);
    }

    // Asignar eventos a botones de añadir (tanto productos como servicios)
    document.querySelectorAll('.boton-anadir, .boton-solicitar').forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que el botón recargue la página
            handleAdd(this);
        });
    });

    // ============================================================
    // 4. LÓGICA DE ELIMINAR (También genérica)
    // ============================================================

    function handleRemove(button, itemSelector) {
        const storageKey = button.dataset.storage;
        if (!storageKey) return;

        // 1. Leer, restar y guardar (protegido contra negativos por setStoredCount)
        const newCount = getStoredCount(storageKey) - 1;
        setStoredCount(storageKey, newCount);

        // 2. Actualizar contadores visuales
        updateCounterDisplay(storageKey);

        // 3. Eliminar el elemento del DOM buscando al ancestro más cercano con itemSelector
        const item = button.closest(itemSelector);
        if (item) item.remove();
    }

    // Eliminar del carrito
    document.querySelectorAll('.btn-eliminar-carrito').forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault();
            handleRemove(this, '.item-carrito');
        });
    });

    // Eliminar solicitud
    document.querySelectorAll('.boton-eliminar-solicitud').forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault();
            handleRemove(this, '.item-solicitud');
        });
    });

    // ============================================================
    // 5. INICIALIZACIÓN: Sincronizar contadores al cargar la página
    // ============================================================
    
    // Cuando el usuario entra a CUALQUIER página, buscamos todos los contadores
    // y les ponemos el valor real que está guardado en localStorage.
    document.querySelectorAll('.contador-header').forEach(el => {
        const key = el.dataset.storage;
        if (key) el.textContent = getStoredCount(key);
    });

}); // Fin DOMContentLoaded

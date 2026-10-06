Fase 1: Configuración del Entorno de Desarrollo
[ ] Inicializar el nuevo proyecto de React (usando Vite o Create React App).
[ ] Instalar y configurar Tailwind CSS dentro del entorno de React (reemplazo validado para Bootstrap).
[ ] Configurar el entorno de pruebas utilizando Jasmine y Karma para la ejecución de pruebas unitarias en los componentes.   
[ ] Migrar los assets (imágenes, logos) a la carpeta public o src/assets del nuevo proyecto.

Fase 2: Capa de Datos (Backend Simulado)
[ ] Crear el archivo JavaScript mockDB.js que actuará como fuente de datos simulada.   
[ ] Estructurar los arreglos iniciales (Mocks) para: Servicios, Productos, Usuarios, Carrito, y Solicitudes.[ ] Implementar función CREATE: Añadir elementos al carrito, generar nuevas solicitudes y registrar usuarios.   
[ ] Implementar función READ: Obtener catálogos, leer contenido del carrito y leer historial de un usuario.   
[ ] Implementar función UPDATE: Modificar cantidades en el carrito o actualizar el perfil del usuario.   
[ ] Implementar función DELETE: Eliminar productos del carrito o cancelar solicitudes médicas.   

Fase 3: Migración a React (Refactorización UI Base)
[ ] Convertir las páginas HTML actuales en componentes React reutilizables (Principio de "Single Responsibility").   
[ ] Cambiar todos los atributos class a className en el código migrado.
[ ] Componentizar el Header / Navbar, implementando el estado (useState) para controlar la apertura del menú hamburguesa.
[ ] Componentizar el Footer.
[ ] Componentizar las Tarjetas de Servicio y Tarjetas de Producto, asegurando que reciban su información (título, precio, imagen) a través de props.   

Fase 4: Desarrollo de Nuevas Vistas (Lado del Cliente)
[ ] Crear vista Categorías: Pantalla que separe los productos según su tipo.   
[ ] Crear vista Ofertas: Pantalla para destacar productos en descuento.   
[ ] Crear vista Flujo de Compra (Checkout): Formulario interactivo donde el cliente introduce datos personales, dirección de envío e indicaciones de entrega.   
[ ] Crear vista Pago Correcto: Resumen de la compra exitosa con número de orden.   
[ ] Crear vista Pago con Error: Pantalla para notificar fallos en la transacción con opción a reintentar.   

Fase 5: Desarrollo de Vistas (Panel Administrativo)
[ ] Crear componente Layout Admin con la barra lateral (Sidebar) dinámica.
[ ] Crear vista Dashboard: Panel principal con resumen de métricas (compras, usuarios, alertas).   
[ ] Crear vista Gestión de Productos / Servicios: Listado con opciones para crear un Nuevo Producto o Editar los existentes.   
[ ] Crear vista Órdenes / Boletas: Panel para revisar las compras y agendamientos realizados.   
[ ] Crear vista Gestión de Usuarios: Panel para editar cuentas y ver historiales de compra.   

Fase 6: Integración y Lógica de Estados
[ ] Conectar los componentes visuales con mockDB.js para que la UI se actualice en tiempo real al agregar/eliminar elementos.   
[ ] Centralizar el manejo del estado global del Carrito y las Solicitudes para que los contadores del Navbar se actualicen automáticamente al navegar.

Fase 7: Testing Unitario (Jasmine & Karma) - (Escribir al menos 10 pruebas unitarias sólidas sin errores para lograr la nota máxima.)
[ ] Pruebas de Renderizado: Verificar que los componentes (ej. lista de productos) renderizan correctamente los datos proporcionados.   
[ ] Pruebas de Renderizado Condicional: Verificar que los mensajes de error se oculten/muestren según el estado.   
[ ] Pruebas de Props: Confirmar que un componente (ej. botón o tarjeta) reciba y utilice adecuadamente las propiedades entregadas.   
[ ] Pruebas de Estado: Comprobar que la lógica de cambio de estado en los formularios funciona al ingresar texto.   
[ ] Pruebas de Eventos (Simulación): Simular clics en botones (ej. "Añadir al carrito") y verificar que la función esperada se ejecuta y el estado cambia
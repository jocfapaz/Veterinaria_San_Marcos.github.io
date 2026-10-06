# Guía del Proyecto — Veterinaria San Marcos

Este documento resume la estructura, los componentes y el flujo de datos de la aplicación, para entender el proyecto de arriba a abajo.

---

## 1. Estado inicial 

El punto de partida fue un sitio **estático HTML + Bootstrap** compuesto por varias páginas sueltas en la raíz:

- `index.html`, `servicios.html`, `tienda.html`, `blogs.html`, `blog_detalle_*.html`
- `carrito.html`, `mi_solicitud.html`, `login.html`, `registro.html`
- `nosotros.html`, `contacto.html`, `producto_detalle.html`, `servicio_detalle.html`

Cada vista era un archivo HTML independiente, sin enrutamiento SPA y con tarjetas de productos y servicios escritas directamente en el markup.

---

## 2. Stack tecnológico actual

Migración a una **Single Page Application (SPA)** con:

| Tecnología | Uso |
|------------|-----|
| **React 19** + **Vite** | Interfaz y build |
| **React Router 8** (`HashRouter`) | Navegación sin recargar; compatible con GitHub Pages |
| **Tailwind CSS 4** | Estilos utility-first |
| **mockDB.js** | Backend simulado en memoria |
| **Jasmine + Karma + Chrome Headless** | Tests unitarios |
| **ESLint** | Calidad de código |

Las páginas HTML originales permanecen en la raíz como referencia, pero la aplicación funcional vive en `src/`.

---

## 3. Estructura de carpetas (`src/`)

```
src/
├── App.jsx                    # Definición de rutas
├── main.jsx                   # Punto de entrada + Providers
├── index.css                  # Tailwind base + estilos globales
├── mockDB.js                  # Backend simulado (datos + CRUD)
├── mockDB.spec.js             # Tests unitarios del mockDB
├── assets/                    # Imágenes propias de React/Vite
├── components/                # Componentes reutilizables del sitio público
│   ├── admin/                 # Componentes del panel administrativo
│   ├── BlogCard.jsx
│   ├── Breadcrumbs.jsx
│   ├── Button.jsx
│   ├── EmptyState.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── MobileMenu.jsx
│   ├── Navbar.jsx
│   ├── PageHeader.jsx
│   ├── ProductCard.jsx
│   ├── QuantitySelector.jsx
│   └── ServiceCard.jsx
├── constants/
│   └── navLinks.js            # Links del navbar
├── contexts/                  # Estado global
│   ├── AdminRoute.jsx
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
│   ├── ProtectedRoute.jsx
│   └── RequestContext.jsx
├── pages/                     # Vistas del sitio público
│   ├── Home.jsx
│   ├── ServiciosPage.jsx
│   ├── ServicioDetallePage.jsx
│   ├── TiendaPage.jsx
│   ├── ProductoDetallePage.jsx
│   ├── BlogPage.jsx
│   ├── BlogDetallePage.jsx
│   ├── NosotrosPage.jsx
│   ├── ContactoPage.jsx
│   ├── LoginPage.jsx
│   ├── RegistroPage.jsx
│   ├── CarritoPage.jsx
│   ├── MiSolicitudPage.jsx
│   └── admin/                 # Vistas del panel administrativo
│       ├── AdminDashboard.jsx
│       ├── AdminServiciosPage.jsx
│       ├── AdminServicioForm.jsx
│       ├── AdminProductosPage.jsx
│       ├── AdminProductoForm.jsx
│       ├── AdminUsuariosPage.jsx
│       ├── AdminUsuarioForm.jsx
│       └── AdminOrdenesPage.jsx
└── test/
    └── setup.js               # Configuración de testing-library
```

---

## 4. Propósito de cada directorio

| Directorio | Descripción |
|------------|-------------|
| `public/images/` | Imágenes estáticas del sitio. Se sirven directamente desde `/images/...`. |
| `src/assets/` | Assets procesados por Vite (`hero.png`, logos de React/Vite). |
| `src/components/` | Componentes visuales reutilizables del sitio público. |
| `src/components/admin/` | Componentes reutilizables exclusivos del panel administrativo. |
| `src/constants/` | Configuración estática (`navLinks.js`). |
| `src/contexts/` | Estado global y protección de rutas. |
| `src/pages/` | Vistas de ruta del sitio público. |
| `src/pages/admin/` | Vistas de ruta del panel administrativo. |
| `src/test/` | Configuración global de los tests. |
| `src/utils/` | Utilidades y ejemplos de prueba. |
| `src/mockDB.js` | Fuente de datos y lógica de negocio simulada. |
| `src/mockDB.spec.js` | Tests unitarios del mockDB. |
| `src/App.jsx` | Definición de rutas de la SPA. |
| `src/main.jsx` | Punto de entrada de React. |

### Archivos de configuración en la raíz

| Archivo | Función |
|---------|---------|
| `vite.config.js` | Configuración del bundler Vite. |
| `eslint.config.js` | Reglas de linting. |
| `karma.conf.cjs` | Configuración del runner de tests Karma + Jasmine + Webpack. |
| `package.json` | Dependencias y scripts (`dev`, `build`, `lint`, `test`). |

---

## 5. Componentes principales del sitio público

### Layout global
- **`Layout.jsx`**: envuelve `Header`, `Footer` y el `<Outlet />` de React Router.

### Navegación
- **`Header.jsx`**: barra superior sticky con logo, navegación desktop/móvil, estado de sesión y contadores de carrito/solicitudes.
- **`Navbar.jsx`**: menú desktop usando `NavLink` y `NAV_LINKS`.
- **`MobileMenu.jsx`**: menú hamburguesa para pantallas pequeñas.

### Tarjetas reutilizables
- **`ServiceCard.jsx`**: imagen, nombre, categoría, especie, duración, precio y botón "Solicitar".
- **`ProductCard.jsx`**: imagen, nombre, categoría, presentación, descuento, precio final y botón "Añadir".
- **`BlogCard.jsx`**: imagen, título, extracto, fecha y link al detalle.

### Otros componentes
- **`Button.jsx`**: botón reutilizable con variantes `primary` / `secondary`.
- **`Breadcrumbs.jsx`**: migas de pan.
- **`PageHeader.jsx`**: encabezado de sección.
- **`EmptyState.jsx`**: estado vacío.
- **`QuantitySelector.jsx`**: selector de cantidad para el carrito.
- **`Footer.jsx`**: pie de página con marca, secciones y contacto.

---

## 6. Vistas del sitio público (`src/pages/`)

| Página | Función |
|--------|---------|
| `Home.jsx` | Hero, estadísticas, categorías, servicios destacados y CTA. |
| `ServiciosPage.jsx` | Catálogo de servicios con filtros por categoría y especie. |
| `ServicioDetallePage.jsx` | Detalle de un servicio y formulario de solicitud. |
| `TiendaPage.jsx` | Catálogo de productos con filtro por categoría. |
| `ProductoDetallePage.jsx` | Detalle del producto y selector de cantidad. |
| `BlogPage.jsx` | Listado de artículos. |
| `BlogDetallePage.jsx` | Artículo individual usando `slug`. |
| `NosotrosPage.jsx` | Información de la clínica y equipo. |
| `ContactoPage.jsx` | Formulario de contacto. |
| `LoginPage.jsx` | Inicio de sesión contra `mockDB.js`. |
| `RegistroPage.jsx` | Registro de nuevos clientes. |
| `CarritoPage.jsx` | Resumen del carrito, modificar cantidades y eliminar. |
| `MiSolicitudPage.jsx` | Solicitudes de servicios del usuario logueado. |

---

## 7. Panel administrativo (`/admin`)

Accesible solo para usuarios con `role === 'admin'` mediante `AdminRoute.jsx`.

### Layout admin
- **`AdminLayout.jsx`**: sidebar + área de contenido.
- **`AdminSidebar.jsx`**: navegación entre Dashboard, Servicios, Productos, Usuarios y Órdenes.
- **`AdminPageHeader.jsx`**: título de sección + botón de acción.

### Vistas admin

| Página | Funcionalidad |
|--------|---------------|
| `AdminDashboard.jsx` | Métricas y tablas de actividad reciente. |
| `AdminServiciosPage.jsx` | Listado de servicios con editar/eliminar. |
| `AdminServicioForm.jsx` | Formulario para crear/editar servicios. |
| `AdminProductosPage.jsx` | Listado de productos con editar/eliminar. |
| `AdminProductoForm.jsx` | Formulario para crear/editar productos. |
| `AdminUsuariosPage.jsx` | Listado de usuarios con editar/eliminar. |
| `AdminUsuarioForm.jsx` | Formulario para crear/editar usuarios. |
| `AdminOrdenesPage.jsx` | Vista unificada de solicitudes y órdenes; permite cambiar estado. |

### Componentes auxiliares admin
- **`AdminTable.jsx`**: tabla estilizada.
- **`FormInput.jsx`, `FormSelect.jsx`, `FormTextarea.jsx`**: inputs reutilizables con estados de error.
- **`RoleBadge.jsx`**: etiqueta visual para `admin` / `client`.
- **`StatusBadge.jsx`**: etiqueta visual para estados de solicitudes y órdenes.

---

## 8. Manejo de estado global (`src/contexts/`)

### `AuthContext.jsx`
- Guarda el usuario logueado en `localStorage` (`vsm_user`).
- Provee `login`, `logout`, `currentUser`, `isAdmin`.

### `CartContext.jsx`
- Carrito persistido en `localStorage` (`vsm_cart`).
- Funciones: `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`, `checkout`.
- Expone `cartCount` y `cartTotal`.

### `RequestContext.jsx`
- Solicitudes de servicio persistidas en `localStorage` (`vsm_requests`).
- Funciones: `addRequest`, `cancelRequest`, `updateRequest`.
- Expone `requestCount`.

### Rutas protegidas
- **`ProtectedRoute.jsx`**: redirige a `/login` si no hay sesión (usado en `/carrito`, `/mi-solicitud`).
- **`AdminRoute.jsx`**: redirige a `/` si el usuario no es admin (usado en `/admin/*`).

---

## 9. Capa de datos (`src/mockDB.js`)

Backend simulado en memoria. Contiene arreglos iniciales para servicios, productos, usuarios, posts de blog, carrito, solicitudes y órdenes.

### Funciones principales

| Función | Descripción |
|---------|-------------|
| `getServices`, `getServiceById` | Leer servicios |
| `addService`, `updateService`, `deleteService` | CRUD servicios |
| `getProducts`, `getProductById` | Leer productos |
| `addProduct`, `updateProduct`, `deleteProduct` | CRUD productos |
| `getUsers`, `getUserById`, `getUserByEmail` | Leer usuarios |
| `registerUser`, `updateUser`, `deleteUser` | CRUD usuarios |
| `login` | Autenticación simulada |
| `createRequest`, `cancelRequest`, `updateRequestStatus` | Solicitudes |
| `createOrder`, `updateOrderStatus` | Órdenes |
| `calculateDiscountedPrice`, `formatPrice` | Helpers de precios |

> Los cambios en memoria se mantienen durante la sesión. Carrito, solicitudes y sesión se persisten en `localStorage`.

---

## 10. Enrutamiento (`src/App.jsx`)

```text
/                                → Home
/nosotros                        → Nosotros
/servicios                       → Servicios
/servicios/:id                   → Detalle servicio
/tienda                          → Tienda
/tienda/:id                      → Detalle producto
/blog                            → Blog
/blog/:slug                      → Detalle blog
/contacto                        → Contacto
/login                           → Login
/registro                        → Registro
/carrito                         → Carrito (protegido)
/mi-solicitud                    → Solicitudes (protegido)
/admin                           → Dashboard admin (solo admin)
/admin/servicios                 → Gestión servicios
/admin/servicios/nuevo           → Crear servicio
/admin/servicios/:id/editar      → Editar servicio
/admin/productos                 → Gestión productos
/admin/productos/nuevo           → Crear producto
/admin/productos/:id/editar      → Editar producto
/admin/usuarios                  → Gestión usuarios
/admin/usuarios/nuevo            → Crear usuario
/admin/usuarios/:id/editar       → Editar usuario
/admin/ordenes                   → Órdenes y solicitudes
*                                → 404
```

Se usa `HashRouter` para compatibilidad con GitHub Pages sin configuración de servidor.

---

## 11. Tests

- Archivo principal: `src/mockDB.spec.js`.
- **30 tests pasando** al 100%.
- Cubren CRUD de servicios, productos, usuarios, carrito, solicitudes, órdenes, autenticación, descuentos y helpers.
- Configuración en `karma.conf.cjs` con webpack + Babel.

---

## 12. Cambios clave respecto a la entrega original

| Aspecto | Antes | Ahora |
|---------|-------|-------|
| Tecnología | HTML estático + Bootstrap | React + Vite + Tailwind CSS |
| Navegación | Varios archivos `.html` | SPA con `HashRouter` |
| Datos | Texto e imágenes fijos en HTML | `mockDB.js` como fuente única |
| Tarjetas | HTML estático | Componentes con props |
| Carrito / solicitudes | Sin estado compartido | Contextos globales + `localStorage` |
| Header | Estático | Reactivo: contadores reales, menú hamburguesa, login/logout |
| Panel admin | No existía | Dashboard + CRUD completo |
| Imágenes | Duplicadas en varias carpetas | Centralizadas en `public/images/` |
| Tienda / Blog | Se habían vuelto estáticos | Reconectados a `mockDB.js` dinámicamente |

---

## 13. Estado de las fases del `TAREAS.md`

| Fase | Estado |
|------|--------|
| Fase 1: Entorno | Lista |
| Fase 2: Capa de datos | Lista |
| Fase 3: Migración UI base | Lista |
| Fase 4: Nuevas vistas cliente | Pendiente |
| Fase 5: Panel administrativo | Lista |
| Fase 6: Integración y estados | Lista |
| Fase 7: Testing | Lista |

### Pendiente en Fase 4
- Vista **Categorías** de productos.
- Vista **Ofertas**.
- Flujo de **Checkout**.
- Pantalla **Pago Correcto**.
- Pantalla **Pago con Error**.

---

## 14. Cómo ejecutar el proyecto

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build de producción
npm run build

# Ejecutar tests
npm test            # modo watch
npm run test:run    # una sola ejecución

# Lint
npm run lint
```

---

## 15. Guía rápida: dónde modificar cada cosa

| Si quieres cambiar... | Ve a... |
|-----------------------|---------|
| El color o estilo general | `src/index.css` + clases Tailwind en cada componente |
| El logo o nombre del sitio | `src/components/Header.jsx` y `src/components/Footer.jsx` |
| Los links del menú | `src/constants/navLinks.js` |
| Servicios iniciales | `src/mockDB.js` → `initialServices` |
| Productos iniciales | `src/mockDB.js` → `initialProducts` |
| El admin por defecto | `src/mockDB.js` → `initialUsers` |
| La página de inicio | `src/pages/Home.jsx` |
| La tarjeta de producto | `src/components/ProductCard.jsx` |
| El formulario de login | `src/pages/LoginPage.jsx` |
| Agregar una ruta pública | `src/App.jsx` |
| Agregar una sección en el admin | `src/App.jsx` + `src/components/admin/AdminSidebar.jsx` + nueva vista en `src/pages/admin/` |
| Validaciones de formularios admin | `src/pages/admin/Admin*Form.jsx` |
| Estados posibles de una orden | `src/mockDB.js` + `src/components/admin/StatusBadge.jsx` + `src/pages/admin/AdminOrdenesPage.jsx` |
| Agregar un test nuevo | `src/mockDB.spec.js` o un nuevo `*.spec.js` junto al componente |

---

*Documento generado para facilitar la comprensión y presentación del proyecto.*

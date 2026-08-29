# 🐾 Veterinaria San Marcos - Sitio Web & Panel Administrativo

Este repositorio contiene la primera versión del sistema web de la **Veterinaria San Marcos**, desarrollado como parte de la Evaluación Parcial 1 de la asignatura **Desarrollo Fullstack II (DSY1104)**[cite: 1, 2].

El sitio incluye un portal público responsivo para clientes y usuarios generales, así como una plataforma interna para la administración de productos y usuarios de la veterinaria[cite: 2, 3].

---

## Tecnologías Utilizadas

* **HTML5**: Estructuración semántica (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<video>`, `<footer>`)[cite: 1, 3].
* **CSS3**: Hojas de estilos externas personalizadas (`assets/css/style.css` y `assets/css/admin.css`) con diseño responsivo adaptable mediante Media Queries (Mobile $\ge 360\text{px}$, Tablet $\ge 768\text{px}$, Desktop $\ge 1280\text{px}$)[cite: 1, 2, 3].
* **JavaScript (Vanilla ES6+)**: Validaciones de formularios en tiempo real, manipulación dinámica de comunas/regiones y manejo del carrito de compras con persistencia en `localStorage`[cite: 1, 3].
* **Git & GitHub**: Control de versiones colaborativo e historial de commits por integrantes[cite: 1, 3].

---

## 📁 Estructura del Proyecto

```text
Veterinaria_San_Marcos.github.io/
├── index.html              # Portada principal y servicios destacados
├── productos.html          # Catálogo general de productos y medicamentos
├── producto_detalle.html   # Vista detallada de un producto
├── nosotros.html           # Información institucional de la veterinaria
├── servicios.html          # Detalle de servicios médicos y peluquería
├── servicio_detalle.html   # Detalle de un servicio específico
├── blogs.html              # Listado de artículos y noticias
├── blog_detalle_1.html     # Detalle de noticia 1
├── blog_detalle_2.html     # Detalle de noticia 2
├── contacto.html           # Formulario de contacto y reservas
├── login.html              # Inicio de sesión de usuarios
├── registro.html           # Registro de nuevos clientes
├── mi_solicitud.html       # Seguimiento de solicitudes del usuario
├── readme.md               # Documentación del proyecto
│
├── admin/                  # Panel de Control Interno
│   ├── index.html          # Dashboard de administración
│   ├── servicios.html      # Gestión / Listado de servicios
│   ├── servicios_nuevo.html # Crear nuevo servicio
│   ├── servicios_editar.html# Editar servicio existente
│   ├── usuarios.html       # Gestión / Listado de usuarios
│   ├── usuario_nuevo.html  # Crear nuevo usuario
│   └── usuario_editar.html # Editar usuario existente
│
├── assets/                 # Recursos Estáticos
│   ├── css/
│   │   ├── style.css       # Estilos globales de la tienda pública
│   │   └── admin.css       # Estilos exclusivos del panel administrativo
│   └── images/             # Imágenes y logotipos del sitio
│
└── js/                     # Lógica Frontend en JavaScript
    ├── main.js             # Carrito (localStorage) y validaciones públicas
    ├── admin.js            # Validaciones y funciones del panel admin
    └── regions-data.js     # Arreglo de Regiones y Comunas de Chile
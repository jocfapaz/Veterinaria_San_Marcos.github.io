# Veterinaria San Marcos

Sitio web de la Veterinaria San Marcos, migrado de HTML estático a una SPA con React + Vite.

## Características

- **Catálogo**: Productos y servicios con sus respectivas páginas de detalle
- **Carrito de compras**: Gestión de productos con contexto global
- **Autenticación**: Sistema de login, registro y rutas protegidas
- **Panel de administración**: Gestión de productos, servicios, usuarios, órdenes y roles (`admin`, `vendedor`, `veterinario`)
- **Blog**: Listado y detalle de publicaciones
- **Contacto y solicitudes**: Formulario de contacto y seguimiento de solicitudes
- **Checkout**: Proceso de compra con páginas de éxito/error

## Tecnologías

- [React](https://es.react.dev/) 19
- [Vite](https://vitejs.dev/) 8
- [React Router](https://reactrouter.com/) 8 (`HashRouter`)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Context API](https://es.react.dev/learn/passing-data-deeply-with-context) para Auth, Carrito y Solicitudes
- [ESLint](https://eslint.org/) para linting
- [Karma](https://karma-runner.github.io/) + [Jasmine](https://jasmine.github.io/) para pruebas

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/jocfapaz/Veterinaria_San_Marcos_Frontend.git

# Entrar al proyecto
cd Veterinaria_San_Marcos_Frontend

# Instalar dependencias
npm install
```

## Configuración del entorno

1. Copia el archivo de ejemplo:

```bash
cp .env.example .env

2. Ajusta VITE_API_URL en .env según tu entorno:
  # Desarrollo local
  VITE_API_URL=http://localhost:8080/api/v1

  # Producción (GitHub Pages -> AWS EC2)
  VITE_API_URL=https://tu-dominio-ec2.com/api/v1


## Scripts disponibles

```bash
# Servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint

# Ejecutar pruebas
npm run test

# Ejecutar pruebas una sola vez
npm run test:run

# Ejecutar pruebas con cobertura
npm run test:coverage
```

## Estructura del proyecto

```text
src/            # Código fuente (componentes, páginas, contextos, hooks, utils)
public/         # Archivos estáticos públicos
assets/         # Recursos del proyecto
admin/          # Recursos relacionados al panel administrativo
legacy/         # Versiones HTML estáticas (migradas a React)
  └── htmls/    # Archivos HTML originales
dist/           # Build generado para producción
```

## Notas

- La aplicación usa `HashRouter`, lo cual la hace compatible con GitHub Pages.
- Los archivos HTML originales se encuentran en `legacy/htmls/` como referencia tras la migración a React.
- El panel de administración requiere autenticación con los roles correspondientes para acceder a sus rutas.

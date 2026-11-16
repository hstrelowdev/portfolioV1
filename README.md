# Portfolio — Hans Strelow (@hstrelowdev)

Portafolio personal desarrollado como SPA con **React + TypeScript + Vite** y **Tailwind CSS**. Incluye secciones de presentación, proyectos destacados, perfil profesional/stack y un formulario de contacto integrado con Formspree.

## Características

- **Ruteo cliente** con `react-router-dom` (rutas: `/`, `/proyectos`, `/sobre-mi`, y página 404).
- **Layout compartido** (`Header`/`Footer`) con estado activo de navegación y scroll al inicio / soporte de anclas (`/sobre-mi#contacto`).
- **Páginas**
  - **Inicio**: hero, pilares, proyectos destacados, capacidades y CTA.
  - **Proyectos**: listado de proyectos con tarjetas e imágenes.
  - **Sobre mí & Contacto**: perfil, trayectoria, metadata, stack tecnológico y formulario de contacto.
- **Formulario de contacto** funcional vía [Formspree](https://formspree.io) (envío con `fetch`, feedback de éxito/error en la misma vista).
- **Imágenes de proyectos** servidas desde `vite-project/public/img/`.
- **Configuración para Netlify** incluida (`vite-project/netlify.toml`) con fallback SPA (`/* → /index.html`).

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) v7
- [Tailwind CSS](https://tailwindcss.com/)
- ESLint

## Estructura del repositorio

```text
.
└── vite-project/          # Aplicación web (Vite)
    ├── public/            # Assets estáticos (p. ej. img/, icons.svg)
    ├── src/
    │   ├── components/    # Componentes UI (Header, Footer, cards, etc.)
    │   ├── layouts/       # MainLayout + <Outlet />
    │   ├── pages/         # Home, Projects, About, NotFound
    │   ├── App.tsx        # Definición de rutas
    │   └── main.tsx       # Punto de entrada (BrowserRouter)
    ├── netlify.toml       # Build/publish y redirect SPA para Netlify
    └── package.json
```

## Requisitos

- [Node.js](https://nodejs.org/) (recomendado LTS)
- npm

## Desarrollo local

```bash
cd vite-project
npm install
npm run dev
```

Vite mostrará la URL local (por defecto `http://localhost:5173`).

## Scripts disponibles

Ejecutar desde `vite-project/`:

| Comando           | Descripción                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Servidor de desarrollo con HMR                   |
| `npm run build`   | Compila TypeScript (`tsc -b`) y genera `dist/`  |
| `npm run preview` | Sirve localmente el build de producción          |
| `npm run lint`    | Ejecuta ESLint                                   |

## Despliegue en Netlify

El proyecto está preparado para desplegarse desde la subcarpeta `vite-project/`.

1. **Build settings** (Netlify):
   - **Base directory:** `vite-project`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
2. **SPA fallback:** definido en `vite-project/netlify.toml` (`/* → /index.html`, status 200) para que las rutas de React Router funcionen en recargas y accesos directos.
3. Despliega desde la rama configurada (p. ej. `main`) y verifica rutas (`/`, `/proyectos`, `/sobre-mi`) y el envío del formulario.

## Contacto

- GitHub: [@hstrelowdev](https://github.com/hstrelowdev)
- LinkedIn: [hans-strelow](https://www.linkedin.com/in/hans-strelow)

---

© 2026 Hans Strelow

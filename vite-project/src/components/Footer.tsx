import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest pt-space-2xl pb-space-xl shadow-[0_-1px_16px_rgba(0,0,0,0.4)]">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-space-lg lg:px-margin">
        <div className="flex flex-col md:flex-row items-center justify-between gap-space-lg pb-space-xl">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <p className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Hans Strelow — Full Stack Developer · Chile 🇨🇱
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Arquitectura frontend &amp; sistemas digitales escalables
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-space-md">
            <Link
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container px-space-sm py-1 rounded transition-colors"
              to="/"
            >
              Inicio
            </Link>
            <Link
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container px-space-sm py-1 rounded transition-colors"
              to="/proyectos"
            >
              Proyectos
            </Link>
            <Link
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container px-space-sm py-1 rounded transition-colors"
              to="/sobre-mi"
            >
              Sobre Mí
            </Link>
            <a
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-container px-space-sm py-1 rounded transition-colors"
              href="https://github.com/hstrelowdev"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-container px-space-sm py-1 rounded transition-colors"
              href="https://www.linkedin.com/in/hans-strelow"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </nav>
        </div>
        <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-center sm:text-left">
          <p className="font-label-tag text-label-tag text-on-surface-variant tracking-wider uppercase">
            © 2026 Hans Strelow. Todos los derechos reservados.
          </p>
          <p className="font-label-code text-label-code text-primary/80">Crafted with Luminescent Obsidian</p>
        </div>
      </div>
    </footer>
  );
}

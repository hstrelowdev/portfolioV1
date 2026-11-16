import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full py-space-2xl">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-space-lg lg:px-margin flex flex-col items-start gap-space-md">
        <span className="font-label-code text-label-code text-primary font-semibold tracking-wider uppercase">
          // 404
        </span>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
          Página no encontrada
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          La ruta que buscas no existe o fue movida.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-space-xl py-3 rounded-full bg-primary-container text-on-primary font-headline-sm text-body-md transition-all duration-300 hover:bg-primary hover:text-on-primary"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

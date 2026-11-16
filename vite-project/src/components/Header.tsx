export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
      <div className="h-20 max-w-[1280px] mx-auto px-gutter-mobile md:px-space-lg lg:px-margin flex items-center justify-between">
        <a className="group flex items-center gap-space-sm text-left" href="index.html">
          <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center transition-all duration-300 group-hover:bg-primary-container/20">
            <span className="font-label-code text-label-code text-primary font-bold tracking-wider">HS</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none group-hover:text-primary transition-colors">
              Hans Strelow
            </span>
            <span className="font-label-tag text-label-tag text-on-surface-variant font-medium mt-0.5 leading-none">
              @hstrelowdev
            </span>
          </div>
        </a>
        <nav
          className="hidden md:flex items-center gap-space-xs p-1 rounded-full bg-surface-container-lowest/60 backdrop-blur-md"
          data-active-classes="bg-surface-container text-primary font-semibold"
        >
          <a
            aria-current="page"
            className="px-space-md py-space-xs rounded-full transition-all bg-surface-container text-primary font-semibold"
            href="index.html"
          >
            Inicio
          </a>
          <a
            className="px-space-md py-space-xs rounded-full font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
            href="views/proyects.html"
          >
            Proyectos
          </a>
          <a
            className="px-space-md py-space-xs rounded-full font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
            href="views/abourt.html"
          >
            Sobre Mí &amp; Contacto
          </a>
        </nav>
        <div className="flex items-center gap-space-md">
          <a
            className="hidden sm:inline-flex items-center justify-center px-space-md py-space-xs rounded-full bg-primary-container text-on-primary font-headline-sm text-body-sm transition-all duration-300 shadow-[0_0_20px_rgba(160,120,255,0.35)] hover:shadow-[0_0_28px_rgba(160,120,255,0.55)] hover:bg-primary hover:text-on-primary"
            href="views/abourt.html#contacto"
          >
            Hablemos
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}

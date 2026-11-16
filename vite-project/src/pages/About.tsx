export default function About() {
  return (
    <div className="w-full">
      <section className="py-space-2xl">
        <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-space-lg lg:px-margin flex flex-col gap-space-lg">
          <div className="max-w-3xl">
            <span className="font-label-code text-label-code text-primary font-semibold tracking-wider uppercase">
              // Sobre mí
            </span>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight mt-1">
              Hans Strelow
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-md leading-relaxed">
              Titulado de Analista Programador Computacional de Duoc UC y Desarrollador Full Stack con foco en Web,
              Mobile &amp; Cloud. Me interesa construir software funcional, moderno y mantenible, con especial atención
              al rendimiento, la claridad del código y la experiencia de usuario.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
              Trabajo con tecnologías como TypeScript, React/Next.js, PHP/Laravel, Python y servicios en la nube.
              Disfruto diseñar arquitecturas simples, automatizar procesos y resolver problemas complejos en producción.
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-space-2xl bg-surface-container-lowest/60 relative scroll-mt-24">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary-container/20 to-transparent absolute top-0"></div>
        <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-space-lg lg:px-margin">
          <div className="max-w-2xl">
            <span className="font-label-code text-label-code text-primary font-semibold tracking-wider uppercase">
              // Contacto
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight mt-1">
              Hablemos
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
              ¿Tienes un proyecto, una idea o una oportunidad de colaboración? Puedes encontrarme en:
            </p>
            <div className="mt-space-lg flex flex-col sm:flex-row flex-wrap gap-space-md">
              <a
                className="inline-flex items-center justify-center gap-2 px-space-xl py-3 rounded-full bg-primary-container text-on-primary font-headline-sm text-body-md transition-all duration-300 shadow-[0_0_24px_rgba(160,120,255,0.45)] hover:shadow-[0_0_36px_rgba(160,120,255,0.65)] hover:bg-primary hover:text-on-primary"
                href="https://github.com/hstrelowdev"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">code</span>
                <span>GitHub</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 px-space-xl py-3 rounded-full bg-surface-container-high text-on-surface font-headline-sm text-body-md transition-all duration-300 hover:bg-surface-container-highest hover:text-primary"
                href="https://www.linkedin.com/in/hans-strelow"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px] text-primary">work</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

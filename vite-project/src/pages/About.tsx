import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xoedenyz";

export default function About() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = (await res.json().catch(() => null)) as
          | { errors?: Array<{ message?: string }> }
          | null;
        const msg =
          json?.errors?.map((err) => err.message).filter(Boolean).join(", ") ||
          "No se pudo enviar el mensaje. Intenta nuevamente.";
        setErrorMessage(msg);
        setStatus("error");
      }
    } catch {
      setErrorMessage("No se pudo enviar el mensaje. Intenta nuevamente.");
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col w-full relative">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-primary-container/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-[900px] right-0 w-[500px] h-[400px] bg-secondary-container/15 blur-[160px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-20 left-10 w-[600px] h-[320px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      {/* SECTION 1: HEADER */}
      <section className="max-w-[1280px] w-full mx-auto px-gutter-mobile md:px-space-lg lg:px-margin pt-space-xl pb-space-lg">
        <div className="flex flex-col items-start gap-space-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-tag text-label-tag tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            // 02 — PERFIL PROFESIONAL
          </div>
          <h1 className="font-headline-display text-headline-display-mobile md:text-headline-display text-on-surface tracking-tight mt-space-sm max-w-4xl">
            Sobre Mí &amp; Enfoque de Desarrollo
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-space-xs leading-relaxed">
            Ingeniería de software de extremo a extremo: desde interfaces de usuario intuitivas y responsivas hasta
            lógica de backend confiable y programación de bajo nivel.
          </p>
        </div>
      </section>

      {/* SECTION 2: BIO & METADATA GRID */}
      <section className="max-w-[1280px] w-full mx-auto px-gutter-mobile md:px-space-lg lg:px-margin pb-space-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          <div className="lg:col-span-7 flex flex-col gap-space-lg bg-surface-container-low/80 backdrop-blur-xl p-space-lg md:p-space-xl rounded-xl shadow-xl">
            <div className="flex items-center gap-space-md">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-container to-secondary-container flex items-center justify-center shadow-lg shadow-primary/20 text-on-primary font-label-code text-headline-sm font-bold tracking-tight">
                HS
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-headline-sm text-headline-sm text-on-surface">Hans Strelow</span>
                  <span className="font-label-tag text-label-tag text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    Pro
                  </span>
                </div>
                <span className="font-label-code text-body-sm text-on-surface-variant font-medium">
                  Hans Strelow · Analista Programador Computacional (Duoc UC) · Full Stack &amp; Mobile Developer
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
              <p>
                Titulado de Analista Programador Computacional en Duoc UC. Desarrollador Full Stack con amplia
                experiencia construyendo y manteniendo aplicaciones web y mobile en producción (Chile 🇨🇱 / Remoto), con
                foco en resolver problemas complejos de frontend, backend, bases de datos e infraestructura cloud.
              </p>
              <p>
                Mi trayectoria incluye experiencia en iBoxStudio liderando funcionalidades web y mobile (React / React
                Native), automatizaciones en Python (soft-delete de +5.000 registros sin downtime), despliegues e
                infraestructura AWS (Cognito, Elastic Beanstalk, Docker), y en COSOF desarrollando plataformas para el
                rubro salud (ERP logístico, agendamiento médico y facturación en PHP/JS). Especialista en investigar
                bugs críticos que cruzan frontend, backend y datos.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <a
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container hover:bg-primary-container/20 text-on-surface hover:text-primary transition-all duration-300 font-label-code text-body-sm shadow-sm"
                href="https://github.com/hstrelowdev"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                <span>github.com/hstrelowdev</span>
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  north_east
                </span>
              </a>
              <a
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container hover:bg-primary-container/20 text-on-surface hover:text-primary transition-all duration-300 font-label-code text-body-sm shadow-sm"
                href="https://www.linkedin.com/in/hans-strelow"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
                <span>linkedin.com/in/hans-strelow</span>
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  north_east
                </span>
              </a>
            </div>

            <div className="pt-space-md mt-space-xs grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div className="p-space-md rounded-lg bg-surface-container-lowest/80 flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[24px]">verified</span>
                <div className="flex flex-col">
                  <span className="font-label-tag text-label-tag uppercase text-on-surface-variant">Disponibilidad</span>
                  <span className="font-headline-sm text-body-md text-on-surface font-semibold">
                    Listo para nuevos desafíos
                  </span>
                </div>
              </div>
              <div className="p-space-md rounded-lg bg-surface-container-lowest/80 flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-tertiary text-[24px]">speed</span>
                <div className="flex flex-col">
                  <span className="font-label-tag text-label-tag uppercase text-on-surface-variant">Commit Velocity</span>
                  <div className="flex items-center gap-2">
                    <span className="font-headline-sm text-body-md text-on-surface font-semibold">Alto Rendimiento</span>
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="bg-surface-container-low/80 backdrop-blur-xl p-space-lg rounded-xl shadow-xl flex flex-col gap-space-sm">
              <div className="flex items-center justify-between pb-space-xs">
                <span className="font-label-tag text-label-tag uppercase tracking-wider text-primary">Metadata Operativa</span>
                <span className="font-label-code text-label-tag text-on-surface-variant">SYSTEM: ONLINE</span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between p-2.5 rounded bg-surface-container/60 hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">public</span>
                    <span className="font-body-sm text-body-sm font-medium">Ubicación</span>
                  </div>
                  <span className="font-label-code text-body-sm text-on-surface font-medium">Chile · UTC-3 / UTC-4</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-surface-container/60 hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">laptop_mac</span>
                    <span className="font-body-sm text-body-sm font-medium">Modalidad</span>
                  </div>
                  <span className="font-label-code text-body-sm text-on-surface font-medium">Remoto · Híbrido</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-surface-container/60 hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">translate</span>
                    <span className="font-body-sm text-body-sm font-medium">Idiomas</span>
                  </div>
                  <span className="font-label-code text-body-sm text-on-surface font-medium">Español (Nativo) · Inglés Técnico</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-surface-container/60 hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">layers</span>
                    <span className="font-body-sm text-body-sm font-medium">Enfoque</span>
                  </div>
                  <span className="font-label-code text-body-sm text-primary font-medium">Full Stack &amp; Open Source</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-2xl flex flex-col font-label-code">
              <div className="flex items-center justify-between pb-space-xs mb-space-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-error-container"></div>
                  <div className="w-3 h-3 rounded-full bg-primary-container/60"></div>
                  <div className="w-3 h-3 rounded-full bg-tertiary-container/60"></div>
                </div>
                <span className="text-label-tag text-on-surface-variant/70">bash — hs-node-console</span>
                <div className="w-3"></div>
              </div>
              <div className="p-space-xs flex flex-col gap-2 text-body-sm leading-relaxed">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="text-primary font-bold">$</span>
                  <span>echo $DEV_FOCUS</span>
                </div>
                <div className="text-secondary pl-4">&quot;Web, Mobile (React Native), Python &amp; AWS Cloud&quot;</div>
                <div className="flex items-center gap-2 text-on-surface-variant mt-1">
                  <span className="text-primary font-bold">$</span>
                  <span>echo $TRAJECTORY</span>
                </div>
                <div className="text-primary pl-4 flex items-center gap-2">
                  <span className="text-tertiary">&gt;</span>
                  <span>&quot;iBoxStudio (Minería/Cloud) · COSOF (Salud/ERP)&quot;</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant/40 mt-2">
                  <span className="text-primary font-bold">$</span>
                  <span className="animate-pulse inline-block w-2.5 h-4 bg-primary align-middle"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TECH STACK & ECOSYSTEM */}
      <section className="max-w-[1280px] w-full mx-auto px-gutter-mobile md:px-space-lg lg:px-margin pb-space-2xl">
        <div className="flex flex-col items-start gap-space-xs mb-space-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-tag text-label-tag tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            // 03 — CAPACIDADES TÉCNICAS
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight mt-space-xs">
            Stack Tecnológico &amp; Ecosistema
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Conjunto de herramientas seleccionadas para garantizar velocidad en producción, tipado estricto y
            mantenibilidad a largo plazo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          <div className="bg-surface-container-low/80 backdrop-blur-xl p-space-lg rounded-xl shadow-xl flex flex-col justify-between hover:bg-surface-container-high/60 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[28px]">devices</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">Frontend Reactivo</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Construcción de interfaces de alta fidelidad, dinámicas y orientadas a una experiencia de usuario
                impecable.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-secondary">TypeScript</span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-on-surface">JavaScript (ES6+)</span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-primary">Next.js</span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-secondary">React</span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-on-surface">Tailwind CSS</span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-on-surface-variant">HTML5 / CSS3</span>
              </div>
            </div>
            <div className="mt-space-lg pt-space-sm flex items-center justify-between font-label-code text-label-tag text-on-surface-variant">
              <span>Component-Driven</span>
              <span className="text-primary font-bold">100% Type-Safe</span>
            </div>
          </div>

          <div className="bg-surface-container-low/80 backdrop-blur-xl p-space-lg rounded-xl shadow-xl flex flex-col justify-between hover:bg-surface-container-high/60 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-lg bg-secondary-container/30 flex items-center justify-center text-secondary mb-space-md">
                <span className="material-symbols-outlined text-[28px]">dns</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">Backend &amp; Arquitectura</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Diseño de APIs deterministas, modelado eficiente de datos y lógica server-side escalable para entornos
                exigentes.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-secondary">PHP</span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-primary">Laravel</span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-on-surface">Node.js</span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-on-surface-variant">SQLite</span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-secondary">REST APIs</span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-on-surface-variant">Blade Templates</span>
              </div>
            </div>
            <div className="mt-space-lg pt-space-sm flex items-center justify-between font-label-code text-label-tag text-on-surface-variant">
              <span>MVC &amp; Microservices</span>
              <span className="text-secondary font-bold">Robust Schema</span>
            </div>
          </div>

          <div className="bg-surface-container-low/80 backdrop-blur-xl p-space-lg rounded-xl shadow-xl flex flex-col justify-between hover:bg-surface-container-high/60 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div>
              <div className="w-12 h-12 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary mb-space-md">
                <span className="material-symbols-outlined text-[28px]">cloud_sync</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">Mobile, Python &amp; Cloud</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Desarrollo cross-platform mobile con React Native, scripts y automatización de procesos en Python,
                gestión de infraestructura en AWS y pipelines de despliegue a producción.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-primary">Python</span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-secondary">Django</span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-tertiary">React Native</span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-on-surface">AWS (Cognito / Beanstalk)</span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-secondary">Docker</span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-on-surface-variant">SQL &amp; Optimización</span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-on-surface">Jira &amp; CI/CD</span>
                <span className="px-3 py-1 rounded-full bg-surface-container font-label-tag text-label-tag text-primary">Debugging en Producción</span>
              </div>
            </div>
            <div className="mt-space-lg pt-space-sm flex items-center justify-between font-label-code text-label-tag text-on-surface-variant">
              <span>Cloud &amp; Mobile</span>
              <span className="text-tertiary font-bold">Zero Downtime</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONTACT */}
      <section
        className="max-w-[1280px] w-full mx-auto px-gutter-mobile md:px-space-lg lg:px-margin pb-space-2xl scroll-mt-24"
        id="contacto"
      >
        <div className="bg-surface-container-low/90 backdrop-blur-2xl rounded-2xl p-space-lg md:p-space-2xl shadow-2xl relative overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern height="32" id="contact-grid" patternUnits="userSpaceOnUse" width="32">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1"></path>
              </pattern>
            </defs>
            <rect fill="url(#contact-grid)" height="100%" width="100%"></rect>
          </svg>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="flex flex-col gap-space-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-tag text-label-tag tracking-widest uppercase w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  // 04 — CONECTAR
                </div>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight mt-space-xs">
                  Iniciar Conversación
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  ¿Tienes un nuevo producto en fase de ideación, requieres reforzar la ingeniería de una plataforma
                  existente o deseas colaborar en iniciativas de código abierto? Cuéntame los detalles técnicos.
                </p>
              </div>

              <div className="flex flex-col gap-space-sm mt-space-xl">
                <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest/70 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">schedule</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-body-md text-on-surface font-semibold">Respuesta Rápida</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Garantizada en menos de 24 horas hábiles
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest/70 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[22px]">pin_drop</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-body-md text-on-surface font-semibold">
                      Santiago / Regiones · Chile
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Disponibilidad para hubs remotos globales
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container-lowest/70 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-[22px]">event_available</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-body-md text-on-surface font-semibold">Ventana de Proyectos</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Calendario disponible para Q2 / Q3 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-surface-container-lowest/90 p-space-lg md:p-space-xl rounded-xl shadow-xl">
              <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="Nuevo contacto desde portfolio" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-code text-body-sm text-on-surface font-medium flex items-center justify-between"
                      htmlFor="contact-name"
                    >
                      <span>Nombre o Empresa</span>
                      <span className="text-primary">*</span>
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary-container transition-all font-body-md text-body-md"
                      id="contact-name"
                      name="name"
                      placeholder="Ej. Estudio Nexus o Andrea Soto"
                      required
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-code text-body-sm text-on-surface font-medium flex items-center justify-between"
                      htmlFor="contact-email"
                    >
                      <span>Correo Electrónico</span>
                      <span className="text-primary">*</span>
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary-container transition-all font-body-md text-body-md"
                      id="contact-email"
                      name="email"
                      placeholder="tu@correo.com"
                      required
                      type="email"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-code text-body-sm text-on-surface font-medium" htmlFor="contact-reason">
                    Motivo del Contacto
                  </label>
                  <div className="relative">
                    <select
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container transition-all font-body-md text-body-md appearance-none cursor-pointer"
                      id="contact-reason"
                      name="reason"
                      defaultValue="nuevo-proyecto"
                    >
                      <option className="bg-surface-container text-on-surface" value="nuevo-proyecto">
                        Desarrollo de Nuevo Proyecto / Sitio Web
                      </option>
                      <option className="bg-surface-container text-on-surface" value="open-source">
                        Colaboración Open Source
                      </option>
                      <option className="bg-surface-container text-on-surface" value="remoto">
                        Propuesta de Trabajo Remoto
                      </option>
                      <option className="bg-surface-container text-on-surface" value="consulta">
                        Consulta Técnica
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant flex items-center">
                      <span className="material-symbols-outlined text-[20px]">expand_more</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-code text-body-sm text-on-surface font-medium flex items-center justify-between"
                    htmlFor="contact-message"
                  >
                    <span>Mensaje Detallado</span>
                    <span className="text-primary">*</span>
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary-container transition-all font-body-md text-body-md resize-none"
                    id="contact-message"
                    name="message"
                    placeholder="Describe los objetivos del proyecto, requerimientos de stack o plazos esperados..."
                    required
                    rows={4}
                  ></textarea>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <input
                    className="mt-1 w-4 h-4 rounded bg-surface-container-low text-primary-container focus:ring-primary cursor-pointer accent-primary"
                    id="contact-confirm"
                    name="confirm"
                    required
                    type="checkbox"
                  />
                  <label
                    className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer select-none"
                    htmlFor="contact-confirm"
                  >
                    Confirmo que la información suministrada es fidedigna y autorizo la comunicación vía email con fines
                    estrictamente técnicos o profesionales.
                  </label>
                </div>

                <div className="pt-space-xs flex flex-col sm:flex-row items-center justify-between gap-space-md">
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-3 rounded-full bg-gradient-to-r from-primary-container to-tertiary-container text-on-primary font-headline-sm text-body-md font-semibold transition-all duration-300 shadow-[0_0_24px_rgba(160,120,255,0.4)] hover:shadow-[0_0_36px_rgba(160,120,255,0.65)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    disabled={status === "submitting"}
                    type="submit"
                  >
                    <span>{status === "submitting" ? "Enviando..." : "Enviar Mensaje"}</span>
                    <span className="material-symbols-outlined text-[20px]">send</span>
                  </button>
                  <span className="font-label-code text-label-tag text-on-surface-variant/70 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">lock</span>
                    Cifrado SSL directo
                  </span>
                </div>

                <div aria-live="polite" className="flex flex-col gap-space-sm">
                  {status === "success" && (
                    <div className="p-space-md rounded-lg bg-primary-container/20 text-on-surface flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-[24px]">task_alt</span>
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-body-md text-primary font-semibold">
                          ¡Mensaje enviado con éxito!
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Hans revisará tu consulta técnica a la brevedad. Gracias por comunicarte.
                        </span>
                      </div>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="p-space-md rounded-lg bg-red-500/10 text-on-surface flex items-center gap-3">
                      <span className="material-symbols-outlined text-red-400 text-[24px]">error</span>
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-body-md text-red-300 font-semibold">
                          No se pudo enviar el mensaje
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {errorMessage || "Intenta nuevamente en unos momentos."}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

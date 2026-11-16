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

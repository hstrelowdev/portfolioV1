import { Link } from "react-router-dom";
import { CapabilityCard } from "../components/CapabilityCard";
import { PillarCard } from "../components/PillarCard";
import { ProjectCard } from "../components/ProjectCard";

const pillars = [
  {
    icon: "layers",
    label: "Arquitectura",
    title: "Full Stack",
    description:
      "Frontend interactivo reactivo acoplado a APIs robustas y modulares.",
  },
  {
    icon: "speed",
    label: "Filosofía",
    title: "Zero-Bloat",
    description:
      "Rendimiento nativo, accesibilidad cuidada y código de alta claridad.",
  },
  {
    icon: "schedule",
    label: "Disponibilidad",
    title: "Remoto",
    description:
      "Base horaria Chile (UTC-3 / UTC-4), disponible para equipos globales.",
  },
  {
    icon: "code_blocks",
    label: "Comunidad",
    title: "Open Source",
    description:
      "Herramientas públicas, software libre e investigación de modding.",
  },
];

const projects = [
  {
    image: "/img/devteca.png",
    imageAlt: "Devteca Developer Resource Library interface preview",
    badge: "TypeScript / Next.js",
    repo: "hstrelowdev/Devteca",
    title: "Devteca",
    description:
      "Biblioteca web con herramientas, frameworks y plataformas de práctica para desarrolladores con motor de búsqueda instantáneo y categorización taxonómica ágil.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "SQLite"],
    href: "https://github.com/hstrelowdev/Devteca",
  },
  {
    image: "/img/bitacora.png",
    imageAlt: "Bitácora Internal Workflow Management interface preview",
    badge: "PHP / Laravel",
    repo: "hstrelowdev/bitacora",
    title: "Bitácora",
    description:
      "Sistema interno para registrar, asignar y hacer seguimiento a solicitudes de trabajo con estados de transición, filtros dinámicos y un historial de auditoría automático que guarda valores anteriores y nuevos para trazabilidad total.",
    tags: ["PHP 8.2", "Laravel", "Blade Templates", "SQLite"],
    href: "https://github.com/hstrelowdev/bitacora",
  },
  {
    image: "/img/valhein.jpg",
    imageAlt: "deathTauntVH Valheim mod HUD banner taunt interface preview",
    badge: "C# / Game Modding",
    repo: "hstrelowdev/deathTauntVH",
    title: "deathTauntVH",
    description:
      "Mod para Valheim en C# que anuncia las muertes de jugadores en pantalla con un banner HUD personalizable e inyecta ganchos de audio para reproducir burlas situacionales de acuerdo a la causa de muerte exacta registrada en el motor.",
    tags: ["C#", ".NET Standard", "HarmonyX", "Unity / BepInEx"],
    href: "https://github.com/hstrelowdev/deathTauntVH",
  },
];

const capabilities = [
  {
    icon: "devices",
    title: "Frontend Reactivo",
    description:
      "Desarrollo de interfaces intuitivas, de carga ultrarrápida y diseño centrado en el usuario, optimizadas para accesibilidad y alta interactividad.",
    skills: [
      { name: "TypeScript & JavaScript", level: "Avanzado" },
      { name: "Next.js & React Ecosystem", level: "Avanzado" },
      { name: "Tailwind CSS & Modern UI", level: "Maestría" },
      { name: "HTML5 Semántico & Responsive", level: "Estándar" },
    ],
  },
  {
    icon: "dns",
    title: "Backend & APIs",
    description:
      "Construcción de servidores, modelos relacionales y servicios web con autenticación sólida, auditoría de transacciones y optimización de consultas.",
    skills: [
      { name: "PHP 8.x / Laravel Framework", level: "Producción" },
      { name: "Node.js & Microservicios", level: "Sólido" },
      { name: "SQLite, MySQL & PostgreSQL", level: "Avanzado" },
      { name: "Arquitectura RESTful APIs", level: "Estándar" },
    ],
  },
  {
    icon: "cloud",
    title: "Mobile, Python & Cloud",
    description:
      "Desarrollo de aplicaciones móviles y web con React Native, automatización de datos en Python, arquitectura serverless/cloud con AWS (Cognito, Elastic Beanstalk, Docker) y resolución de incidentes complejos en producción.",
    skills: [
      { name: "React Native", level: "Avanzado" },
      { name: "Python / Django", level: "Avanzado" },
      { name: "AWS (Cognito, Elastic Beanstalk)", level: "Producción" },
      { name: "Docker & CI/CD Pipelines", level: "Sólido" },
      { name: "Diagnóstico & Debugging Complejo", level: "Especialista" },
    ],
  },
];

const stackBadges = [
  "Next.js & React",
  "TypeScript",
  "PHP / Laravel",
  "Python & AWS",
  "SQLite & SQL",
];

export default function Home() {
  return (
    <div className="flex flex-col w-full selection:bg-primary-container selection:text-on-primary-container">
      <section className="relative w-full overflow-hidden pb-space-2xl pt-space-lg">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary/10 rounded-full blur-[140px] opacity-70"></div>
        <div className="pointer-events-none absolute top-48 -left-32 w-[340px] h-[340px] bg-tertiary-container/15 rounded-full blur-[110px] opacity-60"></div>
        <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-space-lg lg:px-margin relative z-10 flex flex-col">
          <div className="inline-flex items-center gap-2.5 px-space-md py-1.5 rounded-full bg-surface-container/80 backdrop-blur-md self-start shadow-[0_0_24px_rgba(0,0,0,0.4)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]"></span>
            </span>
            <span className="font-label-tag text-label-tag text-on-surface-variant font-semibold tracking-wider uppercase">
              Disponible para nuevos proyectos &amp; colaboraciones
            </span>
          </div>

          <div className="mt-space-lg max-w-4xl flex flex-col gap-space-md">
            <h1 className="font-headline-display text-headline-lg-mobile md:text-headline-display text-on-surface font-extrabold tracking-tight leading-[1.08]">
              Desarrollando software funcional, moderno y con{" "}
              <span className="bg-gradient-to-r from-primary via-tertiary to-secondary text-transparent bg-clip-text">
                código de alta calidad
              </span>
              .
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Hola, soy{" "}
              <strong className="text-on-surface font-semibold">Hans Strelow</strong> 🇨🇱 (
              <span className="font-label-code text-primary">@hstrelowdev</span>). Titulado de Analista
              Programador Computacional de Duoc UC | Desarrollador Full Stack con foco en Web, Mobile &amp;
              Cloud. Enfocado en crear herramientas ágiles, arquitecturas web escalables y soluciones digitales
              robustas.{" "}
              <span className="inline-block ml-2 align-middle rotate-2 hover:rotate-0 hover:scale-110 transition-all duration-300">
                <img
                  src="/gif/tmnt-working.gif"
                  alt="Tortugas ninja trabajando en equipo"
                  className="h-16 md:h-24 w-auto rounded-xl border-2 border-primary/50 shadow-[0_0_24px_rgba(160,120,255,0.45)] bg-surface-container-low p-0.5"
                  loading="lazy"
                />
              </span>
            </p>
          </div>

          <div className="mt-space-lg flex flex-wrap items-center gap-space-md">
            <Link
              className="inline-flex items-center justify-center gap-2 px-space-xl py-3 rounded-full bg-primary-container text-on-primary font-headline-sm text-body-md transition-all duration-300 shadow-[0_0_28px_rgba(160,120,255,0.45)] hover:shadow-[0_0_40px_rgba(160,120,255,0.7)] hover:bg-primary hover:text-on-primary group"
              to="/proyectos"
            >
              <span>Explorar Proyectos</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-full bg-surface-container text-on-surface font-headline-sm text-body-md transition-all duration-300 hover:bg-surface-container-high hover:text-primary"
              to="/sobre-mi"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">person</span>
              <span>Sobre Mí &amp; Contacto</span>
            </Link>
          </div>

          <div className="mt-space-xl pt-space-lg flex flex-wrap items-center gap-space-sm">
            <span className="font-label-code text-label-code text-on-surface-variant/80 uppercase tracking-widest mr-space-xs font-semibold">
              Core Stack //
            </span>
            {stackBadges.map((badge) => (
              <span
                key={badge}
                className="font-label-tag text-label-tag px-3 py-1 rounded-full bg-surface-container text-primary font-medium tracking-wide"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mt-space-xl">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-space-2xl bg-surface-container-lowest/60 relative">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary-container/20 to-transparent absolute top-0"></div>
        <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-space-lg lg:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-xl">
            <div className="flex flex-col gap-1">
              <span className="font-label-code text-label-code text-primary font-semibold tracking-wider uppercase">
                // 01 — Repositorios Destacados
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
                Proyectos Destacados
              </h2>
            </div>
            <Link
              className="inline-flex items-center gap-1.5 font-headline-sm text-body-md text-primary hover:text-secondary font-semibold transition-colors group"
              to="/proyectos"
            >
              <span>Ver todos los proyectos</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-space-2xl relative">
        <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-space-lg lg:px-margin">
          <div className="flex flex-col gap-1 mb-space-xl max-w-2xl">
            <span className="font-label-code text-label-code text-primary font-semibold tracking-wider uppercase">
              // 02 — Competencias Técnicas
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
              Capacidades &amp; Dominio Tecnológico
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Ecosistemas de código y herramientas que utilizo para construir soluciones duraderas y veloces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {capabilities.map((capability) => (
              <CapabilityCard key={capability.title} {...capability} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-space-2xl relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-space-lg lg:px-margin">
          <div className="relative rounded-2xl bg-gradient-to-b from-surface-container to-surface-container-low p-space-xl md:p-space-2xl text-center flex flex-col items-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-primary-container/20 rounded-full blur-[100px] opacity-75"></div>
            <span className="font-label-code text-label-code text-primary font-semibold tracking-widest uppercase mb-space-xs relative z-10">
              // Contacto &amp; Oportunidades
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-extrabold max-w-2xl tracking-tight leading-tight relative z-10 mb-space-sm">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-2xl relative z-10 mb-space-xl">
              De esta forma nos encontraremos en resolver tus proyectos entre mis gatos, agentes, AI y mis neuronas jaja.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-space-md relative z-10 mb-space-xl">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`inline-block transition-all duration-300 hover:rotate-0 hover:scale-110 ${
                    i % 2 === 0 ? "-rotate-2" : "rotate-2"
                  }`}
                >
                  <img
                    src="/gif/hacker-man.gif"
                    alt="Hacker man"
                    className="h-20 md:h-32 w-auto rounded-xl border-2 border-tertiary/50 shadow-[0_0_24px_rgba(244,114,182,0.35)] bg-surface-container-low p-0.5"
                    loading="lazy"
                  />
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-space-md relative z-10">
              <Link
                className="inline-flex items-center justify-center gap-2 px-space-xl py-3 rounded-full bg-primary-container text-on-primary font-headline-sm text-body-md transition-all duration-300 shadow-[0_0_24px_rgba(160,120,255,0.45)] hover:shadow-[0_0_36px_rgba(160,120,255,0.65)] hover:bg-primary hover:text-on-primary group"
                to="/sobre-mi#contacto"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Iniciar Conversación</span>
              </Link>
              <a
                className="inline-flex items-center justify-center gap-2 px-space-xl py-3 rounded-full bg-surface-container-high text-on-surface font-headline-sm text-body-md transition-all duration-300 hover:bg-surface-container-highest hover:text-primary"
                href="https://github.com/hstrelowdev"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px] text-primary">code</span>
                <span>Explorar GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

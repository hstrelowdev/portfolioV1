import { ProjectCard } from "../components/ProjectCard";

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

export default function Projects() {
  return (
    <div className="w-full py-space-2xl">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-space-lg lg:px-margin">
        <div className="flex flex-col gap-1 mb-space-xl max-w-3xl">
          <span className="font-label-code text-label-code text-primary font-semibold tracking-wider uppercase">
            // Proyectos
          </span>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
            Proyectos y repositorios
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Una selección de trabajos y herramientas que he construido, desde aplicaciones web hasta utilidades y mods.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

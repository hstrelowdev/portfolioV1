type ProjectCardProps = {
  image: string;
  imageAlt: string;
  badge: string;
  repo: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export function ProjectCard({
  image,
  imageAlt,
  badge,
  repo,
  title,
  description,
  tags,
  href,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-xl bg-surface-container-low/90 backdrop-blur-md overflow-hidden transition-all duration-300 hover:bg-surface-container hover:shadow-[0_12px_44px_rgba(139,92,246,0.18)] hover:-translate-y-1 group">
      <div className="relative w-full h-56 bg-surface-container-highest overflow-hidden">
        <img
          alt={imageAlt}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-black/30"></div>
        <div className="absolute top-3 right-3">
          <span className="font-label-tag text-label-tag px-2.5 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-primary font-medium shadow-md">
            {badge}
          </span>
        </div>
      </div>
      <div className="p-space-lg flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-on-surface-variant font-label-code text-label-tag mb-1">
            <span className="material-symbols-outlined text-[14px] text-primary">folder_open</span>
            <span>{repo}</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface font-bold group-hover:text-primary transition-colors mb-space-xs">
            {title}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
            {description}
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-1.5 mb-space-lg">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-label-tag text-label-tag px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-space-md rounded-lg bg-surface-container text-on-surface font-body-sm font-semibold transition-all duration-300 hover:bg-primary hover:text-on-primary group-hover:shadow-[0_0_20px_rgba(160,120,255,0.3)]"
            href={href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Ver Repositorio en GitHub</span>
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>
        </div>
      </div>
    </article>
  );
}

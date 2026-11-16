type Skill = { name: string; level: string };

type CapabilityCardProps = {
  icon: string;
  title: string;
  description: string;
  skills: Skill[];
};

export function CapabilityCard({ icon, title, description, skills }: CapabilityCardProps) {
  return (
    <div className="p-space-xl rounded-xl bg-surface-container-low flex flex-col justify-between transition-all duration-300 hover:bg-surface-container hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
      <div>
        <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary mb-space-md">
          <span className="material-symbols-outlined text-[26px]">{icon}</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs">{title}</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-lg">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-2 pt-space-md border-t border-surface-container-highest/40">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-between text-body-sm text-on-surface font-medium"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              {skill.name}
            </span>
            <span className="font-label-code text-label-tag text-primary">{skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

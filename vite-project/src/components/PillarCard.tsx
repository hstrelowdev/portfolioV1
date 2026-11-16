type PillarCardProps = {
  icon: string;
  label: string;
  title: string;
  description: string;
};

export function PillarCard({ icon, label, title, description }: PillarCardProps) {
  return (
    <div className="p-space-lg rounded-xl bg-surface-container/70 backdrop-blur-md transition-all duration-300 hover:bg-surface-container hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] group">
      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-space-sm transition-transform duration-300 group-hover:scale-110">
        <span className="material-symbols-outlined text-[22px]">{icon}</span>
      </div>
      <span className="font-label-tag text-label-tag text-on-surface-variant uppercase tracking-wider block mb-1">
        {label}
      </span>
      <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">{title}</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">{description}</p>
    </div>
  );
}

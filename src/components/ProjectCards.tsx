export const ProjectCard = ({ title, description, tags, link }: any) => {
  return (
    <a 
      href={link} 
      className="group p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-white/20 transition-all flex flex-col items-start text-left shadow-sm dark:shadow-none"
    >
      <h3 className="text-sm font-bold mb-2 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-xs text-gray-600 dark:text-gray-500 leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span 
            key={tag} 
            className="text-[10px] font-mono text-gray-500 dark:text-gray-400 bg-black/5 dark:bg-white/5 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};
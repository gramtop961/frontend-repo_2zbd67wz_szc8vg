import { Code2, Globe, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Design System',
    description: 'Reusable components with accessibility and theming.',
    icon: Layers,
    tags: ['React', 'Tailwind', 'Radix'],
    link: '#',
  },
  {
    title: 'Web App',
    description: 'Full-stack app with clean API and fast UI.',
    icon: Globe,
    tags: ['FastAPI', 'MongoDB', 'Vite'],
    link: '#',
  },
  {
    title: 'Open Source',
    description: 'Utilities and templates for faster dev.',
    icon: Code2,
    tags: ['OSS', 'DX', 'CLI'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Work</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">A few things I’ve been building lately.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-neutral-200/60 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-neutral-900">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-3 text-blue-600 dark:text-blue-400">
                  <p.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400">{p.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{p.description}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

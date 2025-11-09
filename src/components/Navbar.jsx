import { Menu, X, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="inline-flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
              <span className="font-semibold tracking-tight">My Portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <div className="h-6 w-px bg-neutral-200 dark:bg-neutral-800" />
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white">
                <Linkedin size={20} />
              </a>
            </nav>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

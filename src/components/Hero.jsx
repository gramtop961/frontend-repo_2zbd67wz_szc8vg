import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm dark:bg-neutral-900/70 dark:text-neutral-300">
              <Sparkles size={14} />
              Interactive 3D Portfolio
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Hi, I’m <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
              I craft modern web experiences blending clean design, performance, and playful interactions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition">
                View Projects
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-neutral-200/60 bg-white/70 backdrop-blur px-5 py-3 text-neutral-800 hover:bg-white shadow-sm dark:border-white/10 dark:bg-neutral-900/70 dark:text-neutral-200">
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white dark:from-neutral-900/0 dark:via-neutral-900/0 dark:to-neutral-900" />
      </div>
    </section>
  );
}

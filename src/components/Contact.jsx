import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Sent! I will get back to you soon.');
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s talk</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Have a question, project idea, or want to collaborate?</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-neutral-900">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-600/10 p-3 text-blue-600 dark:text-blue-400">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="font-semibold tracking-tight">Email</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">you@example.com</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">I’m open to freelance work and full-time opportunities.</p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-neutral-900">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="text-sm font-medium">Name</label>
                <input required className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-blue-500/20 focus:ring-4 dark:border-neutral-800 dark:bg-neutral-950" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm font-medium">Email</label>
                <input type="email" required className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-blue-500/20 focus:ring-4 dark:border-neutral-800 dark:bg-neutral-950" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Message</label>
                <textarea rows={4} required className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-blue-500/20 focus:ring-4 dark:border-neutral-800 dark:bg-neutral-950" />
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition">
                Send Message
                <Send size={18} />
              </button>
              {status && <span className="text-sm text-green-600 dark:text-green-400">{status}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

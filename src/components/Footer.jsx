export default function Footer() {
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            Built with love and a bit of 3D magic.
          </div>
        </div>
      </div>
    </footer>
  );
}

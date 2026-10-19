import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold text-white">
            Fix<span className="text-teal-400">Near</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Find trusted electricians, plumbers, tailors, cobblers and phone repair technicians in Port Harcourt.
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white">Explore</p>
          <div className="flex flex-col gap-2">
            <Link href="/" className="hover:text-teal-400">Home</Link>
            <Link href="/providers" className="hover:text-teal-400">Find an artisan</Link>
            <Link href="/#how" className="hover:text-teal-400">How it works</Link>
          </div>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white">For artisans</p>
          <p>Want to be listed on FixNear? Registration for artisans is coming soon.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">
        © 2026 FixNear. All rights reserved.
      </div>
    </footer>
  );
}
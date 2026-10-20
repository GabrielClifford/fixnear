import Link from 'next/link';
import { MapPin } from 'lucide-react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#how' },
  { label: 'For Professionals', href: '/#professionals' },
  { label: 'About', href: '/#why' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 md:flex-row md:items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-700 text-white">
            <MapPin className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="font-display block text-xl font-bold text-white">
              Fix<span className="text-emerald-500">Near</span>
            </span>
            <span className="text-[10px]">Real People. Reliable Services.</span>
          </span>
        </Link>
        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-5 py-5 text-xs md:flex-row">
          <p>© 2026 FixNear. All rights reserved.</p>
          <p>Proudly Nigerian</p>
        </div>
      </div>
    </footer>
  );
}
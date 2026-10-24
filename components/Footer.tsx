import Link from 'next/link';
import { Wrench } from 'lucide-react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Templates', href: '/#templates' },
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Footer() {
  return (
    <footer className="bg-[#071427] text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 md:flex-row md:items-center">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Wrench className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold text-white">FixNear</span>
          </Link>
          <p className="mt-2 text-xs">Empowering Artisans. Building Better Communities.</p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">
        © 2026 FixNear. All rights reserved.
      </div>
    </footer>
  );
}
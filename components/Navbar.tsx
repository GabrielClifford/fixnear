'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MapPin, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Find an artisan', href: '/providers' },
  { label: 'How it works', href: '/#how' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-white">
            <MapPin className="h-5 w-5" />
          </span>
          Fix<span className="text-teal-600">Near</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="transition hover:text-teal-600">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/providers"
          className="hidden rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700 md:block"
        >
          Find help now
        </Link>

        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-slate-100 px-5 pb-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-slate-100 py-4 text-sm font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/providers"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-teal-600 py-3 text-center text-sm font-semibold text-white"
          >
            Find help now
          </Link>
        </nav>
      )}
    </header>
  );
}
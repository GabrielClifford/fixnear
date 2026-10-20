'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, MapPin, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#how' },
  { label: 'For Professionals', href: '/#professionals' },
  { label: 'About', href: '/#why' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-700 text-white">
            <MapPin className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="font-display block text-xl font-bold text-slate-900">
              Fix<span className="text-emerald-700">Near</span>
            </span>
            <span className="hidden text-[10px] text-slate-500 sm:block">Real People. Reliable Services.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="transition hover:text-emerald-700">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <span className="hidden items-center gap-1.5 text-sm text-slate-700 lg:flex">
            <MapPin className="h-4 w-4 text-emerald-700" /> Port Harcourt <ChevronDown className="h-4 w-4 text-slate-400" />
          </span>
          <a href="#" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50">
            Log In
          </a>
          <a href="#" className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800">
            Sign Up
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-slate-100 bg-white px-5 pb-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-slate-100 py-3.5 text-sm font-medium text-slate-800"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a href="#" className="rounded-lg border border-slate-300 py-2.5 text-center text-sm font-medium">Log In</a>
            <a href="#" className="rounded-lg bg-emerald-700 py-2.5 text-center text-sm font-semibold text-white">Sign Up</a>
          </div>
        </nav>
      )}
    </header>
  );
}
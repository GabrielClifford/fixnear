'use client';

import { useState } from 'react';
import Link from 'next/link';
import ClassicTheme from '@/components/themes/ClassicTheme';
import BoldTheme from '@/components/themes/BoldTheme';
import { Provider } from '@/data/providers';
import { SiteSettings, ThemeName, themes } from '@/data/sites';

export default function ArtisanSite({ p, s }: { p: Provider; s: SiteSettings }) {
  const [theme, setTheme] = useState<ThemeName>(s.theme);

  return (
    <>
      {theme === 'bold' ? <BoldTheme p={p} s={s} /> : <ClassicTheme p={p} s={s} />}

      <footer className="bg-slate-900 px-5 py-6 pb-24 text-center text-xs text-slate-400">
        <p>
          Sample website for demonstration. Made with{' '}
          <Link href="/" className="font-semibold text-emerald-400">FixNear</Link>
        </p>
        <Link href="/signup" className="mt-1 inline-block text-emerald-400 underline">
          Get your own website
        </Link>
      </footer>

      {/* Demo theme switcher: in the real product this lives in the artisan dashboard */}
      <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-xs shadow-xl">
        <span className="px-3 font-medium text-slate-500">Demo theme</span>
        {themes.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTheme(t.id)}
            className={`rounded-full px-4 py-2 font-semibold transition ${
              theme === t.id ? 'bg-emerald-700 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </>
  );
}
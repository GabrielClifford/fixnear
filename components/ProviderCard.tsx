import Link from 'next/link';
import { BadgeCheck, MapPin, Star } from 'lucide-react';
import { Provider } from '@/data/providers';

const tones = [
  'from-emerald-100 to-emerald-200 text-emerald-800',
  'from-sky-100 to-sky-200 text-sky-800',
  'from-amber-100 to-amber-200 text-amber-800',
  'from-violet-100 to-violet-200 text-violet-800',
  'from-rose-100 to-rose-200 text-rose-800',
];

export default function ProviderCard({ p }: { p: Provider }) {
  const initials = p.name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
  const tone = tones[p.name.length % tones.length];
  const href = p.real ? `/b/${p.id}` : `/providers/${p.id}`;
  const photo = p.real ? p.photoUrl : `/providers/${p.id}.jpg`;

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative h-40 overflow-hidden">
        <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${tone}`}>
          <span className="font-display text-3xl font-bold">{initials}</span>
        </div>
        {photo && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${photo})` }}
          />
        )}
        <span className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-800 shadow">
          {p.reviews > 0 ? (
            <>
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {p.rating.toFixed(1)}
              <span className="font-normal text-slate-400">({p.reviews})</span>
            </>
          ) : (
            'New'
          )}
        </span>
        {p.verified ? (
          <span className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full bg-emerald-700 px-2 py-1 text-[11px] font-semibold text-white">
            <BadgeCheck className="h-3.5 w-3.5" /> Verified
          </span>
        ) : (
          !p.real && (
            <span className="absolute left-3 top-3 z-10 rounded-full bg-slate-900/80 px-2 py-1 text-[11px] font-semibold text-white">
              Sample
            </span>
          )
        )}
      </div>

      <div className="p-4">
        <h3 className="font-display truncate text-base font-semibold text-slate-900">{p.name}</h3>
        <p className="text-sm text-slate-500">{p.trade}</p>
        <p className="mt-2 flex items-center gap-1 text-xs text-slate-500">
          <MapPin className="h-3.5 w-3.5" /> {p.area}, {p.city}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.years > 0 && (
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-600">
              {p.years} yrs experience
            </span>
          )}
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-600">
            {p.verified ? 'Verified' : 'Not yet verified'}
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm">
            {p.priceFrom > 0 ? (
              <>
                <span className="text-slate-400">From </span>
                <span className="font-semibold text-emerald-700">₦{p.priceFrom.toLocaleString('en-NG')}</span>
              </>
            ) : (
              <span className="text-slate-500">Ask for a quote</span>
            )}
          </span>
          <span className="rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white transition group-hover:bg-emerald-800">
            View profile
          </span>
        </div>
      </div>
    </Link>
  );
}
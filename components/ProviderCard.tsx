import Link from 'next/link';
import { BadgeCheck, MapPin, Star } from 'lucide-react';
import { Provider, formatPrice } from '@/data/providers';

export default function ProviderCard({ p }: { p: Provider }) {
  const initials = p.name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <Link
      href={`/providers/${p.id}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-100 font-display text-lg font-bold text-teal-700">
          {initials}
        </div>
        <div className="min-w-0">
          <h3 className="flex items-center gap-1.5 font-display text-base font-semibold text-slate-900">
            <span className="truncate">{p.name}</span>
            {p.verified && <BadgeCheck className="h-4 w-4 shrink-0 text-teal-600" aria-label="Verified" />}
          </h3>
          <p className="mt-0.5 text-sm text-slate-500">{p.trade}</p>
        </div>
      </div>

      <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-slate-600">{p.about}</p>

      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="flex items-center gap-1 font-medium text-slate-900">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> {p.rating.toFixed(1)}
          <span className="font-normal text-slate-400">({p.reviews})</span>
        </span>
        <span className="flex items-center gap-1 text-slate-500">
          <MapPin className="h-4 w-4" /> {p.area}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
        <span className="font-semibold text-teal-700">{formatPrice(p.priceFrom)}</span>
        <span className="text-slate-400">{p.years} yrs experience</span>
      </div>
    </Link>
  );
}
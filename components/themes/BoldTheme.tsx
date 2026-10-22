import { MapPin } from 'lucide-react';
import CallbackForm from '@/components/CallbackForm';
import { ThemeProps } from '@/data/sites';

export default function BoldTheme({ p, s }: ThemeProps) {
  const stats = [
  { n: p.reviews ? p.rating.toFixed(1) : 'New', label: 'Rating' },
  { n: p.years ? `${p.years}` : '-', label: 'Years' },
  { n: p.verified ? 'Yes' : 'Pending', label: 'Verified' },
  { n: p.priceFrom ? `₦${p.priceFrom.toLocaleString('en-NG')}` : 'Quote', label: 'From' },
];

  return (
    <div className="bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <span className="font-display text-lg font-bold uppercase tracking-wider text-amber-400">{p.name}</span>
          <a href="#contact" className="rounded-full bg-amber-400 px-5 py-2 text-sm font-bold text-slate-950 transition hover:bg-amber-300">
            Get a callback
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-top opacity-40" style={{ backgroundImage: `url(/providers/${p.id}.jpg)` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
        <div className="relative mx-auto max-w-5xl px-5 py-24 md:py-32">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
            {p.trade} · {p.area}, {p.city}
          </p>
          <h1 className="font-display mt-4 max-w-2xl text-4xl font-bold uppercase leading-tight md:text-6xl">{s.tagline}</h1>
          <p className="mt-5 max-w-xl text-slate-300">{p.about}</p>
          <a href="#contact" className="mt-8 inline-block rounded-full bg-amber-400 px-8 py-4 text-sm font-bold uppercase tracking-wider text-slate-950 transition hover:bg-amber-300">
            Request a callback
          </a>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-5 py-8 text-center md:grid-cols-4">
          {stats.map((x) => (
            <div key={x.label}>
              <p className="font-display text-2xl font-bold text-amber-400">{x.n}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">{x.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="font-display text-3xl font-bold uppercase">What we do</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {s.services.map((x, i) => (
            <div key={x} className="flex items-center gap-5 rounded-2xl border border-white/10 bg-slate-900 p-5">
              <span className="font-display text-4xl font-bold text-amber-400">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-medium">{x}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16">
        <h2 className="font-display text-3xl font-bold uppercase">Areas served</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {s.serviceAreas.map((a) => (
            <span key={a} className="flex items-center gap-1.5 rounded-full border border-amber-400 px-4 py-2 text-sm text-amber-300">
              <MapPin className="h-4 w-4" /> {a}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-amber-400 text-slate-950">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-bold uppercase leading-tight">Ready to get started?</h2>
            <p className="mt-4 font-medium">Leave your details and {p.name} will get back to you.</p>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold">
              <MapPin className="h-4 w-4" /> {p.area}, {p.city}
            </p>
            {s.phone && <p className="mt-2 text-sm font-semibold">Phone: {s.phone}</p>}
          </div>
          <div className="rounded-3xl bg-white p-6">
            <CallbackForm name={p.name} />
          </div>
        </div>
      </section>
    </div>
  );
}
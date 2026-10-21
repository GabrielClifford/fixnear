import { BadgeCheck, Briefcase, Check, MapPin, Wallet } from 'lucide-react';
import CallbackForm from '@/components/CallbackForm';
import { ThemeProps } from '@/data/sites';

export default function ClassicTheme({ p, s }: ThemeProps) {
  const reasons = [
    { icon: Briefcase, title: `${p.years} years experience`, text: `Trusted ${p.trade.toLowerCase()} work in ${p.city}.` },
    { icon: BadgeCheck, title: p.verified ? 'Verified professional' : 'Profile in review', text: p.verified ? 'Identity and skills checked.' : 'Verification is not complete yet.' },
    { icon: Wallet, title: `From ₦${p.priceFrom.toLocaleString('en-NG')}`, text: 'Final price agreed before the job starts.' },
  ];

  return (
    <div className="bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <span className="font-display text-lg font-bold text-emerald-800">{p.name}</span>
          <nav className="hidden gap-6 text-sm font-medium text-slate-600 sm:flex">
            <a href="#services" className="hover:text-emerald-700">Services</a>
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <a href="#contact" className="rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800">
            Get a callback
          </a>
        </div>
      </header>

      <section className="bg-emerald-50">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-5 py-14 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              {p.trade} in {p.area}, {p.city}
            </p>
            <h1 className="font-display mt-3 text-4xl font-bold leading-tight">{s.tagline}</h1>
            <p className="mt-4 text-slate-600">{p.about}</p>
            <a href="#contact" className="mt-7 inline-block rounded-xl bg-emerald-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-800">
              Request a callback
            </a>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-emerald-200">
            <div className="absolute inset-0 bg-cover bg-top" style={{ backgroundImage: `url(/providers/${p.id}.jpg)` }} />
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="font-display text-2xl font-bold">Services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.services.map((x) => (
            <div key={x} className="flex items-center gap-3 rounded-2xl border border-slate-200 p-5 shadow-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Check className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium">{x}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <h2 className="font-display text-2xl font-bold">Why choose {p.name}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-emerald-700 shadow-sm">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="font-display text-2xl font-bold">Areas served</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {s.serviceAreas.map((a) => (
            <span key={a} className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800">
              <MapPin className="h-4 w-4" /> {a}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-emerald-900 text-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold">Get in touch</h2>
            <p className="mt-3 text-emerald-100">Leave your details and {p.name} will get back to you.</p>
            <p className="mt-6 flex items-center gap-2 text-sm text-emerald-100">
              <MapPin className="h-4 w-4" /> {p.area}, {p.city}
            </p>
            {s.phone && <p className="mt-2 text-sm text-emerald-100">Phone: {s.phone}</p>}
          </div>
          <div className="rounded-3xl bg-white p-6 text-slate-900">
            <CallbackForm name={p.name} />
          </div>
        </div>
      </section>
    </div>
  );
}
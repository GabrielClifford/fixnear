import type { ElementType } from 'react';
import {
  ArrowRight, Briefcase, Calendar, MapPin, MessageCircle, Phone, ShieldCheck, Wallet, Wrench, Zap,
} from 'lucide-react';
import CallbackForm from '@/components/CallbackForm';
import { ThemeProps } from '@/data/sites';

function waLink(phone: string | undefined, text: string) {
  if (!phone) return null;
  const d = phone.replace(/\D/g, '');
  const n = d.startsWith('234') ? d : d.startsWith('0') ? `234${d.slice(1)}` : d;
  return `https://wa.me/${n}?text=${encodeURIComponent(text)}`;
}

export default function SparkTheme({ p, s }: ThemeProps) {
  const photo = s.photoUrl || `/providers/${p.id}.jpg`;
  const side = s.gallery?.[0] || photo;
  const wa = waLink(s.phone, `Hello ${p.name}, I'd like to book your services.`);
  const areas = s.serviceAreas.slice(0, 3);

  const trust: { icon: ElementType; title: string; text: string }[] = [];
  if (p.years > 0) trust.push({ icon: Briefcase, title: `${p.years}+ years experience`, text: `Working as a ${p.trade.toLowerCase()}` });
  if (areas.length) trust.push({ icon: MapPin, title: `${p.area} & nearby areas`, text: areas.join(', ') });
  if (p.priceFrom > 0) trust.push({ icon: Wallet, title: `From ₦${p.priceFrom.toLocaleString('en-NG')}`, text: 'Final price agreed first' });
  if (p.verified) trust.push({ icon: ShieldCheck, title: 'Verified professional', text: 'Identity and skills checked' });
  else if (s.phone) trust.push({ icon: Phone, title: 'Call or WhatsApp', text: s.phone });

  const stats = [
    { n: p.years > 0 ? `${p.years}+` : '', label: 'Years experience' },
    { n: s.services.length ? String(s.services.length) : '', label: 'Services' },
    { n: s.serviceAreas.length ? String(s.serviceAreas.length) : '', label: 'Areas served' },
    { n: s.gallery?.length ? String(s.gallery.length) : '', label: 'Project photos' },
  ].filter((x) => x.n);

  return (
    <div className="bg-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <div className="flex min-w-0 items-center gap-2">
            <Zap className="h-8 w-8 shrink-0 fill-yellow-400 text-yellow-400" />
            <div className="min-w-0 leading-tight">
              <p className="font-display truncate text-lg font-bold">{p.name}</p>
              <p className="truncate text-[11px] text-slate-400">{p.trade}</p>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            <a href="#services" className="hover:text-yellow-400">Services</a>
            <a href="#projects" className="hover:text-yellow-400">Projects</a>
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </nav>
          {wa ? (
            <a href={wa} target="_blank" rel="noreferrer" className="flex shrink-0 items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black transition hover:bg-yellow-300">
              <MessageCircle className="h-4 w-4" /> <span className="hidden sm:inline">Chat on WhatsApp</span><span className="sm:hidden">WhatsApp</span>
            </a>
          ) : (
            <a href="#contact" className="shrink-0 rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black transition hover:bg-yellow-300">
              Get a callback
            </a>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-full bg-cover bg-center opacity-50 md:w-3/5 md:opacity-90" style={{ backgroundImage: `url(${photo})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/20 md:via-black/70" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-yellow-400">
            {p.trade} · {p.area}
          </p>
          <h1 className="font-display mt-4 max-w-xl text-4xl font-bold leading-[1.05] md:text-6xl">
            Professional <span className="text-yellow-400">{p.trade} Services</span> in {p.area}, {p.city}
          </h1>
          {s.tagline && <p className="mt-5 max-w-md text-base text-slate-200">{s.tagline}</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 text-sm font-bold text-black transition hover:bg-yellow-300">
              <Calendar className="h-4 w-4" /> Book a Service <ArrowRight className="h-4 w-4" />
            </a>
            {wa && (
              <a href={wa} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/70 px-6 py-3.5 text-sm font-bold transition hover:bg-white hover:text-black">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            )}
          </div>

          {trust.length > 0 && (
            <div className="mt-12 grid max-w-3xl grid-cols-2 gap-5 md:grid-cols-4">
              {trust.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-6 w-6 shrink-0 text-yellow-400" />
                  <div>
                    <p className="text-xs font-semibold">{title}</p>
                    <p className="mt-0.5 text-[11px] text-slate-400">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Services */}
      {s.services.length > 0 && (
        <section id="services" className="bg-white px-5 py-16 text-slate-900">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">Our services</p>
            <h2 className="font-display mt-2 text-3xl font-bold">What we do</h2>
            <p className="mt-1 text-sm text-slate-500">{p.trade} services in {p.area} and nearby areas.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.services.map((x) => (
                <a key={x} href="#contact" className="group rounded-2xl bg-zinc-950 p-5 text-white transition hover:-translate-y-0.5 hover:shadow-xl">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                    <Wrench className="h-6 w-6" />
                  </span>
                  <h3 className="font-display mt-4 text-base font-semibold">{x}</h3>
                  <p className="mt-4 flex items-center gap-1 text-xs font-semibold text-yellow-400">
                    Get a quote <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About + stats */}
      <section id="about" className="bg-white px-5 pb-16 text-slate-900">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl bg-zinc-950 text-white md:grid-cols-[1fr_2fr]">
          <div className="relative h-56 bg-cover bg-center md:h-auto" style={{ backgroundImage: `url(${side})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-950/70" />
          </div>
          <div className="p-6 md:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-yellow-400">About {p.name}</p>
            <h2 className="font-display mt-2 text-2xl font-bold">
              Quality work, <span className="text-yellow-400">done right.</span>
            </h2>
            {p.about && <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">{p.about}</p>}
            {stats.length > 0 && (
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4">
                {stats.map((x) => (
                  <div key={x.label}>
                    <p className="font-display text-2xl font-bold text-yellow-400">{x.n}</p>
                    <p className="mt-1 text-xs text-slate-400">{x.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects */}
      {s.gallery && s.gallery.length > 0 && (
        <section id="projects" className="bg-white px-5 pb-16 text-slate-900">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">Our work</p>
            <h2 className="font-display mt-2 text-3xl font-bold">Recent projects</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {s.gallery.map((src) => (
                <div key={src} className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                  <img src={src} alt={`${p.name} project`} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Areas */}
      {s.serviceAreas.length > 0 && (
        <section className="bg-white px-5 pb-16 text-slate-900">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-2xl font-bold">Areas served</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {s.serviceAreas.map((a) => (
                <span key={a} className="flex items-center gap-1.5 rounded-full bg-zinc-950 px-4 py-2 text-sm text-yellow-400">
                  <MapPin className="h-4 w-4" /> {a}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="contact" className="bg-yellow-400 px-5 py-16 text-black">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">Ready to book {p.name}?</h2>
            <p className="mt-3 font-medium">Leave your details and we&apos;ll get back to you.</p>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold">
              <MapPin className="h-4 w-4" /> {p.area}, {p.city}
            </p>
            {s.phone && (
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold">
                <Phone className="h-4 w-4" /> {s.phone}
              </p>
            )}
            {wa && (
              <a href={wa} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-yellow-400 transition hover:bg-zinc-800">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            )}
          </div>
          <div className="rounded-3xl bg-white p-6">
            <CallbackForm name={p.name} businessId={s.businessId} />
          </div>
        </div>
      </section>
    </div>
  );
}
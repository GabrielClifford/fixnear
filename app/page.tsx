import Link from 'next/link';
import {
  Search, Zap, Droplets, Fuel, Smartphone, Scissors, Footprints, PaintRoller,
  ShieldCheck, MessageCircle, ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProviderCard from '@/components/ProviderCard';
import { providers, trades, areas } from '@/data/providers';

const tradeIcons: Record<string, React.ElementType> = {
  Electrician: Zap,
  Plumber: Droplets,
  'Generator Repair': Fuel,
  'Phone Repair': Smartphone,
  Tailor: Scissors,
  Cobbler: Footprints,
  Painter: PaintRoller,
};

const topRated = [...providers].sort((a, b) => b.rating - a.rating).slice(0, 6);

const steps = [
  { icon: Search, title: 'Search', text: 'Choose the service you need and your area in Port Harcourt.' },
  { icon: ShieldCheck, title: 'Compare', text: 'Check ratings, experience, prices and the verified badge.' },
  { icon: MessageCircle, title: 'Contact', text: 'Reach the artisan directly and agree the job and price.' },
];

const field =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none focus:border-teal-500';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 to-[#f6faf9] px-5 pb-20 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-700">
            Port Harcourt
          </p>
          <h1 className="font-display mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            Find trusted artisans <span className="text-teal-600">near you</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-slate-600">
            Electricians, plumbers, generator repairers, tailors, cobblers and phone repair technicians, all in one place.
          </p>

          <form
            action="/providers"
            className="mx-auto mt-10 grid max-w-3xl gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg sm:grid-cols-3"
          >
            <select name="trade" defaultValue="" className={field}>
              <option value="">All services</option>
              {trades.map((t) => <option key={t}>{t}</option>)}
            </select>
            <select name="area" defaultValue="" className={field}>
              <option value="">All areas</option>
              {areas.map((a) => <option key={a}>{a}</option>)}
            </select>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              <Search className="h-4 w-4" /> Search
            </button>
          </form>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-2xl font-semibold text-slate-900">Popular services</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {trades.map((t) => {
            const Icon = tradeIcons[t] ?? Search;
            return (
              <Link
                key={t}
                href={`/providers?trade=${encodeURIComponent(t)}`}
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center text-sm font-medium text-slate-700 transition hover:border-teal-500 hover:text-teal-700 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Icon className="h-6 w-6" />
                </span>
                {t}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Top rated */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold text-slate-900">Top rated near you</h2>
          <Link href="/providers" className="hidden items-center gap-1 text-sm font-semibold text-teal-700 hover:underline sm:flex">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topRated.map((p) => <ProviderCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-3xl font-semibold text-slate-900">How FixNear works</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600 text-white">
                  <Icon className="h-7 w-7" />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-teal-600">Step {i + 1}</p>
                <h3 className="font-display mt-1 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
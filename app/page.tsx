import Link from 'next/link';
import {
  Search, MapPin, Zap, Droplets, Fuel, Smartphone, Scissors, Footprints, PaintRoller,
  Wrench, ShieldCheck, Clock, Star, Wallet, User, MessageCircle, BadgeCheck, ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProviderCard from '@/components/ProviderCard';
import { providers, trades, areas } from '@/data/providers';

const services: { label: string; trade?: string; icon: React.ElementType; tone: string }[] = [
  { label: 'Electrical Repairs', trade: 'Electrician', icon: Zap, tone: 'bg-violet-100 text-violet-600' },
  { label: 'Plumbing Services', trade: 'Plumber', icon: Droplets, tone: 'bg-blue-100 text-blue-600' },
  { label: 'Generator Repair', trade: 'Generator Repair', icon: Fuel, tone: 'bg-emerald-100 text-emerald-600' },
  { label: 'Phone Repair', trade: 'Phone Repair', icon: Smartphone, tone: 'bg-orange-100 text-orange-600' },
  { label: 'Tailoring', trade: 'Tailor', icon: Scissors, tone: 'bg-pink-100 text-pink-600' },
  { label: 'Cobbler & Shoe Repair', trade: 'Cobbler', icon: Footprints, tone: 'bg-amber-100 text-amber-600' },
  { label: 'Painting Services', trade: 'Painter', icon: PaintRoller, tone: 'bg-teal-100 text-teal-600' },
  { label: 'More Services', icon: Wrench, tone: 'bg-indigo-100 text-indigo-600' },
];

const reasons = [
  { icon: ShieldCheck, title: 'Verified Professionals', text: 'We check identity and skills before listing.' },
  { icon: Clock, title: 'Quick Contact', text: 'Find a professional and reach them in minutes.' },
  { icon: Star, title: 'Real Reviews', text: 'See what other customers have to say.' },
  { icon: Wallet, title: 'Fair Prices', text: 'See starting prices up front and agree the job directly.' },
];

const steps = [
  { icon: Search, title: 'Search', text: 'Tell us what service you need and your area.' },
  { icon: User, title: 'Choose', text: 'Compare professionals, read reviews and check prices.' },
  { icon: MessageCircle, title: 'Contact', text: 'Reach the professional and agree a time and price.' },
  { icon: BadgeCheck, title: 'Get It Done', text: 'Relax while the professional handles the rest.' },
];

const popular = ['Plumber', 'Electrician', 'Generator Repair', 'Phone Repair'];
const featured = [...providers].sort((a, b) => b.rating - a.rating).slice(0, 4);

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50/80 to-white pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-8 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
              <MapPin className="h-3.5 w-3.5 text-emerald-700" /> Your Local Service Marketplace
            </span>
            <h1 className="font-display mt-5 text-4xl font-bold leading-[1.1] text-slate-900 md:text-5xl">
              Find Trusted Professionals for Every Job, Near You
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-600 md:text-base">
              From plumbing and electrical repairs to tailoring, phone repair and more, FixNear connects you with
              reliable professionals in Port Harcourt.
            </p>

            <form
              action="/providers"
              className="mt-8 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg sm:flex-row sm:items-center"
            >
              <div className="flex flex-1 items-center gap-2 px-3">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  name="q"
                  list="services-list"
                  placeholder="What service do you need?"
                  className="w-full py-2.5 text-sm outline-none"
                />
                <datalist id="services-list">
                  {trades.map((t) => <option key={t} value={t} />)}
                </datalist>
              </div>
              <div className="flex items-center gap-2 px-3 sm:border-l sm:border-slate-200">
                <MapPin className="h-4 w-4 text-emerald-700" />
                <select name="area" defaultValue="" className="bg-transparent py-2.5 text-sm outline-none">
                  <option value="">All areas</option>
                  {areas.map((a) => <option key={a}>{a}</option>)}
                </select>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                <Search className="h-4 w-4" /> Search
              </button>
            </form>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-medium text-slate-700">Popular searches:</span>
              {popular.map((t) => (
                <Link
                  key={t}
                  href={`/providers?q=${encodeURIComponent(t)}`}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-600 transition hover:border-emerald-600 hover:text-emerald-700"
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>

          {/* Hero visual. Add your own photo at public/images/hero.jpg, or leave it for the green panel. */}
          <div className="relative mx-auto h-72 w-full max-w-lg overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-900 lg:h-[26rem]">
            <Wrench className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 text-white/15" />
            <img src="/images/hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
            <p className="font-display absolute right-5 top-5 text-right text-xl italic leading-snug text-white drop-shadow">
              Get it done<br />with FixNear
            </p>
            <div className="absolute bottom-4 right-4 flex items-start gap-3 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur">
              <ShieldCheck className="h-8 w-8 text-emerald-700" />
              <div>
                <p className="text-sm font-semibold text-slate-900">Verified Professionals</p>
                <p className="text-xs text-slate-500">Checked before listing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-semibold text-slate-900">Popular Services</h2>
          <Link href="/providers" className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-emerald-700">
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {services.map(({ label, trade, icon: Icon, tone }) => (
            <Link
              key={label}
              href={trade ? `/providers?trade=${encodeURIComponent(trade)}` : '/providers'}
              className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-center text-xs font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-full ${tone}`}>
                <Icon className="h-6 w-6" />
              </span>
              {label}
            </Link>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section id="why" className="mx-auto max-w-6xl px-5 py-4">
        <div className="grid gap-8 rounded-3xl bg-emerald-50 p-8 lg:grid-cols-[1fr_2fr] lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Why choose FixNear</p>
            <h2 className="font-display mt-3 text-3xl font-bold text-slate-900">Reliable. Convenient. Local.</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              We make it easy to find skilled professionals who deliver quality work, on time and at fair prices.
            </p>
            <Link
              href="/providers"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-emerald-700 shadow-sm">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-display text-2xl font-semibold text-slate-900">How FixNear Works</h2>
        <p className="mt-1 text-sm text-slate-500">Getting the help you need is simple.</p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="flex items-start gap-4">
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow">
                <Icon className="h-6 w-6" />
                <span className="absolute -left-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">
                  {i + 1}
                </span>
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured professionals */}
      <section id="professionals" className="mx-auto max-w-6xl px-5 pb-14">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-slate-900">Featured Professionals</h2>
            <p className="mt-1 text-sm text-slate-500">Top-rated and trusted in your area.</p>
          </div>
          <Link href="/providers" className="hidden items-center gap-1 text-sm font-medium text-slate-500 hover:text-emerald-700 sm:flex">
            View All Professionals <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => <ProviderCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-gradient-to-r from-emerald-900 to-emerald-700 p-8 text-white md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15">
              <MapPin className="h-6 w-6" />
            </span>
            <div>
              <h2 className="font-display text-xl font-semibold">Need a service? We&apos;re just a click away.</h2>
              <p className="mt-1 text-sm text-emerald-100">Find reliable professionals in your area today.</p>
            </div>
          </div>
          <Link
            href="/providers"
            className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-50"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
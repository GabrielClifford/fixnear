import { Suspense } from 'react';
import Link from 'next/link';
import {
  ArrowRight, BarChart3, Briefcase, Building2, Check, ChevronDown, Globe, HeartPulse, Images, Inbox,
  LayoutTemplate, Rocket, ShoppingCart, SlidersHorizontal, Smartphone, UserPlus, Utensils, Wrench,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingPlans from '@/components/PricingPlans';
import RecentSites from '@/components/RecentSites';
import RealResults from '@/components/RealResults';
import TestimonialForm from "@/components/TestimonialForm";
<TestimonialForm />

const industries: {
  label: string; text: string; icon: React.ElementType; tone: string; live?: boolean; note?: string;
}[] = [
  { label: 'Service Businesses', text: 'Electricians, plumbers, mechanics, tailors, painters and more.', icon: Wrench, tone: 'bg-blue-100 text-blue-600', live: true, note: '3 templates' },
  { label: 'Restaurants & Hospitality', text: 'Restaurants, cafés, hotels, event venues.', icon: Utensils, tone: 'bg-rose-100 text-rose-500' },
  { label: 'Ecommerce Stores', text: 'Sell your products online with ease.', icon: ShoppingCart, tone: 'bg-emerald-100 text-emerald-600' },
  { label: 'Real Estate', text: 'Property listings, agencies, brokers.', icon: Building2, tone: 'bg-violet-100 text-violet-600' },
  { label: 'Professional Services', text: 'Law firms, accounting, consultants, agencies.', icon: Briefcase, tone: 'bg-teal-100 text-teal-600' },
  { label: 'Health & Wellness', text: 'Clinics, pharmacies, fitness, beauty, etc.', icon: HeartPulse, tone: 'bg-red-100 text-red-500' },
];

const templates = [
  { name: 'Spark', kind: 'Service Business · Black & yellow · Bold', href: '/s/bright-spark-electricals', photo: '/providers/bright-spark-electricals.jpg', line: 'Safe, tidy electrical work for your home and shop.' },
  { name: 'Classic', kind: 'Service Business · Clean · Trustworthy', href: '/s/steady-flow-plumbing', photo: '/providers/steady-flow-plumbing.jpg', line: 'Leaks fixed fast, pipes done right.' },
  { name: 'Bold', kind: 'Service Business · Dark · Powerful', href: '/s/gen-fix-masters', photo: '/providers/gen-fix-masters.jpg', line: 'Get your generator running again, today.' },
];

const steps = [
  { icon: UserPlus, title: 'Sign Up', text: 'Create your free account in minutes.' },
  { icon: LayoutTemplate, title: 'Choose a Template', text: 'Pick a design that fits your business.' },
  { icon: SlidersHorizontal, title: 'Customize', text: 'Add your content, images and business details.' },
  { icon: Rocket, title: 'Publish', text: 'Your website goes live. Start getting customers!' },
];

const features: { icon: React.ElementType; title: string; text: string }[] = [
  { icon: LayoutTemplate, title: 'Ready-made templates', text: 'Professional, mobile-friendly designs. Switch themes any time without losing your content.' },
  { icon: Inbox, title: 'Customer enquiries', text: 'Customers contact you through your website, and you see every enquiry in your dashboard.' },
  { icon: BarChart3, title: 'Visitor stats', text: 'See how many people visit your website and which channel they came from.' },
  { icon: Images, title: 'Photo gallery', text: 'Show off your best work with a main photo and project photos.' },
  { icon: Smartphone, title: 'Mobile friendly', text: 'Your website looks great on every phone, tablet and computer.' },
  { icon: Globe, title: 'Your own web address', text: 'Every website gets its own link. Custom domains are planned for a paid plan.' },
];

const faqs = [
  { q: 'Which kinds of business can use FixNear?', a: 'Service businesses, such as electricians, plumbers, mechanics, tailors and painters, are supported now. Restaurants, shops, real estate, professional services and wellness businesses are coming next.' },
  { q: 'Do I need coding skills to use FixNear?', a: 'No. You fill in a simple form with your business details and photos, and FixNear builds your website for you.' },
  { q: 'How long does it take to get my website live?', a: 'You can have it live in a few minutes: create your account, fill in your business details, add photos and publish.' },
  { q: 'Can I change my template later?', a: 'Yes. You can switch themes from your dashboard at any time, and your information and photos stay the same.' },
  { q: 'Is there a free plan?', a: 'While we launch, you can build and publish your website for free. Paid plans start when billing opens.' },
  { q: 'Do I get my own domain name?', a: 'Your website has its own link now. Connecting your own domain, like yourname.com, is planned for a paid plan.' },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050b18] pt-16 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(37,99,235,0.28),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-2 lg:pb-24">
          <div>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
            >
              <span className="rounded bg-blue-600 px-1.5 py-0.5 text-[10px] font-bold">NEW</span>
              Launch your business online in minutes <ArrowRight className="h-3 w-3" />
            </Link>
            <h1 className="font-display mt-6 text-4xl font-bold leading-[1.08] md:text-6xl">
              Professional Websites for <span className="text-blue-500">Every Business</span>
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-slate-300 md:text-base">
              FixNear helps you create a professional website in minutes, with ready-made templates and
              everything you need to get online. No coding required.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/signup"
                className="rounded-lg bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Create Your Website Now
              </Link>
              <Link
                href="/#templates"
                className="rounded-lg border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Templates
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-300">
              {['No coding required', 'Mobile-ready templates', 'Free to start'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600">
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Laptop and phone mock */}
          <div className="relative mx-auto w-full max-w-xl pb-8">
            <p className="font-display absolute -top-6 right-0 hidden text-right text-sm italic leading-snug text-slate-300 lg:block">
              Beautiful websites<br />for every industry
            </p>
            <div className="rounded-t-2xl border-[6px] border-slate-700 bg-black">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: 'url(/providers/bright-spark-electricals.jpg)' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                <div className="relative flex h-full flex-col p-4 sm:p-6">
                  <div className="flex items-center justify-between text-[9px] text-slate-300 sm:text-[10px]">
                    <span className="font-semibold text-white">Bright Spark Electricals</span>
                    <span>Services · Projects · Contact</span>
                  </div>
                  <div className="my-auto max-w-[55%]">
                    <p className="font-display text-base font-bold leading-tight sm:text-2xl">
                      Professional <span className="text-yellow-400">Electrician Services</span> in Choba
                    </p>
                    <span className="mt-3 inline-block rounded-full bg-yellow-400 px-3 py-1 text-[9px] font-bold text-black sm:text-[10px]">
                      Book a Service
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mx-4 h-3 rounded-b-2xl bg-gradient-to-b from-slate-300 to-slate-500" />

            <div className="absolute -bottom-2 -right-1 w-24 rounded-[1.6rem] border-[5px] border-slate-800 bg-black p-1 shadow-2xl sm:w-32">
              <div className="relative aspect-[9/17] overflow-hidden rounded-[1.2rem] bg-zinc-950">
                <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: 'url(/providers/bright-spark-electricals.jpg)' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
                <div className="relative p-2.5">
                  <p className="text-[7px] font-semibold">Bright Spark</p>
                  <p className="font-display mt-8 text-[11px] font-bold leading-tight">Safe, Tidy Electrical Work</p>
                  <span className="mt-2 inline-block rounded-full bg-yellow-400 px-2 py-0.5 text-[7px] font-bold text-black">
                    Book a Service
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">Example website</p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-block rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                Choose your industry
              </span>
              <h2 className="font-display mt-4 text-3xl font-bold text-slate-900">
                Built for <span className="text-blue-600">Every Type of Business</span>
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-500">
                Whether you&apos;re a local artisan or a growing brand, FixNear is built to get you online and
                help you stand out.
              </p>
            </div>
            <Link href="/#templates" className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
              View templates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {industries.map(({ label, text, icon: Icon, tone, live, note }) => {
              const inner = (
                <>
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${tone}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display mt-4 text-sm font-semibold text-slate-900">{label}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{text}</p>
                  {live ? (
                    <p className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
                      {note} <ArrowRight className="h-3.5 w-3.5" />
                    </p>
                  ) : (
                    <span className="mt-4 inline-block rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
                      Coming soon
                    </span>
                  )}
                </>
              );
              return live ? (
                <Link
                  key={label}
                  href="/signup"
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
                >
                  {inner}
                </Link>
              ) : (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 opacity-80">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="bg-[#07142b] px-5 py-16 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_2.2fr]">
          <div>
            <span className="inline-block rounded border border-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-300">
              Templates
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold leading-tight">
              Beautiful Designs for <span className="text-blue-500">Real Businesses</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Choose from professionally designed templates and customize them to match your brand. Every
              template is mobile-ready.
            </p>
            <Link
              href="/s/bright-spark-electricals"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-blue-50"
            >
              Try the templates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex snap-x gap-4 overflow-x-auto pb-3">
            {templates.map((t) => (
              <Link
                key={t.name}
                href={t.href}
                className="group w-64 shrink-0 snap-start overflow-hidden rounded-xl bg-white text-slate-900"
              >
                <div className="relative h-40 overflow-hidden bg-slate-900">
                  <div className="absolute inset-0 bg-cover bg-center opacity-80 transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${t.photo})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <p className="font-display absolute inset-x-4 bottom-4 text-sm font-semibold leading-snug text-white">{t.line}</p>
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="mt-1 text-xs text-slate-500">{t.kind}</p>
                  <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-blue-600">
                    View demo <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </div>
              </Link>
            ))}
            <div className="flex w-64 shrink-0 snap-start flex-col justify-center rounded-xl border border-dashed border-white/25 p-6 text-sm text-slate-300">
              <p className="font-display font-semibold text-white">More templates coming</p>
              <p className="mt-2 text-xs leading-relaxed">
                Restaurants, shops, real estate, professional services and wellness templates are on the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <span className="inline-block rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
            Simple process
          </span>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold text-slate-900">
                Get Your Website in <span className="text-blue-600">4 Easy Steps</span>
              </h2>
              <p className="mt-3 max-w-md text-sm text-slate-500">
                From signup to launch, FixNear makes it simple to get your business online.
              </p>
            </div>
            <p className="font-display text-sm italic text-slate-400">Takes just a few minutes</p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="absolute right-5 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="font-display mt-5 font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real websites (hides itself until someone has published) */}
            <Suspense fallback={null}>
        <RealResults />
      </Suspense>

      {/* Features */}
      <section id="features" className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-slate-900">
            Everything you need to <span className="text-blue-600">get online</span>
          </h2>
          <p className="mt-2 text-sm text-slate-500">Simple tools that help you look professional and get more customers.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold text-slate-900">Simple, Transparent Pricing</h2>
          <p className="mt-2 text-sm text-slate-500">Choose the plan that fits your needs. No hidden fees.</p>
          <PricingPlans />
          <p className="mt-6 text-center text-xs text-slate-500">
            Billing opens soon. Until then, you can build and publish your website for free.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <p className="mt-2 text-sm text-slate-500">Can&apos;t find what you&apos;re looking for? We&apos;re here to help.</p>
          <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-slate-900">
                  {f.q}
                  <ChevronDown className="h-4 w-4 shrink-0 text-slate-400 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-[#050b18] to-blue-900 px-6 py-12 text-center text-white">
          <h2 className="font-display text-2xl font-bold md:text-3xl">Ready to Build Your Website?</h2>
          <p className="mt-2 text-sm text-slate-300">Be one of the first businesses to get online with FixNear.</p>
          <Link
            href="/signup"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Create Your Website Now <ArrowRight className="h-4 w-4" />
          </Link>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-slate-300">
            {['No coding required', 'Hosting included', 'Mobile-ready templates', 'Free while we launch'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600">
                  <Check className="h-3 w-3 text-white" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
import Link from 'next/link';
import {
  ArrowRight, Check, ChevronDown, ClipboardList, Droplets, Globe, Hammer, Images, Inbox,
  LayoutTemplate, Briefcase, PaintRoller, Plus, Scissors, Smartphone, UserPlus, Wrench, Zap,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const templates = [
  { title: 'Electrician Website', href: '/s/bright-spark-electricals', photo: '/providers/bright-spark-electricals.jpg', line: 'Safe, tidy electrical work for your home and shop.' },
  { title: 'Plumber Website', href: '/s/steady-flow-plumbing', photo: '/providers/steady-flow-plumbing.jpg', line: 'Leaks fixed fast, pipes done right.' },
  { title: 'Tailor Website', href: '/s/stitch-and-style', photo: '/providers/stitch-and-style.jpg', line: 'Outfits made to fit you perfectly.' },
];

const steps = [
  { icon: UserPlus, title: 'Create your account', text: 'Choose your trade and enter your business details.' },
  { icon: LayoutTemplate, title: 'Build your website', text: 'Pick a ready-made template. Add your services, photos and location.' },
  { icon: Globe, title: 'Publish and share', text: 'Go live and share your website link with customers.' },
];

const trades = [
  { label: 'Electricians', icon: Zap },
  { label: 'Plumbers', icon: Droplets },
  { label: 'Carpenters', icon: Hammer },
  { label: 'Mechanics', icon: Wrench },
  { label: 'Painters', icon: PaintRoller },
  { label: 'Tailors', icon: Scissors },
];

const features: { icon: React.ElementType; title: string; text: string; soon?: boolean }[] = [
  { icon: LayoutTemplate, title: 'Customizable Templates', text: 'Modern, mobile-friendly designs.' },
  { icon: Inbox, title: 'Customer Enquiries', text: 'Get leads directly through your website.', soon: true },
  { icon: ClipboardList, title: 'Service Management', text: 'Showcase your services and pricing.' },
  { icon: Briefcase, title: 'Business Profile', text: 'Show your experience, contact info and the areas you serve.' },
  { icon: Images, title: 'Portfolio Gallery', text: 'Display your past work and projects.' },
  { icon: Smartphone, title: 'Mobile Friendly', text: 'Your site looks great on every device.' },
];

const plans: { name: string; price: string; popular?: boolean; items: { t: string; soon?: boolean }[] }[] = [
  {
    name: 'Starter',
    price: '10,000',
    items: [{ t: '1 website' }, { t: 'Basic templates' }, { t: 'Photo gallery' }, { t: 'Online support', soon: true }],
  },
  {
    name: 'Professional',
    price: '15,000',
    popular: true,
    items: [{ t: 'Everything in Starter' }, { t: 'Multiple templates' }, { t: 'Advanced features', soon: true }, { t: 'Priority support', soon: true }],
  },
  {
    name: 'Business',
    price: '25,000',
    items: [{ t: 'Everything in Professional' }, { t: 'Analytics & insights', soon: true }, { t: 'Dedicated support', soon: true }],
  },
];

const faqs = [
  { q: 'Do I need coding skills to use FixNear?', a: 'No. You fill in a simple form with your business details and photos, and FixNear builds your website for you.' },
  { q: 'How long does it take to get my website live?', a: 'You can have it live in a few minutes: create your account, fill in your business details, add photos and publish.' },
  { q: 'Can I change my template later?', a: 'Yes. You can switch themes from your dashboard at any time, and your information and photos stay the same.' },
  { q: 'Is there a free plan?', a: 'While we launch, you can build and publish your website for free. Paid plans start when billing opens.' },
  { q: 'Do I get my own domain name?', a: 'Your website has its own link now. Connecting your own domain, like yourname.com, is planned for a paid plan.' },
];

const Soon = () => (
  <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">Soon</span>
);

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071427] pt-16 text-white">
        <div
          className="absolute inset-y-0 right-0 hidden w-3/5 bg-cover bg-center opacity-50 lg:block"
          style={{ backgroundImage: 'url(/providers/rivers-power-works.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071427] via-[#071427]/90 to-[#071427]/30" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-block rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-200">
              Websites for Artisans &amp; Service Professionals
            </span>
            <h1 className="font-display mt-5 text-4xl font-bold leading-[1.1] md:text-5xl">
              Turn Your Skills Into a Professional <span className="text-blue-400">Online Business.</span>
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-300 md:text-base">
              FixNear helps artisans create their own professional websites, showcase their work, and connect
              with customers looking for trusted service providers near them.
            </p>
            <Link
              href="/signup"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Create Your Free Website <ArrowRight className="h-4 w-4" />
            </Link>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-300">
              {['No coding required', 'Ready-made templates', 'Get discovered locally'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600">
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Browser mock */}
          <div className="mx-auto w-full max-w-md lg:ml-auto">
            <div className="rounded-2xl bg-white p-2 shadow-2xl">
              <div className="flex items-center gap-1.5 px-2 pb-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <div className="relative overflow-hidden rounded-xl bg-slate-900 text-white">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60"
                  style={{ backgroundImage: 'url(/providers/bright-spark-electricals.jpg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
                <div className="relative p-5">
                  <div className="flex items-center justify-between text-[10px] text-slate-300">
                    <span className="font-semibold text-white">Bright Spark Electricals</span>
                    <span>Services · About · Contact</span>
                  </div>
                  <p className="font-display mt-10 max-w-[12rem] text-xl font-bold leading-tight">
                    Safe, Tidy Electrical Work for Your Home and Shop
                  </p>
                  <span className="mt-4 inline-block rounded bg-blue-600 px-3 py-1.5 text-[10px] font-semibold">
                    Get a Quote
                  </span>
                  <div className="h-16" />
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-300">Example: Electrician Website</p>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="bg-slate-50 px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_2.5fr]">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900">See what you can build</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Get a professional website tailored to your trade. Showcase your services and past work, and
              make it easy for customers to contact you.
            </p>
            <Link
              href="/s/bright-spark-electricals"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Try the templates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {templates.map((t) => (
              <Link key={t.title} href={t.href} className="group block">
                <div className="relative h-44 overflow-hidden rounded-2xl border border-slate-200 bg-slate-900">
                  <div className="absolute inset-0 bg-cover bg-center opacity-70 transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${t.photo})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  <p className="font-display absolute inset-x-4 bottom-4 text-sm font-semibold leading-snug text-white">{t.line}</p>
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-900">{t.title}</p>
                <p className="mt-1 flex items-center gap-1 text-xs font-medium text-blue-600">
                  View Demo <ArrowRight className="h-3.5 w-3.5" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-5 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900">How FixNear Works</h2>
            <p className="mt-2 text-sm text-slate-500">Get your website up and running in a few simple steps.</p>
            <div className="mt-8 space-y-6">
              {steps.map(({ icon: Icon, title, text }, i) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">{i + 1}. {title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Builder mock */}
          <div className="rounded-2xl border border-slate-200 bg-slate-100 p-3 shadow-lg">
            <div className="rounded-xl bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Build your website</p>
              <div className="mt-4 space-y-3 text-xs">
                {['Business name', 'Your trade', 'Services you offer'].map((f) => (
                  <div key={f}>
                    <p className="mb-1 text-slate-500">{f}</p>
                    <div className="h-8 rounded-lg border border-slate-200 bg-slate-50" />
                  </div>
                ))}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {['/providers/quickfix-phone-lab.jpg', '/providers/gen-fix-masters.jpg', '/providers/fresh-coat-painters.jpg'].map((src) => (
                    <div key={src} className="aspect-square rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
                  ))}
                </div>
                <div className="flex justify-end pt-2">
                  <span className="rounded-lg bg-blue-600 px-5 py-2 text-xs font-semibold text-white">Publish</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trades */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold text-slate-900">Built for every trade</h2>
          <p className="mt-2 text-sm text-slate-500">If you work with your hands, FixNear is for you.</p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {trades.map(({ label, icon: Icon }) => (
              <Link
                key={label}
                href="/signup"
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
              >
                <Icon className="h-7 w-7 text-blue-600" />
                {label}
              </Link>
            ))}
            <Link
              href="/signup"
              className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
            >
              <Plus className="h-7 w-7 text-blue-600" />
              and more
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-5 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900">Powerful Features for Your Business</h2>
            <p className="mt-2 text-sm text-slate-500">Everything you need to look professional and get more customers.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, text, soon }) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {title}
                      {soon && <Soon />}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard mock */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              <div className="grid grid-cols-[8rem_1fr] text-xs">
                <div className="space-y-1 border-r border-slate-100 bg-slate-50 p-3">
                  <p className="mb-3 flex items-center gap-1.5 font-bold text-slate-900">
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-600 text-white">
                      <Wrench className="h-3 w-3" />
                    </span>
                    FixNear
                  </p>
                  {['Dashboard', 'Website', 'Services', 'Portfolio', 'Enquiries', 'Settings'].map((x, i) => (
                    <p key={x} className={`rounded px-2 py-1.5 ${i === 1 ? 'bg-blue-100 font-semibold text-blue-700' : 'text-slate-500'}`}>
                      {x}
                    </p>
                  ))}
                </div>
                <div className="p-4">
                  <p className="font-semibold text-slate-900">Dashboard</p>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[
                      { l: 'Website status', v: 'Live' },
                      { l: 'Setup progress', v: '100%' },
                      { l: 'Photos', v: '5' },
                    ].map((s) => (
                      <div key={s.l} className="rounded-lg border border-slate-200 p-2">
                        <p className="text-[10px] text-slate-500">{s.l}</p>
                        <p className="font-display mt-1 text-sm font-bold text-slate-900">{s.v}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 font-semibold text-slate-900">Next steps</p>
                  <div className="mt-2 space-y-2">
                    {['Add your business details', 'Add a main photo', 'Publish your website'].map((x) => (
                      <p key={x} className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-slate-600">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600">
                          <Check className="h-3 w-3 text-white" />
                        </span>
                        {x}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-2 text-center text-xs text-slate-400">Example dashboard</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold text-slate-900">Simple, Transparent Pricing</h2>
          <p className="mt-2 text-sm text-slate-500">Choose the plan that fits your needs. No hidden fees.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl bg-white p-6 shadow-sm ${
                  p.popular ? 'border-2 border-blue-600 shadow-lg' : 'border border-slate-200'
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-6 rounded-md bg-blue-600 px-3 py-1 text-[11px] font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-sm font-semibold text-slate-900">{p.name}</h3>
                <p className="font-display mt-2 text-3xl font-bold text-slate-900">
                  ₦{p.price}
                  <span className="text-sm font-normal text-slate-500"> /month</span>
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  {p.items.map((it) => (
                    <li key={it.t} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                      <span>
                        {it.t}
                        {it.soon && <Soon />}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className={`mt-6 block rounded-lg py-3 text-center text-sm font-semibold transition ${
                    p.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">
            Billing opens soon. Until then, you can build and publish your website for free.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
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
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-[#071427] to-blue-900 px-6 py-12 text-center text-white">
          <h2 className="font-display text-2xl font-bold md:text-3xl">Your skills. Your website. Your customers.</h2>
          <p className="mt-2 text-sm text-slate-300">Join FixNear today and take your business to the next level.</p>
          <Link
            href="/signup"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Create Your Free Website <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
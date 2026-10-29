'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

type Plan = { id: string; name: string; price: string; items: { t: string; soon?: boolean }[] };

const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '10,000',
    items: [{ t: '1 website' }, { t: 'Basic templates' }, { t: 'Photo gallery' }, { t: 'Online support', soon: true }],
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '15,000',
    items: [{ t: 'Everything in Starter' }, { t: 'Multiple templates' }, { t: 'Advanced features', soon: true }, { t: 'Priority support', soon: true }],
  },
  {
    id: 'business',
    name: 'Business',
    price: '25,000',
    items: [{ t: 'Everything in Professional' }, { t: 'Analytics & insights', soon: true }, { t: 'Dedicated support', soon: true }],
  },
];

export default function PricingPlans() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {plans.map((p) => {
        const on = selected === p.id;
        return (
          <div
            key={p.id}
            onClick={() => setSelected(p.id)}
            onFocusCapture={() => setSelected(p.id)}
            className={`relative cursor-pointer rounded-2xl border-2 bg-white p-6 transition ${
              on ? 'border-blue-600 shadow-lg' : 'border-slate-200 shadow-sm hover:border-blue-300'
            }`}
          >
            {on && (
              <span className="absolute -top-3 left-6 rounded-md bg-blue-600 px-3 py-1 text-[11px] font-semibold text-white">
                Selected
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
                    {it.soon && (
                      <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                        Soon
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/signup"
              className={`mt-6 block rounded-lg py-3 text-center text-sm font-semibold transition ${
                on
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
            >
              Get Started
            </Link>
          </div>
        );
      })}
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trades } from '@/data/providers';

const field =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-600';

export default function AuthForm({ mode }: { mode: 'login' | 'signup' }) {
  const isSignup = mode === 'signup';
  const [role, setRole] = useState<'customer' | 'artisan'>('customer');
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="font-display text-2xl font-bold text-slate-900">Thanks for your interest</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Accounts are not active yet in this demo. Nothing you typed was saved or sent.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="font-display text-2xl font-bold text-slate-900">
        {isSignup ? 'Create your account' : 'Welcome back'}
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        {isSignup ? 'Join FixNear to find or offer trusted services.' : 'Log in to your FixNear account.'}
      </p>

      {isSignup && (
        <div className="mt-6 grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1 text-sm font-medium">
          {(['customer', 'artisan'] as const).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`rounded-lg py-2.5 transition ${
                role === r ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500'
              }`}
            >
              {r === 'customer' ? 'I need a service' : 'I offer a service'}
            </button>
          ))}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDone(true);
        }}
        className="mt-6 space-y-3"
      >
        {isSignup && <input required name="name" placeholder="Full name" className={field} />}
        <input required type="email" name="email" placeholder="Email address" className={field} />
        {isSignup && <input required name="phone" placeholder="Phone number" className={field} />}
        {isSignup && role === 'artisan' && (
          <select required name="trade" defaultValue="" className={field}>
            <option value="" disabled>What service do you offer?</option>
            {trades.map((t) => <option key={t}>{t}</option>)}
          </select>
        )}
        <input required type="password" name="password" placeholder="Password" className={field} />

        <button
          type="submit"
          className="w-full rounded-xl bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          {isSignup ? 'Create account' : 'Log in'}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        {isSignup ? 'Already have an account? ' : "Don't have an account? "}
        <Link
          href={isSignup ? '/login' : '/signup'}
          className="font-semibold text-emerald-700 hover:underline"
        >
          {isSignup ? 'Log in' : 'Sign up'}
        </Link>
      </p>
    </div>
  );
}
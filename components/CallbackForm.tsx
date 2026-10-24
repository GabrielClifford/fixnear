'use client';

import { useState } from 'react';

export default function CallbackForm({ name }: { name: string }) {
  const [sent, setSent] = useState(false);
  const field =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-600';

  if (sent) {
    return (
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 text-sm">
        <p className="font-display text-lg font-semibold text-slate-900">Request received</p>
        <p className="mt-1 text-slate-600">{name} will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-3"
    >
      <input required name="name" placeholder="Your name" className={field} />
      <input required name="phone" placeholder="Phone number" className={field} />
      <textarea
        name="message"
        rows={3}
        defaultValue={`Hello, I'd like to book ${name}.`}
        className={field}
      />
      <button
        type="submit"
        className="w-full rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Request a callback
      </button>
    </form>
  );
}
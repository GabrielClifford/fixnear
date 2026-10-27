'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

type Day = { day: string; visits: number; uniques: number };
type Totals = { visits: number; uniques: number };
type TotalsRow = { period: string; visits: number | string; uniques: number | string };
type DayRow = { day: string; visits: number | string; uniques: number | string };
type State =
  | { kind: 'loading' }
  | { kind: 'none' }
  | { kind: 'error' }
  | { kind: 'ready'; published: boolean; days: Day[]; current: Totals; previous: Totals };

const card = 'rounded-2xl border border-slate-200 bg-white shadow-sm';

const fmtDay = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });

function niceMax(m: number) {
  if (m <= 4) return 4;
  const pow = Math.pow(10, Math.floor(Math.log10(m)));
  const n = m / pow;
  const step = n <= 2 ? 2 : n <= 4 ? 4 : n <= 6 ? 6 : n <= 8 ? 8 : 10;
  return step * pow;
}

function percentChange(now: number, before: number): number | null {
  if (before === 0) return null;
  return Math.round(((now - before) / before) * 100);
}

function Change({ pct }: { pct: number | null }) {
  if (pct === null) return <p className="mt-1 text-xs text-slate-400">No earlier data</p>;
  const up = pct >= 0;
  return (
    <p className={`mt-1 text-xs font-medium ${up ? 'text-blue-600' : 'text-red-600'}`}>
      {up ? '↑' : '↓'} {Math.abs(pct)}%
    </p>
  );
}

function Chart({ days }: { days: Day[] }) {
  const W = 700;
  const H = 200;
  const padX = 10;
  const padY = 14;
  const max = niceMax(Math.max(0, ...days.map((d) => d.visits)));
  const x = (i: number) => padX + (i * (W - padX * 2)) / Math.max(1, days.length - 1);
  const y = (v: number) => H - padY - (v / max) * (H - padY * 2);

  let line = `M ${x(0)} ${y(days[0].visits)}`;
  for (let i = 1; i < days.length; i++) {
    const cx = (x(i - 1) + x(i)) / 2;
    line += ` C ${cx} ${y(days[i - 1].visits)}, ${cx} ${y(days[i].visits)}, ${x(i)} ${y(days[i].visits)}`;
  }
  const area = `${line} L ${x(days.length - 1)} ${H - padY} L ${x(0)} ${H - padY} Z`;
  const ticks = [max, max / 2, 0];

  return (
    <div>
      <div className="relative">
        {ticks.map((t) => (
          <span
            key={t}
            className="absolute left-0 -translate-y-1/2 text-[10px] text-slate-400"
            style={{ top: `${(y(t) / H) * 100}%` }}
          >
            {Number.isInteger(t) ? t : t.toFixed(1)}
          </span>
        ))}
        <svg viewBox={`0 0 ${W} ${H}`} className="ml-8 block w-[calc(100%-2rem)]" role="img" aria-label="Website visits, last 7 days">
          <defs>
            <linearGradient id="visitsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </linearGradient>
          </defs>
          {ticks.map((t) => (
            <line key={t} x1={0} x2={W} y1={y(t)} y2={y(t)} stroke="#e2e8f0" strokeWidth={1} />
          ))}
          <path d={area} fill="url(#visitsFill)" />
          <path d={line} fill="none" stroke="#2563eb" strokeWidth={2.5} strokeLinecap="round" />
          {days.map((d, i) => (
            <circle key={d.day} cx={x(i)} cy={y(d.visits)} r={4} fill="white" stroke="#2563eb" strokeWidth={2}>
              <title>{`${fmtDay(d.day)}: ${d.visits} visit${d.visits === 1 ? '' : 's'}`}</title>
            </circle>
          ))}
        </svg>
      </div>
      <div className="ml-8 mt-2 flex justify-between text-[10px] text-slate-400">
        {days.map((d, i) => (
          <span key={d.day} className={i % 2 === 1 ? 'hidden sm:block' : ''}>
            {fmtDay(d.day)}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function VisitsOverview({ userId, enquiries }: { userId: string; enquiries?: number }) {
  const [state, setState] = useState<State>({ kind: 'loading' });

  useEffect(() => {
    const supabase = createClient();
    (async () => {
      const { data: biz } = await supabase
        .from('businesses')
        .select('id,published')
        .eq('owner_id', userId)
        .maybeSingle();
      if (!biz) {
        setState({ kind: 'none' });
        return;
      }

      const [daysRes, totalsRes] = await Promise.all([
        supabase.rpc('visit_stats', { p_business: biz.id, p_days: 7 }),
        supabase.rpc('visit_totals', { p_business: biz.id }),
      ]);
      if (daysRes.error || totalsRes.error) {
        setState({ kind: 'error' });
        return;
      }

      const days = ((daysRes.data ?? []) as DayRow[]).map((r) => ({
        day: String(r.day),
        visits: Number(r.visits),
        uniques: Number(r.uniques),
      }));
      const rows = (totalsRes.data ?? []) as TotalsRow[];
      const pick = (p: string): Totals => {
        const r = rows.find((x) => x.period === p);
        return { visits: Number(r?.visits ?? 0), uniques: Number(r?.uniques ?? 0) };
      };
      setState({
        kind: 'ready',
        published: biz.published,
        days,
        current: pick('current'),
        previous: pick('previous'),
      });
    })();
  }, [userId]);

  if (state.kind === 'loading') {
    return <div className={`${card} p-6 text-sm text-slate-400`}>Loading your visits...</div>;
  }
  if (state.kind === 'none') {
    return (
      <div className={`${card} p-6`}>
        <h2 className="font-display text-lg font-semibold text-slate-900">Website visits</h2>
        <p className="mt-2 text-sm text-slate-500">Create and publish your website to start seeing visits here.</p>
      </div>
    );
  }
  if (state.kind === 'error') {
    return (
      <div className={`${card} p-6 text-sm text-slate-500`}>
        We couldn&apos;t load your visits right now. Please refresh the page.
      </div>
    );
  }

  const { days, current, previous, published } = state;
  const today = days[days.length - 1]?.visits ?? 0;
  const noVisits = current.visits === 0;
  const range = days.length ? `${fmtDay(days[0].day)} – ${fmtDay(days[days.length - 1].day)}` : '';

  const stats = [
    { label: 'Visits', value: current.visits.toLocaleString(), note: <Change pct={percentChange(current.visits, previous.visits)} /> },
    { label: 'Unique visitors', value: current.uniques.toLocaleString(), note: <Change pct={percentChange(current.uniques, previous.uniques)} /> },
    { label: 'Visits today', value: today.toLocaleString(), note: <p className="mt-1 text-xs text-slate-400">Nigeria time</p> },
        { label: 'Enquiries', value: enquiries === undefined ? '-' : enquiries.toLocaleString(), note: <p className="mt-1 text-xs text-slate-400">Last 7 days</p> },
  ];

  return (
    <div className={card}>
      <div className="flex flex-wrap items-center justify-between gap-2 px-5 pt-5">
        <h2 className="font-display text-lg font-semibold text-slate-900">Website visits</h2>
        <span className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600">
          Last 7 days · {range}
        </span>
      </div>

      <div className="grid grid-cols-2 divide-slate-100 p-2 md:grid-cols-4 md:divide-x">
        {stats.map((s) => (
          <div key={s.label} className="p-4">
            <p className="text-sm text-slate-500">{s.label}</p>
            <p className="font-display mt-1 text-2xl font-bold text-slate-900">{s.value}</p>
            {s.note}
          </div>
        ))}
      </div>

      <div className="px-5 pb-5">
        <Chart days={days} />
        {noVisits && (
          <p className="mt-4 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600">
            {published
              ? 'No visits yet. Share your website link on WhatsApp and Instagram to get your first visitors.'
              : 'Your website is not published yet. Publish it, then share your link to start getting visits.'}
          </p>
        )}
      </div>
    </div>
  );
}
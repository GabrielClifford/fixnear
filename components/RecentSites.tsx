import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

type Row = { slug: string; name: string; trade: string; area: string; photo_url: string | null };

export default async function RecentSites() {
  let rows: Row[] = [];
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    );
    const { data } = await supabase
      .from('businesses')
      .select('slug,name,trade,area,photo_url')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(3);
    rows = (data ?? []) as Row[];
  } catch {
    // If the database can't be reached, simply hide this section
  }

  if (rows.length === 0) return null;

  return (
    <section className="bg-slate-50 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-2xl font-bold text-slate-900 md:text-3xl">
          Websites built with <span className="text-blue-600">Xenon</span>
        </h2>
        <p className="mt-2 text-sm text-slate-500">Real businesses that launched their website on Xenon.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((r) => (
            <Link
              key={r.slug}
              href={`/b/${r.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-200">
                {r.photo_url && (
                  <div className="h-full bg-cover bg-center" style={{ backgroundImage: `url(${r.photo_url})` }} />
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-slate-900">{r.name}</h3>
                <p className="mt-1 text-sm text-slate-500">
                  {r.trade} · {r.area}
                </p>
                <p className="mt-3 flex items-center gap-1 text-xs font-semibold text-blue-600">
                  Visit website <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
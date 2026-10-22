import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import ArtisanSite from '@/components/ArtisanSite';
import type { Provider } from '@/data/providers';
import type { SiteSettings } from '@/data/sites';

async function Site({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );

  const { data: b } = await supabase
    .from('businesses')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();
  if (!b) notFound();

  const p: Provider = {
    id: b.slug,
    name: b.name,
    trade: b.trade,
    area: b.area,
    city: b.city,
    rating: 0,
    reviews: 0,
    years: b.years ?? 0,
    verified: false,
    priceFrom: b.price_from ?? 0,
    about: b.about ?? '',
  };
  const s: SiteSettings = {
    tagline: b.tagline ?? '',
    services: b.services ?? [],
    serviceAreas: b.service_areas ?? [],
    theme: b.theme === 'bold' ? 'bold' : 'classic',
    phone: b.phone ?? undefined,
  };

  return <ArtisanSite p={p} s={s} sample={false} />;
}

export default function BusinessPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<div className="py-40 text-center text-sm text-slate-400">Loading website...</div>}>
      <Site params={params} />
    </Suspense>
  );
}
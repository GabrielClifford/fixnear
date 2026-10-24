
import { Suspense } from 'react';
import { connection } from 'next/server';
import { notFound } from 'next/navigation';

import ArtisanSite from '@/components/ArtisanSite';
import { providers } from '@/data/providers';
import { siteSettings, defaultSettings } from '@/data/sites';

type ArtisanSitePageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return providers.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: ArtisanSitePageProps) {
  const { id } = await params;
  const p = providers.find((x) => x.id === id);

  return {
    title: p ? `${p.name} | ${p.trade} in ${p.area}` : 'Not found',
  };
}

export default function ArtisanSitePage({
  params,
}: ArtisanSitePageProps) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading artisan website...
        </div>
      }
    >
      <ArtisanSiteContent params={params} />
    </Suspense>
  );
}

async function ArtisanSiteContent({ params }: ArtisanSitePageProps) {
  await connection();

  const { id } = await params;
  const p = providers.find((x) => x.id === id);

  if (!p) {
    notFound();
  }

  const s = siteSettings[p.id] ?? defaultSettings;

  return <ArtisanSite p={p} s={s} />;
}

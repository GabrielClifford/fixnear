import { notFound } from 'next/navigation';
import ArtisanSite from '@/components/ArtisanSite';
import { providers } from '@/data/providers';
import { siteSettings, defaultSettings } from '@/data/sites';

export function generateStaticParams() {
  return providers.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = providers.find((x) => x.id === id);
  return { title: p ? `${p.name} | ${p.trade} in ${p.area}` : 'Not found' };
}

export default async function ArtisanSitePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = providers.find((x) => x.id === id);
  if (!p) notFound();

  const s = siteSettings[p.id] ?? defaultSettings;
  return <ArtisanSite p={p} s={s} />;
}
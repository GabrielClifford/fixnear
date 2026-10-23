import ProviderCard from '@/components/ProviderCard';
import { getDirectory } from '@/lib/directory';

export default async function FeaturedProfessionals() {
  const all = await getDirectory();
  const featured = [...all]
    .sort((a, b) => Number(!!b.real) - Number(!!a.real) || b.rating - a.rating)
    .slice(0, 4);

  return (
    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {featured.map((p) => <ProviderCard key={p.id} p={p} />)}
    </div>
  );
}
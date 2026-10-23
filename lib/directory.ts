import { createClient } from '@supabase/supabase-js';
import { Provider, providers as samples } from '@/data/providers';

// Set this to false once enough real artisans have joined
export const SHOW_SAMPLES = true;

type Row = {
  slug: string;
  name: string;
  trade: string;
  area: string;
  city: string;
  about: string | null;
  years: number | null;
  price_from: number | null;
  photo_url: string | null;
};

export async function getDirectory(): Promise<Provider[]> {
  let real: Provider[] = [];

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    );
    const { data } = await supabase
      .from('businesses')
      .select('slug,name,trade,area,city,about,years,price_from,photo_url')
      .eq('published', true)
      .order('created_at', { ascending: false });

    real = ((data ?? []) as Row[]).map((b) => ({
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
      real: true,
      photoUrl: b.photo_url,
    }));
  } catch {
    // If the database can't be reached, still show the sample listings
  }

  return SHOW_SAMPLES ? [...real, ...samples] : real;
}
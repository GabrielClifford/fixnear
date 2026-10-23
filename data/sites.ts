import { Provider } from './providers';

export type ThemeName = 'classic' | 'bold';

export type SiteSettings = {
  tagline: string;
  services: string[];
  serviceAreas: string[];
  theme: ThemeName;
  phone?: string;
  photoUrl?: string;
  gallery?: string[];
};

export type ThemeProps = { p: Provider; s: SiteSettings };

export const themes: { id: ThemeName; label: string }[] = [
  { id: 'classic', label: 'Classic' },
  { id: 'bold', label: 'Bold' },
];

export const defaultSettings: SiteSettings = {
  tagline: 'Reliable service you can trust.',
  services: [],
  serviceAreas: [],
  theme: 'classic',
};

// Sample site settings, one entry per provider id.
export const siteSettings: Record<string, SiteSettings> = {
  'bright-spark-electricals': { tagline: 'Safe, tidy electrical work for your home and shop.', services: ['House wiring and rewiring', 'Fault finding and repairs', 'Socket and light installation', 'Prepaid meter fixes', 'Distribution board upgrades'], serviceAreas: ['Choba', 'Rumuokoro', 'Eliozu'], theme: 'classic' },
  'rivers-power-works': { tagline: 'Power solutions that keep your lights on.', services: ['Rewiring', 'Inverter installation', 'Distribution board upgrades', 'Shop and office wiring'], serviceAreas: ['GRA', 'Rumuola', 'Trans Amadi'], theme: 'bold' },
  'steady-flow-plumbing': { tagline: 'Leaks fixed fast, pipes done right.', services: ['Leak repairs', 'Pipe fitting', 'Water tank installation', 'Borehole connections', 'Bathroom fittings'], serviceAreas: ['Rumuola', 'GRA', 'Rumuokoro'], theme: 'classic' },
  'clearway-plumbers': { tagline: 'Clear drains. Fresh water. No stress.', services: ['Blocked drains', 'Toilet and sink repairs', 'New plumbing installations', 'Water heater fitting'], serviceAreas: ['Eliozu', 'Choba'], theme: 'bold' },
  'gen-fix-masters': { tagline: 'Get your generator running again, today.', services: ['Petrol generator servicing', 'Diesel generator servicing', 'Carburettor repair', 'AVR and alternator faults', 'Oil and filter changes'], serviceAreas: ['Trans Amadi', 'Rumuola', 'GRA'], theme: 'bold' },
  'powerup-gen-care': { tagline: 'Reliable generator care, at your location.', services: ['Routine servicing', 'Oil changes', 'Emergency repairs', 'Fuel system cleaning'], serviceAreas: ['Rumuokoro', 'Eliozu', 'Choba'], theme: 'classic' },
  'quickfix-phone-lab': { tagline: 'Cracked screen? Dead battery? Fixed while you wait.', services: ['Screen replacement', 'Battery swaps', 'Charging port repair', 'Software fixes', 'Water damage checks'], serviceAreas: ['Choba', 'Diobu'], theme: 'bold' },
  'techcare-mobile': { tagline: 'Honest phone and tablet repairs.', services: ['Phone repairs', 'Tablet repairs', 'Screen guards', 'Unlocking services'], serviceAreas: ['Diobu', 'Trans Amadi'], theme: 'classic' },
  'stitch-and-style': { tagline: 'Outfits made to fit you perfectly.', services: ['Native wear', 'Suits and corporate outfits', 'Wedding outfits', 'Alterations'], serviceAreas: ['Woji', 'GRA', 'Trans Amadi'], theme: 'classic' },
  'perfect-fit-tailors': { tagline: 'Sharp tailoring for every occasion.', services: ['Custom tailoring for men', 'Custom tailoring for women', 'School and work uniforms', 'Wedding outfits'], serviceAreas: ['GRA', 'Rumuola'], theme: 'bold' },
  'sole-revival-cobblers': { tagline: 'Give your shoes a second life.', services: ['Shoe repairs', 'Resoling', 'Polishing and shining', 'Bag repairs', 'Zip replacement'], serviceAreas: ['Rumuola', 'Diobu'], theme: 'classic' },
  'fresh-coat-painters': { tagline: 'A fresh coat that lasts.', services: ['Interior painting', 'Exterior painting', 'Screeding', 'Finishing for homes and offices'], serviceAreas: ['Eliozu', 'Choba', 'Rumuokoro'], theme: 'bold' },
};
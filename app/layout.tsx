import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'FixNear | Find Trusted Artisans Near You',
  description:
    'Find electricians, plumbers, generator repairers, tailors, cobblers and phone repair technicians near you in Port Harcourt.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
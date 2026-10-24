'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { User } from '@supabase/supabase-js';
import { BarChart3, Globe, Home, Inbox, LogOut, MapPin, Settings } from 'lucide-react';
import BusinessForm from '@/components/BusinessForm';
import DashboardOverview, { type Tab } from '@/components/DashboardOverview';
import { createClient } from '@/lib/supabase/client';

type Meta = { full_name?: string; phone?: string; role?: string; trade?: string };
type Item = { id: string; label: string; icon: React.ElementType; soon?: boolean; artisanOnly?: boolean };

const allItems: Item[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'website', label: 'My website', icon: Globe, artisanOnly: true },
  { id: 'inbox', label: 'Enquiries', icon: Inbox, soon: true, artisanOnly: true },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, soon: true, artisanOnly: true },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [tab, setTab] = useState<Tab>('home');

  useEffect(() => {
    createClient()
      .auth.getUser()
      .then(({ data }) => {
        if (!data.user) router.replace('/login');
        else setUser(data.user);
      });
  }, [router]);

  async function logout() {
    await createClient().auth.signOut();
    router.push('/');
    router.refresh();
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 text-sm text-slate-400">
        Loading your account...
      </div>
    );
  }

  const meta = (user.user_metadata ?? {}) as Meta;
  const isArtisan = meta.role === 'artisan';
  const name = meta.full_name || user.email || 'Account';
  const initials = name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  const items = allItems.filter((i) => isArtisan || !i.artisanOnly);

  function renderNav(vertical: boolean) {
    return items.map(({ id, label, icon: Icon, soon }) => {
      const active = tab === id;
      const base = `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
        vertical ? 'w-full' : 'shrink-0 whitespace-nowrap'
      }`;
      if (soon) {
        return (
          <span key={id} className={`${base} cursor-not-allowed text-slate-400`}>
            <Icon className="h-5 w-5" /> {label}
            <span className="ml-auto rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
              Soon
            </span>
          </span>
        );
      }
      return (
        <button
          key={id}
          onClick={() => setTab(id as Tab)}
          className={`${base} ${active ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'}`}
        >
          <Icon className="h-5 w-5" /> {label}
        </button>
      );
    });
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="sticky top-0 z-40 flex items-center justify-between bg-slate-950 px-4 py-3 text-white sm:px-6">
        <Link href="/" className="font-display flex items-center gap-2 text-lg font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600">
            <MapPin className="h-4 w-4" />
          </span>
          Fix<span className="text-emerald-400">Near</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/" className="hidden text-sm text-slate-300 hover:text-white sm:block">
            View site
          </Link>
          <div className="hidden text-right leading-tight sm:block">
            <p className="text-sm font-medium">{name}</p>
            <p className="text-xs text-slate-400">{isArtisan ? 'Artisan' : 'Customer'}</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-sm font-semibold">
            {initials}
          </span>
        </div>
      </header>

      <div className="md:flex">
        {/* Desktop sidebar */}
        <aside className="hidden min-h-[calc(100vh-56px)] w-60 shrink-0 flex-col border-r border-slate-200 bg-white p-3 md:flex">
          <nav className="space-y-1">{renderNav(true)}</nav>
          <button
            onClick={logout}
            className="mt-auto flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
          >
            <LogOut className="h-5 w-5" /> Log out
          </button>
        </aside>

        {/* Phone tabs */}
        <nav className="flex gap-1 overflow-x-auto border-b border-slate-200 bg-white px-3 py-2 md:hidden">
          {renderNav(false)}
        </nav>

        <main className="min-w-0 flex-1 p-4 sm:p-8">
          <div className="mx-auto max-w-5xl">
            {tab === 'home' && <DashboardOverview user={user} isArtisan={isArtisan} onNavigate={setTab} />}

            {tab === 'website' && isArtisan && (
              <div className="mx-auto max-w-3xl">
                <BusinessForm user={user} />
              </div>
            )}

            {tab === 'settings' && (
              <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h1 className="font-display text-2xl font-bold text-slate-900">Settings</h1>
                <dl className="mt-6 space-y-4 text-sm">
                  <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                    <dt className="text-slate-500">Name</dt>
                    <dd className="font-medium">{meta.full_name || '-'}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                    <dt className="text-slate-500">Email</dt>
                    <dd className="break-all font-medium">{user.email}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                    <dt className="text-slate-500">Phone</dt>
                    <dd className="font-medium">{meta.phone || '-'}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-100 pb-3">
                    <dt className="text-slate-500">Account type</dt>
                    <dd className="font-medium">{isArtisan ? `Artisan${meta.trade ? ` · ${meta.trade}` : ''}` : 'Customer'}</dd>
                  </div>
                </dl>
                <button
                  onClick={logout}
                  className="mt-6 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
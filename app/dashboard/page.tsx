'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { User } from '@supabase/supabase-js';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BusinessForm from '@/components/BusinessForm';
import { createClient } from '@/lib/supabase/client';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

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

  const meta = (user?.user_metadata ?? {}) as { full_name?: string; role?: string };

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32">
        {!user ? (
          <p className="text-center text-sm text-slate-400">Loading your account...</p>
        ) : (
          <>
            <h1 className="font-display text-3xl font-bold text-slate-900">
              Welcome{meta.full_name ? `, ${meta.full_name}` : ''}
            </h1>
            <p className="mb-8 mt-2 text-slate-600">Signed in as {user.email}</p>

            {meta.role === 'artisan' ? (
              <BusinessForm user={user} />
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-slate-600">
                  Your account is ready. You can browse professionals and contact them from their profiles.
                </p>
              </div>
            )}

            <button
              onClick={logout}
              className="mt-6 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Log out
            </button>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
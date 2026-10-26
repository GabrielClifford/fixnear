'use client';

import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function VisitTracker({ businessId }: { businessId: string }) {
  useEffect(() => {
    (async () => {
      try {
        const supabase = createClient();

        // Visits from logged-in FixNear accounts (including the owner) are not counted
        const { data } = await supabase.auth.getSession();
        if (data.session) return;

        let visitor = localStorage.getItem('fixnear_vid');
        if (!visitor) {
          visitor = crypto.randomUUID();
          localStorage.setItem('fixnear_vid', visitor);
        }

        // Count each visitor once per site every 30 minutes
        const key = `fixnear_seen_${businessId}`;
        const last = Number(localStorage.getItem(key) || 0);
        if (Date.now() - last < 30 * 60 * 1000) return;
        localStorage.setItem(key, String(Date.now()));

        await supabase.from('site_visits').insert({ business_id: businessId, visitor_id: visitor });
      } catch {
        // Tracking must never break the website
      }
    })();
  }, [businessId]);

  return null;
}
'use client';

import Script from 'next/script';
import { useSyncExternalStore, useEffect, useState } from 'react';

const emptySubscribe = () => () => {};

export default function Analytics({ measurementId }: { measurementId: string }) {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [hasConsent, setHasConsent] = useState(false);
  
  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem('spendwise_cookie_consent');
      if (consent === 'true') {
        setHasConsent(true);
      }
    };

    // Check initially
    checkConsent();

    // Listen for custom event when banner is accepted
    window.addEventListener('cookieConsentGiven', checkConsent);
    return () => window.removeEventListener('cookieConsentGiven', checkConsent);
  }, []);

  if (!mounted || !hasConsent || !measurementId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

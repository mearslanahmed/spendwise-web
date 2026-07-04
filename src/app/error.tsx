'use client';

import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 bg-rose-500/10 rounded-full flex items-center justify-center mb-8 border border-rose-500/20 shadow-[0_0_40px_rgba(225,29,72,0.15)]">
        <ShieldAlert className="text-rose-500" size={40} />
      </div>
      <h1 className="text-4xl font-bold mb-4 tracking-tight">Something went wrong</h1>
      <p className="text-zinc-400 text-lg mb-10 max-w-md font-light">
        We've encountered an unexpected error. Our engineering team has been notified and is looking into it.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-zinc-800 border border-zinc-700 text-white px-6 py-3 rounded-xl font-medium hover:bg-zinc-700 transition-colors"
        >
          Try again
        </button>
        <Link 
          href="/"
          className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-rose-600 transition-colors shadow-[0_0_15px_rgba(225,29,72,0.3)]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

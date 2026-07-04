import Link from 'next/link';
import { SearchX } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-8 border border-zinc-800 shadow-xl">
        <SearchX className="text-zinc-500" size={40} />
      </div>
      <h1 className="text-4xl font-bold mb-4 tracking-tight">Page not found</h1>
      <p className="text-zinc-400 text-lg mb-10 max-w-md font-light">
        The page you are looking for doesn&apos;t exist or has been moved to another location.
      </p>
      <Link 
        href="/"
        className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-rose-600 transition-colors shadow-[0_0_15px_rgba(225,29,72,0.3)]"
      >
        Return Home
      </Link>
    </div>
  );
}

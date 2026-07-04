import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img src="/icon.png" alt="SpendWise Logo" width={32} height={32} className="rounded-lg object-cover" />
          <span className="text-xl font-bold tracking-tight text-white">SpendWise</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400 font-medium">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-white transition-colors">Contact Support</Link>
        </div>
        
        <div className="text-sm text-zinc-600 font-medium">
          &copy; {new Date().getFullYear()} SpendWise. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

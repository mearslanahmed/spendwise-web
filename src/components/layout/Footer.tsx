import Link from 'next/link';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-md pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <ShieldCheck className="text-primary" size={28} />
              <span className="text-xl font-bold">SpendWise</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              The smartest way to track your expenses, analyze your budget with AI, and achieve financial freedom. Built with bank-level security.
            </p>
            <div className="flex gap-4">
              <a href="#download" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                Get the App <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-primary transition-colors">How it Works</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SpendWise. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for your financial freedom.</p>
        </div>
      </div>
    </footer>
  );
}

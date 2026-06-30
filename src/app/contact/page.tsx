import { Metadata } from 'next';
import { Mail, UserX } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | SpendWise',
  description: 'Get in touch with the SpendWise team for support and inquiries.',
};

export default function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Contact Us</h1>
        <p className="text-xl text-muted-foreground">
          We're here to help you achieve financial freedom. Get in touch with our support team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-zinc-900/50 p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-colors group">
          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
            <Mail className="text-primary" size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Email Support</h2>
          <p className="text-muted-foreground mb-6">
            For all general inquiries, technical support, and feedback, please email us directly. We aim to respond within 24 hours.
          </p>
          <a 
            href="mailto:spendwiseapp@gmail.com" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            spendwiseapp@gmail.com
          </a>
        </div>

        <div className="bg-zinc-900/50 p-8 rounded-3xl border border-border/50 hover:border-red-500/50 transition-colors group">
          <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
            <UserX className="text-red-500" size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Account Deletion</h2>
          <p className="text-muted-foreground mb-6">
            If you wish to delete your SpendWise account and all associated data without using the app, please send us an email with the subject <strong>"Account Deletion Request"</strong>.
          </p>
          <a 
            href="mailto:spendwiseapp@gmail.com?subject=Account%20Deletion%20Request" 
            className="inline-flex items-center gap-2 text-red-500 font-semibold hover:underline"
          >
            Request Deletion
          </a>
        </div>
      </div>
    </div>
  );
}

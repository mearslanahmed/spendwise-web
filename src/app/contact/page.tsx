import { Metadata } from 'next';
import { Mail, UserX } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | SpendWise',
  description: 'Get in touch with the SpendWise team for support and inquiries.',
};

export default function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Contact Us</h1>
        <p className="text-xl text-muted-foreground">
          We&apos;re here to help you achieve financial freedom. Get in touch with our support team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-zinc-900/50 p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-colors group">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">General Support</h2>
              <a 
                href="mailto:spendwiseoffical@gmail.com" 
                className="text-primary hover:underline block mt-1"
              >
                spendwiseoffical@gmail.com
              </a>
            </div>
          </div>
          <p className="text-muted-foreground">
            For all general inquiries, technical support, and feedback, please email us directly. We aim to respond within 24 hours.
          </p>
        </div>

        <div className="bg-zinc-900/50 p-8 rounded-3xl border border-border/50 hover:border-red-500/50 transition-colors group">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
              <UserX className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Data & Privacy Requests</h2>
              <a 
                href="mailto:spendwiseoffical@gmail.com?subject=Account%20Deletion%20Request" 
                className="text-primary hover:underline block mt-1"
              >
                spendwiseoffical@gmail.com
              </a>
            </div>
          </div>
          <p className="text-muted-foreground">
            If you wish to delete your SpendWise account and all associated data without using the app, please send us an email with the subject <strong>&quot;Account Deletion Request&quot;</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

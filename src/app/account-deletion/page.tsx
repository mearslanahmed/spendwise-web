"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function AccountDeletion() {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = encodeURIComponent("Account Deletion Request");
    const body = encodeURIComponent(`Hello,\n\nI would like to request the complete deletion of my SpendWise account and all associated data.\n\nMy SpendWise account email is: ${email}\nReason for leaving: ${reason || 'Prefer not to say'}\n\nPlease confirm when the deletion is complete.\n\nThank you.`);
    
    window.location.href = `mailto:spendwiseofficial@gmail.com?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
      <div className="mb-12 border-b border-border/40 pb-8">
        <h1 className="text-4xl font-extrabold mb-4 tracking-tight text-foreground">Account Deletion Request</h1>
        <p className="text-muted-foreground text-lg">Manage your data and privacy.</p>
      </div>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">How to Delete Your Account</h2>
          <p className="mb-4">
            If you still have the SpendWise app installed, the fastest and easiest way to delete your account is directly within the app:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-6 text-muted-foreground">
            <li>Open the SpendWise app.</li>
            <li>Go to the <strong className="text-foreground">Profile</strong> tab.</li>
            <li>Tap on <strong className="text-foreground">Settings</strong>.</li>
            <li>Select <strong className="text-foreground">Delete Account</strong> and confirm your choice.</li>
          </ol>
          
          <p className="mb-4 text-foreground font-semibold">
            Uninstalled the app?
          </p>
          <p className="mb-6">
            If you no longer have access to the app, you can request full deletion of your account and all associated data (including transactions, budgets, and receipt images) by submitting the form below.
          </p>

          <div className="bg-muted/30 p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Submit a Deletion Request</h3>
            {submitted ? (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-emerald-500 font-medium">
                Your request has been initiated. If your email client did not open automatically, please manually send an email to <strong>spendwiseofficial@gmail.com</strong> from the address associated with your account.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Account Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@example.com"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    We will use this to verify and delete your data.
                  </p>
                </div>
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-foreground mb-1">
                    Reason for leaving (Optional)
                  </label>
                  <textarea
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                    placeholder="Is there anything we could have done better?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-rose-600 text-white shadow hover:bg-rose-700 h-10 px-6 py-2 w-full sm:w-auto mt-2"
                >
                  Submit Deletion Request
                </button>
              </form>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">What happens when your account is deleted?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your authentication record is permanently removed.</li>
            <li>All your financial data (transactions, wallets, budgets) is wiped from our databases.</li>
            <li>All your uploaded receipt images are permanently deleted from our secure storage.</li>
            <li><strong>This action is irreversible.</strong> You cannot recover your data once deleted.</li>
          </ul>
        </section>

        <div className="pt-8">
          <Link href="/privacy" className="text-primary hover:underline">
            Read our full Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

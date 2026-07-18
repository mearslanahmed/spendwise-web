import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Account Deletion Request | SpendWise',
  description: 'Request deletion of your SpendWise account and associated data.',
};

export default function AccountDeletion() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
      <div className="mb-12 border-b border-border/40 pb-8">
        <h1 className="text-4xl font-extrabold mb-4 tracking-tight">Account Deletion Request</h1>
        <p className="text-muted-foreground text-lg">Manage your data and privacy.</p>
      </div>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">How to Delete Your Account</h2>
          <p className="mb-4">
            If you still have the SpendWise app installed, the fastest and easiest way to delete your account is directly within the app:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Open the SpendWise app.</li>
            <li>Go to the <strong>Profile</strong> tab.</li>
            <li>Tap on <strong>Settings</strong>.</li>
            <li>Select <strong>Delete Account</strong> and confirm your choice.</li>
          </ol>
          
          <p className="mb-4 text-foreground font-semibold">
            Uninstalled the app?
          </p>
          <p className="mb-6">
            If you no longer have access to the app, you can request full deletion of your account and all associated data (including transactions, budgets, and receipt images) by sending an email request.
          </p>

          <div className="bg-muted/30 p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-2 text-foreground">Email Deletion Request</h3>
            <p className="mb-4">
              Click the button below to generate a pre-formatted email. Please ensure you send this email from the address associated with your SpendWise account so we can verify your identity.
            </p>
            <a 
              href="mailto:spendwiseofficial@gmail.com?subject=Account%20Deletion%20Request&body=Hello%2C%0A%0AI%20would%20like%20to%20request%20the%20complete%20deletion%20of%20my%20SpendWise%20account%20and%20all%20associated%20data.%0A%0AMy%20SpendWise%20account%20email%20is%3A%20%5BInsert%20Email%20Here%5D%0A%0AThank%20you."
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 py-2"
            >
              Request Deletion via Email
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">What happens when your account is deleted?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your authentication record is permanently removed.</li>
            <li>All your financial data (transactions, wallets, budgets) is wiped from our databases.</li>
            <li>All your uploaded receipt images are permanently deleted from our storage.</li>
            <li>This action is irreversible. You cannot recover your data once deleted.</li>
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

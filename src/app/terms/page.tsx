import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | SpendWise',
  description: 'Terms of Service for SpendWise App',
};

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="prose prose-invert prose-emerald max-w-none">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last updated: June 30, 2026</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            By accessing or using the SpendWise mobile application and website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the Service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            SpendWise is an AI-powered financial tracking application that allows users to log expenses, track budgets, and receive automated financial insights. We do not act as a financial advisor, broker, or bank. The insights provided by our AI are for informational purposes only.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            In no event shall SpendWise, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. Changes</h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about these Terms, please contact us at <a href="mailto:spendwiseapp@gmail.com" className="text-primary hover:underline">spendwiseapp@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

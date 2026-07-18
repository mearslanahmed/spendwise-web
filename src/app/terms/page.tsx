import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | SpendWise',
  description: 'Terms of Service and legal agreements for the SpendWise application.',
};

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <div className="mb-12 border-b border-border/40 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Terms of Service</h1>
        <p className="text-muted-foreground text-lg">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      </div>

      <div className="space-y-12 text-muted-foreground leading-relaxed prose prose-invert prose-p:text-muted-foreground prose-headings:text-foreground">
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
          <p>
            By downloading, accessing, or using the SpendWise mobile application and website (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">2. Description of Service</h2>
          <p>
            SpendWise is a personal finance management tool that allows users to track expenses, manage budgets, and receive automated insights. The Service utilizes Artificial Intelligence (AI) to process receipt images and provide general financial observations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-rose-500">3. AI Financial Advisor & No Professional Advice Disclaimer</h2>
          <div className="p-6 bg-rose-500/10 border border-rose-500/20 rounded-lg">
            <p className="mb-4 text-foreground font-semibold">
              SpendWise is NOT a licensed financial advisor, broker, or tax consultant.
            </p>
            <p>
              The &quot;Smart Assistant&quot; and any other AI-generated financial insights, categorizations, or advice provided within the app are strictly for <strong>educational and informational purposes only</strong>. The AI models (including Google Gemini and Groq) may hallucinate, misinterpret data, or provide inaccurate suggestions.
            </p>
            <p className="mt-4">
              <strong>Assumption of Risk:</strong> You agree that you are solely responsible for your financial decisions. You should always consult with a certified financial planner, accountant, or legal counsel before making significant financial moves. SpendWise and its creator shall not be held liable for any financial losses, damages, or missed opportunities resulting from your reliance on the app&apos;s AI features or general calculations.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">4. User Accounts and Data Security</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials. While we use industry-standard security (like Google Firebase Auth), we cannot guarantee absolute security against unauthorized access. You must notify us immediately of any suspected breach of your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">5. Acceptable Use</h2>
          <p className="mb-4">You agree NOT to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reverse engineer, decompile, or attempt to extract the source code of the app.</li>
            <li>Use the service to store illegal, offensive, or strictly regulated data.</li>
            <li>Attempt to bypass our security rules, API rate limits, or Cloudinary image quotas.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">6. Modifications to Service</h2>
          <p>
            We reserve the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">7. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mt-4 font-semibold">
            Email: <a href="mailto:spendwiseofficial@gmail.com" className="text-primary hover:underline">spendwiseofficial@gmail.com</a>
          </p>
        </section>

        <div className="pt-8 mt-12 border-t border-border/40">
          <Link href="/privacy" className="text-primary hover:underline">
            View our Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

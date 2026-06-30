import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SpendWise',
  description: 'Privacy Policy for SpendWise App',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="prose prose-invert prose-emerald max-w-none">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: June 30, 2026</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            SpendWise collects personal information that you voluntarily provide to us when you register on the App, express an interest in obtaining information about us or our products and Services, when you participate in activities on the App, or otherwise when you contact us.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Personal Information:</strong> We collect email addresses; passwords; and other similar information for authentication via Firebase.</li>
            <li><strong>Financial Data:</strong> Transaction data you enter is stored securely to provide you with insights. We do not connect directly to your bank accounts.</li>
            <li><strong>Images:</strong> If you use the receipt scanner, we securely process those images to extract expense data.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use personal information collected via our App for a variety of business purposes described below:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>To facilitate account creation and logon process.</li>
            <li>To provide AI-powered financial advice and analysis based on your data.</li>
            <li>To improve our App, services, and user experience.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. Will Your Information be Shared?</h2>
          <p className="text-muted-foreground leading-relaxed">
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. Specifically, we may use third-party AI services (like Google Gemini or Groq) to process your data and provide financial insights. We ensure these providers maintain strict data privacy standards.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. Security of Your Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use industry-standard security measures (including Firebase Authentication and secure database rules) to protect your personal information. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions or comments about this notice, you may email us at privacy@spendwise-finance.com.
          </p>
        </section>
      </div>
    </div>
  );
}

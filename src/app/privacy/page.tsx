import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SpendWise',
  description: 'Comprehensive Privacy Policy and Data Compliance Declaration for SpendWise.',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
      <div className="mb-12 border-b border-border/40 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Privacy Policy & Data Compliance</h1>
        <p className="text-muted-foreground text-lg">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      </div>

      <div className="space-y-12 text-muted-foreground leading-relaxed prose prose-invert prose-p:text-muted-foreground prose-headings:text-foreground">
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introduction & Proper Declaration</h2>
          <p>
            SpendWise (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and ensuring complete transparency regarding how we handle your personal and financial data. This comprehensive Privacy Policy governs your use of the SpendWise mobile application and website. By using our services, you consent to the data practices described in this statement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">2. Information We Collect</h2>
          <p className="mb-4">We strictly collect only the information necessary to operate SpendWise. The types of data we collect include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Account Information:</strong> Your email address and basic profile information used for secure authentication.</li>
            <li><strong>Financial Data:</strong> Transactions, budgets, and manual expense entries you input into the app.</li>
            <li><strong>Receipt Images:</strong> When you manually attach a picture to a transaction or use the &quot;Smart Scanner&quot;, the image is securely stored in our cloud storage provider (Cloudinary) so it remains permanently attached to your transaction record for your reference.</li>
            <li><strong>Device Permissions:</strong> We request access to your device&apos;s Camera (strictly for capturing receipts) and Notifications (for budget alerts). We do <strong>not</strong> collect background hardware diagnostics, device identifiers, or hidden usage analytics.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">3. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information for the following specific purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>To Provide the Service:</strong> Enabling you to track expenses, manage wallets, and view your historical transactions alongside their attached Cloudinary receipt images.</li>
            <li><strong>AI Processing:</strong> Your transaction data and scanned receipt images are processed using advanced Artificial Intelligence models (primarily Google Gemini, with Groq utilized as a secure fallback system). This allows us to instantly extract totals, categorize expenses, and power the AI financial chat.</li>
            <li><strong>Communication:</strong> Sending you necessary security alerts, account updates, and push notifications for your budget.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Sharing & Third-Party Disclosure</h2>
          <p>
            We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners. We may use third-party service providers (such as cloud hosting and AI API providers) to help us operate our business, provided that these third parties agree to keep this information confidential and secure in compliance with industry-standard data protection protocols.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Retention & Deletion</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. You have the absolute right to request the permanent deletion of your account and all associated data at any time. 
          </p>
          <p className="mt-4">
            <strong>How to delete your data:</strong> You can delete your account directly within the SpendWise app settings. Alternatively, you may submit an out-of-app deletion request by emailing us at <a href="mailto:spendwiseapp@gmail.com" className="text-primary hover:underline">spendwiseapp@gmail.com</a> with the subject &quot;Account Deletion Request&quot;. Upon verification, we will scrub all your personal and financial data from our active databases within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">6. Security & Data Protection Compliance</h2>
          <p>
            We adopt strict data collection, storage, processing practices, and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. Financial data transmitted between your device and our servers is secured using TLS/SSL encryption. While no method of electronic storage is 100% secure, we implement commercially acceptable means to protect your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">7. User Rights (GDPR / CCPA)</h2>
          <p className="mb-4">Depending on your jurisdiction, you may have the following rights regarding your data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Right to Access:</strong> You can request a copy of the personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> You can request that we correct any inaccurate data.</li>
            <li><strong>Right to Erasure (Right to be Forgotten):</strong> You can request the total deletion of your data.</li>
            <li><strong>Right to Restrict Processing:</strong> You can ask us to suspend the processing of your personal data.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">8. Contact Us</h2>
          <p>
            If you have any detailed questions about this Privacy Policy, the practices of this app, or data compliance requests, please contact our Data Protection Officer at:
          </p>
          <p className="mt-4 font-semibold">
            Email: <a href="mailto:spendwiseapp@gmail.com" className="text-primary hover:underline">spendwiseapp@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}

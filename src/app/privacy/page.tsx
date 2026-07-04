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
            SpendWise ("the App") is developed and maintained by an independent individual developer ("I," "me," or "my"). I am committed to protecting your privacy and ensuring complete transparency regarding how I handle your personal and financial data. This comprehensive Privacy Policy governs your use of the SpendWise mobile application and website. By using the services, you consent to the data practices described in this statement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">2. Information Collected</h2>
          <p className="mb-4">I strictly collect only the information necessary to operate SpendWise. The types of data collected include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Account Information:</strong> Your email address and basic profile information used for secure authentication via Google Sign-In and Firebase Authentication.</li>
            <li><strong>Financial Data:</strong> Transactions, budgets, and manual expense entries you input into the app. This data is securely synced and backed up to Google Firebase Firestore to allow you cross-device access and data recovery.</li>
            <li><strong>Receipt Images:</strong> When you manually attach a picture to a transaction or use the "Smart Scanner", the image is securely stored in a cloud storage provider (Cloudinary).</li>
            <li><strong>Device Permissions:</strong> The app requests access to your device's Camera (strictly for capturing receipts) and Notifications (for budget alerts). I do <strong>not</strong> collect background hardware diagnostics, device identifiers, or hidden usage analytics.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">3. How Your Information is Used</h2>
          <p className="mb-4">The collected information is used for the following specific purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>To Provide the Service:</strong> Enabling you to track expenses, manage wallets, and view your historical transactions alongside their attached Cloudinary receipt images across multiple devices via Firebase sync.</li>
            <li><strong>AI Processing:</strong> Your transaction data and scanned receipt images are processed using advanced Artificial Intelligence models (primarily Google Gemini, with Groq utilized as a secure fallback system). This allows the app to instantly extract totals and categorize expenses.</li>
            <li><strong>Communication:</strong> Sending you necessary security alerts, account updates, and push notifications for your budget via Expo Notifications.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Sharing & Third-Party Disclosure</h2>
          <p>
            I do not sell, trade, or rent your personal identification information to others. I use third-party service providers (Google Firebase for database/auth, Cloudinary for image hosting, and Google Gemini/Groq for AI processing) solely to operate the app. These third parties are bound by industry-standard data protection protocols.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Retention & Deletion</h2>
          <p>
            Your personal data is retained only for as long as you keep an active account. You have the absolute right to request the permanent deletion of your account and all associated data from Firebase and Cloudinary at any time. 
          </p>
          <p className="mt-4">
            <strong>How to delete your data:</strong> You can delete your account directly within the SpendWise app settings. Alternatively, you may submit an out-of-app deletion request by emailing <a href="mailto:spendwiseoffical@gmail.com" className="text-primary hover:underline">spendwiseoffical@gmail.com</a> with the subject "Account Deletion Request". Upon verification, all your personal and financial data will be scrubbed from the databases within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">6. Security & Data Protection Compliance</h2>
          <p>
            Financial data transmitted between your device and the servers is secured using TLS/SSL encryption. Data at rest is encrypted by Google Firebase. While no method of electronic storage is 100% secure, commercially acceptable means are implemented to protect your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">7. User Rights (GDPR / CCPA)</h2>
          <p className="mb-4">Depending on your jurisdiction, you may have the following rights regarding your data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Right to Access:</strong> You can request a copy of the personal data held about you.</li>
            <li><strong>Right to Rectification:</strong> You can request correction of any inaccurate data.</li>
            <li><strong>Right to Erasure (Right to be Forgotten):</strong> You can request the total deletion of your data.</li>
            <li><strong>Right to Restrict Processing:</strong> You can ask to suspend the processing of your personal data.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">8. Children's Privacy (COPPA Compliance)</h2>
          <p>
            These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from the servers. If you are a parent or guardian and you are aware that your child has provided personal information, please contact me so that I will be able to do the necessary actions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">9. Contact</h2>
          <p>
            If you have any detailed questions about this Privacy Policy, the practices of this app, or data compliance requests, please contact me at:
          </p>
          <p className="mt-4 font-semibold">
            Email: <a href="mailto:spendwiseoffical@gmail.com" className="text-primary hover:underline">spendwiseoffical@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}

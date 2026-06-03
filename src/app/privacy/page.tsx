import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Destiny',
  description: 'Privacy Policy for Destiny, a habit tracking and personal growth application.',
}

export default function DestinyPrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2">Privacy Policy for Destiny</h1>
      <p className="text-gray-500 mb-8"><strong>Last Updated:</strong> June 3, 2026</p>

      <div className="space-y-8 text-lg">
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Introduction</h2>
          <p className="mb-4">
            Destiny is a habit tracking and personal growth application developed by Everyday Standards. This Privacy Policy explains how we collect, use, and protect your information when you use the Destiny mobile application.
          </p>
          <p>
            By using Destiny, you agree to the practices described in this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Information We Collect</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-2">Account Information</h3>
          <p className="mb-2">When you create an account, we may collect:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Username</li>
            <li>Email address</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-2">User-Provided Information</h3>
          <p className="mb-2">To provide Destiny's features, we may collect information that you voluntarily provide, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Personal goals and aims</li>
            <li>Habits</li>
            <li>Routines</li>
            <li>Tasks</li>
            <li>Progress tracking information</li>
            <li>Notes and reflections</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-2">Technical Information</h3>
          <p className="mb-2">We may automatically collect limited technical information such as:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Device type</li>
            <li>Operating system version</li>
            <li>App version</li>
            <li>Crash reports</li>
            <li>Diagnostic information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">How We Use Your Information</h2>
          <p className="mb-2">We use collected information to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide and maintain the application</li>
            <li>Synchronize your data across devices</li>
            <li>Improve app performance and reliability</li>
            <li>Personalize your experience</li>
            <li>Develop new features</li>
            <li>Respond to support requests</li>
            <li>Protect the security and integrity of the service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Anonymous and Aggregated Data</h2>
          <p className="mb-4">
            We may use anonymized and aggregated information derived from user activity, goals, habits, and app usage patterns to understand how users interact with Destiny and to improve existing features or develop new ones.
          </p>
          <p>
            This information is processed in a way that does not directly identify individual users.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Data Sharing</h2>
          <p className="mb-4">We do not sell, rent, or trade your personal information.</p>
          <p className="mb-2">We may share information only with trusted service providers that help us operate the application, such as:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Authentication providers</li>
            <li>Cloud hosting providers</li>
            <li>Analytics providers</li>
            <li>Crash reporting providers</li>
          </ul>
          <p>
            These providers are required to handle information securely and only for the purposes of providing services to Destiny.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Data Storage and Security</h2>
          <p className="mb-4">
            User data is stored using secure cloud infrastructure and reasonable technical safeguards are implemented to protect information from unauthorized access, disclosure, alteration, or destruction.
          </p>
          <p>
            However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Data Retention</h2>
          <p className="mb-4">
            We retain your information while your account remains active or as necessary to provide the service.
          </p>
          <p>
            If you delete your account or request deletion, we will remove your personal information within a reasonable timeframe unless we are legally required to retain certain information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Account Deletion</h2>
          <p className="mb-4">
            You may request deletion of your account and associated personal data by contacting us at the email address listed below.
          </p>
          <p>
            Upon verification of the request, we will delete your account and associated information within a reasonable timeframe.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Children's Privacy</h2>
          <p className="mb-4">
            Destiny is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
          </p>
          <p>
            If we become aware that a child under 13 has provided personal information, we will take reasonable steps to remove such information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Third-Party Services</h2>
          <p className="mb-4">
            Destiny may use third-party services that assist in providing the application, including authentication, analytics, cloud storage, crash reporting, and related infrastructure services.
          </p>
          <p>
            These third-party services may process information according to their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. Any changes will be reflected by updating the &quot;Last Updated&quot; date above.
          </p>
          <p>
            Continued use of Destiny after any modifications constitutes acceptance of the updated Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Contact Us</h2>
          <p className="mb-4">
            If you have questions, concerns, requests regarding your personal information, or would like to request account deletion, please contact:
          </p>
          <p className="font-semibold">Everyday Standards</p>
          <p>
            Email: <a href="mailto:rmadhithan20012002@gmail.com" className="text-blue-600 hover:underline">rmadhithan20012002@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}

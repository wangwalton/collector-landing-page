import Hero from "@/components/Hero";

const PrivacyPolicyText = () => {
  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-md">
      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Introduction</h2>
        <p>
          Thank you for using Collector! Your privacy is important to us. This
          Privacy Policy explains what information we collect, how we use it,
          and your rights regarding your information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Information We Collect</h2>
        <p>
          When you use our Chrome extension, we may collect the following
          information:
        </p>
        <ul className="list-inside list-disc">
          <li>
            <strong>Email Address</strong>: We collect your default email
            address through Google Authentication when you sign in to the
            extension.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">
          How We Use Your Information
        </h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul className="list-inside list-disc">
          <li>
            <strong>To Provide and Maintain the Service</strong>: We use your
            email address to personalize your experience and to maintain your
            account with us.
          </li>
          <li>
            <strong>To Communicate with You</strong>: We may use your email
            address to send you important notifications and updates about the
            extension.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">
          Information Sharing and Disclosure
        </h2>
        <p>
          We do not share, sell, or disclose your personal information to third
          parties except in the following circumstances:
        </p>
        <ul className="list-inside list-disc">
          <li>
            <strong>With Your Consent</strong>: We may share your information
            with third parties if you have given us your explicit consent to do
            so.
          </li>
          <li>
            <strong>For Legal Reasons</strong>: We may disclose your information
            if required by law or in response to valid requests by public
            authorities.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Data Security</h2>
        <p>
          We take the security of your information seriously and implement
          appropriate technical and organizational measures to protect it from
          unauthorized access, use, or disclosure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Your Rights</h2>
        <p>You have the following rights regarding your information:</p>
        <ul className="list-inside list-disc">
          <li>
            <strong>Access</strong>: You have the right to access the
            information we hold about you.
          </li>
          <li>
            <strong>Correction</strong>: You have the right to request that we
            correct any inaccurate or incomplete information.
          </li>
          <li>
            <strong>Deletion</strong>: You have the right to request that we
            delete your information, subject to certain exceptions.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">
          Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page. You
          are advised to review this Privacy Policy periodically for any
          changes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p className="font-medium">yuwaltonwang@gmail.com</p>
      </section>

      <p className="text-sm text-gray-500">Last updated: 2024-08-05</p>
    </div>
  );
};

export default function PrivacyPolicy() {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px]">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Privacy Policy
                </h1>
                <PrivacyPolicyText />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="pt-[70px] text-[#3B2E22] bg-[#dbc3ab] md:bg-[#f7dbb6] mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-sm text-gray-600">
        Effective Date: August 5, 2025
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <p>
          We collect personal details like name, email, phone number, WhatsApp
          number, and payment details to offer a smooth experience.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Use of Information</h2>
        <p>
          Your information is used for training access, audit calls,
          communication, and support. We do <strong>not sell</strong> your data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Data Security</h2>
        <p>
          We apply modern security practices to protect your data. However,
          complete digital security cannot be guaranteed.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
        <p>
          Our site uses cookies to enhance user experience. You can adjust your
          browser settings to decline them.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Third-Party Tools</h2>
        <p>
          We use third-party tools like payment processors and messaging apps.
          These follow their own privacy policies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Your Consent</h2>
        <p>
          By using our website and services, you agree to the terms outlined in
          this Privacy Policy.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
        <p>
          📧 support@theprmedia.in
          <br />
          📞 7500010933, 7500030415
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

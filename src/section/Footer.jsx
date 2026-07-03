/** 
 * @copyright 2025 Looknath
 * @license Apache-2.0
*/

import React, { useState } from 'react';

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const TermsModal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xl"
        >
          ×
        </button>
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-4">Terms & Conditions</h2>
          <div className="space-y-4 text-sm text-zinc-300">
            <p><strong>1. Introduction</strong></p>
            <p>Welcome to Tanu. These Terms & Conditions govern your use of our website and services. By accessing or using the site, you agree to be bound by these terms.</p>
            
            <p><strong>2. User Responsibilities</strong></p>
            <p>You agree to use the site only for lawful purposes and in a way that does not infringe the rights of others. You must not misuse the site by introducing viruses or harmful code.</p>
            
            <p><strong>3. Intellectual Property</strong></p>
            <p>All content on the site, including text, graphics, and code, is owned by Tanu or its licensors. You may not reproduce or distribute content without permission.</p>
            
            <p><strong>4. Limitations of Liability</strong></p>
            <p>The site is provided "as is" without warranties. Tanu is not liable for any damages arising from your use of the site.</p>
            
            <p><strong>5. Governing Law</strong></p>
            <p>These terms are governed by the applicable laws of India, without regard to conflict of law principles. Any disputes will be subject to the jurisdiction of the competent courts in India.</p>            
            <p><strong>6. Changes to Terms</strong></p>
            <p>We may update these terms at any time. Continued use of the site after changes constitutes acceptance.</p>
            
            <p>Last updated: May 1, 2026.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const PrivacyModal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xl"
        >
          ×
        </button>
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-4">Privacy Policy</h2>
          <div className="space-y-4 text-sm text-zinc-300">
            <p><strong>1. Information We Collect</strong></p>
            <p>We collect personal information such as name, email, and messages when you contact us via the form. We also collect usage data like IP address</p>
            
            <p><strong>2. How We Use Your Information</strong></p>
            <p>Your data is used to respond to inquiries, improve services, and send updates. We do not sell or share your data with third parties except as required by law.</p>
            
            <p><strong>3. Cookies</strong></p>
            <p>We use cookies to enhance user experience and analyze site traffic. You can manage cookies through your browser settings.</p>
            
            <p><strong>4. Data Security</strong></p>
            <p>We implement reasonable security measures to protect your data, but no system is completely secure.</p>
            
            <p><strong>5. Your Rights</strong></p>
            <p>You have the right to access, correct, or delete your data. Contact us at "beachybird38@gmail.com" to exercise these rights.</p>
            
            <p><strong>6. Changes to Policy</strong></p>
            <p>We may update this policy. Changes will be posted here, and significant updates will be notified via the site.</p>
            
            <p>Last updated: May 1, 2026.</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <footer className="w-full text-neutral-400 text-sm mt-12">
        {/* Gradient Separator */}
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

        {/* Footer Content */}
        <div className="c-space py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Copyright Notice */}
          <p>&copy; 2025 Tanu. All rights reserved.</p>

          {/* Links */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowTerms(true)}
              className="hover:text-white transition-colors duration-300 underline"
            >
              Terms & Conditions
            </button>
            <span className="text-neutral-600">|</span>
            <button
              onClick={() => setShowPrivacy(true)}
              className="hover:text-white transition-colors duration-300 underline"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </footer>

      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </>
  );
};

export default Footer;

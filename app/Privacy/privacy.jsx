import React from 'react';
import Image from 'next/image';
import privacy from "../Images/privacy.png"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header - Top Center */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This page outlines how we collect, use, and protect your data.
          </p>
        </div>

        {/* Main Content - Image Left, Text Right on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Image Section - Left Side on Desktop, Top on Mobile */}
          <div className="lg:col-span-4 flex justify-center lg:sticky lg:top-8">
            <Image
              src={privacy}
              alt="Privacy Policy Illustration"
              width={400}
              height={300}
              className="w-full max-w-sm lg:max-w-full h-auto"
            />
          </div>

          {/* Content Section - Right Side on Desktop */}
          <div className="lg:col-span-8 text-gray-800">
            <div className="space-y-8">
              <section className="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-3">1. Information We Collect</h2>
                <p className="leading-relaxed">
                  We collect personal information (like name, email, and contact details) when you interact with our services. We also gather anonymous data such as IP addresses, browser type, and usage behavior through cookies and analytics tools.
                </p>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-3">2. How We Use Your Information</h2>
                <p className="leading-relaxed">
                  Your information is used to improve our services, communicate with you, respond to your inquiries, and provide personalized experiences. We never sell your personal data to third parties.
                </p>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-3">3. Data Protection</h2>
                <p className="leading-relaxed">
                  We implement industry-standard security measures to ensure the safety of your data. However, no system is 100% secure. We encourage you to protect your credentials and use secure connections.
                </p>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-3">4. Third-Party Tools</h2>
                <p className="leading-relaxed">
                  We may use third-party services like Google Analytics and payment processors. These tools have their own privacy practices, which we recommend you review.
                </p>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-3">5. Your Rights</h2>
                <p className="leading-relaxed">
                  You have the right to request access to your data, update your information, or request deletion. Please contact us if you have any privacy concerns or requests.
                </p>
              </section>

              <section className="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-3">6. Changes to This Policy</h2>
                <p className="leading-relaxed">
                  We may update our privacy policy from time to time. Updates will be posted on this page with a revised date.
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
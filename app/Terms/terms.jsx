import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import terms from "../Images/terms.png";

const termsData = [
  {
    id: 1,
    title: "Our Service Model",
    content:
      "Innosphere Digital transforms your business ideas into scalable digital products. We specialize in launching SaaS products with performance, scalability, and impact in mind.",
  },
  {
    id: 2,
    title: "Results We Promise",
    content:
      "We commit to delivering high-quality, SEO-ready digital products that attract up to 100 users per week and help reduce your platform's bounce rate through optimized UX/UI.",
  },
  {
    id: 3,
    title: "Payment & Maintenance",
    content:
      "We follow a budget-friendly pricing model. A monthly maintenance charge is applied to ensure continued support, updates, and optimal performance of your product.",
  },
  {
    id: 4,
    title: "Client Responsibilities",
    content:
      "Clients are responsible for providing accurate business requirements, timely communication, and approvals to ensure smooth execution and delivery timelines.",
  },
  {
    id: 5,
    title: "Intellectual Property",
    content:
      "All custom code and assets developed for your project are your intellectual property after full payment, unless otherwise agreed.",
  },
  {
    id: 6,
    title: "Policy Updates",
    content:
      "We may revise these Terms of Service periodically. Continued use of our services after changes constitutes your agreement to the updated terms.",
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Back Navigation - Top Left */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Header - Top Center */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read our terms and conditions carefully before using our
            services. These terms govern your use of our digital solutions.
          </p>
        </div>

        {/* Main Content - Image Left, Text Right on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Image Section - Left Side on Desktop, Top on Mobile */}
          <div className="lg:col-span-4 flex justify-center lg:sticky lg:top-8">
            <Image
              src={terms}
              alt="Terms of Service Illustration"
              width={400}
              height={300}
              className="w-full max-w-sm lg:max-w-full h-auto"
            />
          </div>

          {/* Content Section - Right Side on Desktop */}
          <div className="lg:col-span-8 text-gray-800">
            <div className="space-y-8">
              {termsData.map((term) => (
                <section
                  key={term.id}
                  className="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500"
                >
                  <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
                    {term.id}. {term.title}
                  </h2>
                  <p className="leading-relaxed">{term.content}</p>
                </section>
              ))}

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Last updated:{" "}
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

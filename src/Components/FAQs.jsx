import React from "react";
import { FiHelpCircle } from "react-icons/fi";

export default function FAQs() {
  const faqs = [
    {
      question: "How can I enroll in a course?",
      answer:
        'You can click on the "Enroll" button on the course page. After a successful payment, the course will be added to your dashboard immediately.',
    },
    {
      question: "Do you provide certifications?",
      answer:
        "Yes! We provide verified certificates for all completed courses. You can download your certificate from the 'My Enrolled Courses' section once you finish all lessons.",
    },
    {
      question: "Can I access courses anytime?",
      answer:
        "Absolutely! All our courses are pre-recorded and available 24/7 online. You can learn at your own pace from any device.",
    },
    {
      question: "Is there any refund policy?",
      answer:
        "Yes, we offer a 7-day money-back guarantee if you are not satisfied with the course content, provided you haven't completed more than 20% of the lessons.",
    },
  ];

  return (
    <section className="mt-15">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-3">
            <FiHelpCircle />
            <span>Support Center</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg">
            আপনার মনে থাকা সাধারণ প্রশ্নগুলোর উত্তর এখানে খুঁজে পাবেন।
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((f, idx) => (
            <div
              key={idx}
              className="collapse collapse-plus border rounded-2xl shadow-sm group hover:border-primary/30 transition-all duration-300"
            >
              <input
                type="radio"
                name="my-accordion-3"
                defaultChecked={idx === 0}
              />
              <div className="collapse-title text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                {f.question}
              </div>
              <div className="collapse-content">
                <div className="h-[1px] border mb-4"></div>
                <p className="leading-relaxed">{f.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-8 border border-dashed rounded-3xl">
          <p className="text-secondary font-medium">
            Still have more questions?
          </p>
          <button className="mt-4 text-primary font-bold hover:underline underline-offset-4">
            Contact our support team →
          </button>
        </div>
      </div>
    </section>
  );
}

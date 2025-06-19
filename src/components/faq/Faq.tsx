'use client';

import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What does this organization do?",
      answer:
        "We support mothers and newborns in under-resourced communities by providing access to safe deliveries, prenatal care, nutrition, and emotional support. Every donation directly impacts a life in need.",
    },
    {
      question: "How does my donation help?",
      answer:
        "Your donation helps provide safe birth kits, essential medical supplies, clean water, nutritional support, and postpartum care to mothers and babies who need it most.",
    },
    {
      question: "Is my donation secure?",
      answer:
        "Absolutely. We use secure and trusted payment platforms to ensure your information is protected. Your privacy and generosity are our priority.",
    },
    {
      question: "Can I donate monthly?",
      answer:
        "Yes! You can choose to become a monthly donor and make an ongoing impact in the lives of vulnerable mothers and their children. Just select the 'monthly' option when donating.",
    },
    {
      question: "Can I get involved beyond donating?",
      answer:
        "We welcome volunteers, ambassadors, and partners! Whether you're a healthcare worker, student, or advocate, your time and voice matter. Reach out through our contact page to learn how.",
    },
    {
      question: "Will I receive updates on how my donation is used?",
      answer:
        "Yes. We share regular updates, stories, and impact reports with our donors, so you can see the real difference your support makes.",
    },
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Depending on your country and our registration, your donation may be tax-deductible. Please consult your local tax laws or reach out to us for documentation.",
    },
  ];

  return (
    <div className="font-[sans-serif] py-4 divide-y rounded-lg max-w-7xl mx-auto px-4">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-rose-600">Have Questions?</h2>
        <p className="text-md text-gray-600 mt-2">
          We’re here to help you understand how your support brings hope to mothers and newborns.
        </p>
      </div>

      {faqs.map((faq, index) => (
        <div role="accordion" key={index}>
          <button 
            type="button"
            className="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center"
            onClick={() => handleToggle(index)}
          >
            <span className="mr-4">{faq.question}</span>
            <svg
              className={`w-6 h-6 text-gray-400 transition-transform duration-200 ml-auto shrink-0 ${activeIndex === index ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-screen py-4' : 'max-h-0 py-0'}`}>
            <p className="text-sm text-gray-800">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
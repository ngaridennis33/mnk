"use client";

import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is this site about?",
      answer: "The whole essence of this website is to provide trendy news on an array of topics to keep you in the loop on what is happening around you. You can be sure to read more on social, political, and financial issues, as well as entertainment-focused topics. We can guarantee there is something for you too!"
    },
    {
      question: "How do I navigate the site?",
      answer: "The site is specially designed to make it super easy for you to navigate. We have provided functional prompts to ensure you are able to move through the site with ease and get the maximum from it."
    },
    {
      question: "Can I comment and give my views on a topic?",
      answer: "Yes! We have provided a comment section where you can give your views on the topics we write on. Your contribution is greatly appreciated!"
    },
    {
      question: "How do I subscribe to become a member?",
      answer: "If you wish to subscribe to enjoy the benefits that come with becoming a member (e.g. receiving our newsletter and updates on new features), just scroll down the homepage and input your email address on the space provided, then click subscribe."
    },
    {
      question: "How do I unsubscribe if I don’t wish to continue my membership?",
      answer: "If you want to stop receiving updates from Zidi Trends, you can use the ‘unsubscribe’ button, which can be found in the emails we send you. "
    },
    {
      question: "Can I advertise on the site?",
      answer: "Of course! Simply email us on info.ziditrends@gmail.com to enquire about advertising on our platform. "
    }
    ,
    {
      question: "How do I use the ‘buy me a coffee’ button?",
      answer: "You can buy your favorite news and entertainment plug a cup of coffee by clicking the ‘buy me a coffee’ button and following the guidelines up to where you can make payment. Thank you in advance!  "
    }
  ];

  return (
    <div className="font-[sans-serif] py-4 divide-y rounded-lg max-w-7xl mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Frequently asked questions</h2>
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
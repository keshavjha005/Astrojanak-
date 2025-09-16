import React, { useState } from "react";
import { ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How can I book a consultation call with Astro Arun Pandit?",
    answer:
      "You can book a consultation through the official website by selecting your preferred service and following the booking instructions.",
  },
  {
    question: "Does Astro Arun Pandit provide astrology courses?",
    answer:
      "Yes, Astro Arun Pandit offers both astrology courses and numerology courses. You can explore these courses on our website by visiting the “Courses” section.",
  },
  {
    question: "What is 'The Arun Pandit Show'?",
    answer:
      "“The Arun Pandit Show” is a podcast hosted by Astro Arun Pandit. It features a diverse array of guests, including celebrities, spiritual speakers, politicians, and YouTubers, engaging in insightful discussions.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        background:
          'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg3.jpg")',
        backgroundSize: "100% 100%",
      }}
      className="mx-auto px-4 pb-20"
    >
      <h2 className="text-3xl ms-40 pt-20 font-bold text-[#724121] mb-8">
        FAQ&apos;s
      </h2>
      <div className="space-y-4 w-[80%] mx-auto">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border rounded-lg shadow-sm overflow-hidden">
            <button
              className="flex justify-between text-lg items-center w-full p-4 text-left font-medium text-[#724121] bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => toggle(idx)}
            >
              <span>{faq.question}</span>
              <ChevronUp
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden bg-white border-t text-[#F46333] ${
                openIndex === idx
                  ? "max-h-96 opacity-100 scale-100 p-4"
                  : "max-h-0 opacity-0 scale-95 p-0"
              }`}
            >
              <div className="transition-opacity duration-300">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;

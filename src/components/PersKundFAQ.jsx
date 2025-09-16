import React, { useState } from "react";
import { ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "Is Premium Kundali available in any language other than English?",
    answer:
      "Yes, Premium Kundali can be provided in multiple regional languages upon request. Please contact our support for available options.",
  },
  {
    question: "Can Astrology predict the future accurately?",
    answer:
      "Astrology provides insights based on planetary positions and their influence. While not a guarantee, many users find it incredibly accurate.",
  },
  {
    question: "In how many days you will receive your kundali?",
    answer:
      "Typically, you will receive your personalized kundali within 5–10 business days.",
  },
  {
    question: "How Accurate are Personalized Kundali Reports?",
    answer:
      "Personalized reports are curated by experienced astrologers and aim to be highly accurate based on the birth details provided.",
  },
  {
    question: "What Information Do I Need to Provide for a Personalized Kundali Report?",
    answer:
      "You’ll need your full name, date of birth, time of birth, and place of birth to get started.",
  },
  {
    question: "What Can I Expect from a Personalized Kundali Report?",
    answer:
      "Expect a detailed analysis of your personality, career, relationships, and future predictions with astrological remedies.",
  },
  {
    question: "How Does Kundali Analysis Help in Life Decision-Making?",
    answer:
      "It helps identify the best times for key decisions and offers guidance on challenges and opportunities in your life path.",
  },
  {
    question: "Can I Get Remedies for Doshas Identified in My Kundali Report?",
    answer:
      "Yes, the report includes simple and effective remedies for doshas to bring balance and harmony to your life.",
  },
  {
    question: "Can my future be changed through an understanding of kundali?",
    answer:
      "Understanding your kundali helps you make informed choices, which can positively influence your future.",
  },
  {
    question: "How and when will I receive the Kundali?",
    answer:
      "You’ll receive it via email or downloadable link once it's ready, usually within 5–10 days.",
  },
  {
    question: "Where I can receive my kundali?",
    answer:
      "Your kundali report will be delivered directly to your registered email or user dashboard.",
  },
  {
    question: "Is Kundali Matching Included in a Personalized Kundli Report?",
    answer:
      "Kundali matching is available as an optional add-on during the report request.",
  },
  {
    question: "What Makes Your Personalized Kundli Report Different from Others?",
    answer:
      "Our reports are prepared manually by seasoned astrologers and include remedies, life advice, and personalized charts.",
  },
  {
    question: "Are the Predictions in the Kundli Report Time-Specific?",
    answer:
      "Yes, the report includes specific timeframes for major life events and planetary transitions.",
  },
  {
    question: "Can I Consult with an Astrologer After Receiving My Kundli Report?",
    answer:
      "Absolutely! You can schedule a call or chat session with our astrologers for further clarification.",
  },
];

const PersKundFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        background: 'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg6.jpg")',
        backgroundPosition: "right",
        backgroundSize: "cover",
      }}
      className="max-w-4xl mx-auto py-16 sm:py-20 px-4 sm:px-6"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#724121] mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((faq, idx) => (
          <div key={idx} className="border rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => toggle(idx)}
              className="flex justify-between items-center w-full p-4 text-left text-base sm:text-lg font-medium text-[#724121] bg-gray-100 hover:bg-gray-200 transition"
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
              <p className="transition-opacity duration-300 text-sm sm:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PersKundFaq;

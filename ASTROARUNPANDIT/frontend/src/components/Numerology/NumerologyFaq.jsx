import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
const faqs = [
  {
    question: "How do I find my numerology number?",
    answer:
      "To find your numerology number, start with your birth date. Add the digits of the day, month, and year separately until you get single digits. Then, add those single digits together and reduce them again to a single digit (unless the result is 11, 22, or 33 — these are master numbers).",
  },
  {
    question: "How does numerology work?",
    answer:
      "Numerology works by reducing numbers to their core essence. Your Life Path Number is calculated from your birth date and reveals your personality, strengths, weaknesses, and purpose — similar to the Sun Sign in astrology.",
  },
  {
    question: "What is the most powerful number in numerology?",
    answer:
      "The number 22 is considered the most powerful, followed by 11 and 33. These are called master numbers — the 'triangle of enlightenment.' They are not reduced further because of their high spiritual significance and potential for success.",
  },
  {
    question: "What is an enemy number in numerology?",
    answer:
      "In numerology, some numbers vibrate poorly with others. These are considered enemy numbers and may lead to challenges when paired. Use a Numerology Calculator to find which numbers are considered enemies based on your personal number.",
  },
  {
    question: "How can I find my friendly numbers?",
    answer:
      "Friendly numbers are those that are harmonious with your core number. These indicate compatibility in relationships and teamwork. A Numerology Calculator can help you discover which numbers are most compatible with yours.",
  },
  {
    question: "Is numerology really effective?",
    answer:
      "Numerology can be effective when used mindfully. It helps bring awareness to patterns in your life and can guide decision-making. While not a science, many find it meaningful for personal growth and self-discovery.",
  },
  {
    question: "Can numerology predict the future?",
    answer:
      "Numerology offers insights into future possibilities based on patterns and vibrations in numbers. It doesn't predict exact events but can highlight trends, opportunities, and challenges that may lie ahead.",
  },
  {
    question: "Which type of numerology is most accurate?",
    answer:
      "Each numerology system has its strengths. Pythagorean is widely used, but Chaldean Numerology is often praised for its accuracy. Chaldean is based on numbers 1–8 and emphasizes vibrations and name values.",
  },
  {
    question: "What are the different types of numerology?",
    answer:
      "There are several popular systems of numerology, including:\n\n" +
      "1. Chaldean Numerology\n" +
      "2. Pythagorean (Western) Numerology\n" +
      "3. Kabbalah Numerology\n" +
      "4. Tamil Numerology\n\n" +
      "Each has a unique approach and offers different insights based on number analysis.",
  },
  {
    question: "What is a numerology reading?",
    answer:
      "A numerology reading occurs when a numerologist analyses your number chart and predicts numerous life-changing numbers. A numerology reading entails a lot of calculation. These calculations can go into several layers of detail, with individual numbers and number combinations holding different meanings.",
  },
  {
    question: "What is a master number in numerology?",
    answer:
      "According to numerology, the master numbers are 11, 22, and 33. These three numbers are known as the 'Triangle of Enlightenment.' These two-digit numbers are thought to be incredibly powerful. They can be extremely positive or overall negative..",
  },
];

const NumerologyFaq = () => {
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
          <div
            key={idx}
            className="border rounded-lg shadow-sm overflow-hidden"
          >
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
              <div className="transition-opacity duration-300">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NumerologyFaq;

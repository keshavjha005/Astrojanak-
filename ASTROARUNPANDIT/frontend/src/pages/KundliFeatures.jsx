import React from "react";
import PromoBanner from "../components/PromoBanner";

const features = [
  {
    title: "Dosh & Dasha's Analysis",
    description:
      "Detailed report of doshas – Kuja (Mangal), Shani (Saturn), Rahu-Ketu, Dasha & remedies, from mantras to rituals.",
  },
  {
    title: "All Yog Report",
    description:
      "Learn about yog formations like Raja, Graha Maitri, Budhaditya & more in your kundli to unlock growth & intellect.",
  },
  {
    title: "Gemstone Recommendation",
    description:
      "Find when, why & how to wear the right gemstones tailored to your kundli by top gemologists in India.",
  },
  {
    title: "Puja Recommendation",
    description:
      "Personalized rituals and pujas based on grahas to remove negativity and attract success.",
  },
  {
    title: "Ank Jyotish Recommendation",
    description:
      "Numerology insights from your date of birth to understand your personality and behavior.",
  },
  {
    title: "Monthly Prediction For 1 Year",
    description:
      "Get month-by-month guidance based on your kundli to plan your year effectively.",
  },
  {
    title: "Yearly Prediction For 10 Years",
    description:
      "A decade of predictions! Plan long-term with complete astrological insights from your horoscope.",
  },
  {
    title: "Astrograph / Bhavbal Graph",
    description:
      "In-depth astrograph and bhavbal visualization to track strengths in your horoscope.",
  },
  {
    title: "Exclusive Access To Astroparivar",
    description:
      "Join our premium Astroparivar community with personalized guidance and member-only benefits.",
  },
];

const KundliFeatures = () => {
  return (
    <section
      style={{
        background:
          'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg4.jpg")',
      }}
      className=" py-20 px-4"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#724121] mb-12">
          What You Get In Your Personalized Janam Kundli
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-[#f463339c] rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-[#724121] to-[#F46333] text-white rounded-xl px-4 py-2 inline-block text-sm font-semibold mb-4">
                {feature.title}
              </div>
              <p className="text-[#724121] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <PromoBanner />
      </div>
    </section>
  );
};

export default KundliFeatures;

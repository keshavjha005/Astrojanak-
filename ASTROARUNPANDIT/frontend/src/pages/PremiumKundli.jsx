import React from "react";
import KundliPromo from "../components/KundliPromo";
import KundliProblemCards from "../components/KundliProblemCards";
import KundliFeatures from "./KundliFeatures";
import ReportTestimonials from "../components/TestimonialSection";
import PersKundFaq from "../components/PersKundFAQ";
import ConsulationCallForm from "../components/ConsulationCallForm";

const PremiumKundli = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div
        style={{
          background:
            'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg10.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="relative text-white"
        id="banner"
      >
        <div className="relative z-10 py-20 sm:py-24 px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Premium Personalized Kundli
          </h1>
          <p className="mt-2 sm:mt-4 mb-4 sm:mb-6 text-sm sm:text-base">
            Home 🡆 Premium Personalized Kundli
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <KundliPromo />
      <KundliProblemCards />
      <KundliFeatures />
      <ReportTestimonials />
      <PersKundFaq />
      <ConsulationCallForm />
    </div>
  );
};

export default PremiumKundli;

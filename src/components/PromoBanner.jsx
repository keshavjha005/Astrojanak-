import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PromoBanner = () => {
  return (
    <section className="bg-gradient-to-br from-[#724121] via-[#F96F42] to-[#F96F42] text-white px-4 sm:px-6 py-12 rounded-3xl mx-4 sm:mx-auto max-w-6xl shadow-xl relative overflow-hidden">
      <div className="text-center space-y-6">
        {/* Price Section */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          <span className="line-through text-yellow-200">₹1100</span>{" "}
          <span className="text-yellow-400">₹499</span>{" "}
          <span className="text-lg sm:text-xl font-medium">/ Only</span>
        </h2>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
            10-Year Prediction
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
            Lowest Rates In The Market
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
            100% Success Rate
          </div>
        </div>

        {/* Note */}
        <p className="text-xs sm:text-sm text-orange-100 max-w-2xl mx-auto mb-4 sm:mb-6 mt-4 sm:mt-6 px-2">
          <strong>Note:</strong> Due to high demand, Kundli delivery time has been extended from 5 to 10 days. We appreciate your patience and are committed to delivering accurate and timely results.
        </p>

        {/* CTA Button */}
        <Link
          to="/buy-pers-kundli"
          className="inline-block mt-4 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#724121] text-white font-bold rounded-full text-base sm:text-lg shadow-md hover:bg-[#724127] transition-all"
        >
          BUY YOUR PERSONALIZED KUNDLI
        </Link>
      </div>
    </section>
  );
};

export default PromoBanner;

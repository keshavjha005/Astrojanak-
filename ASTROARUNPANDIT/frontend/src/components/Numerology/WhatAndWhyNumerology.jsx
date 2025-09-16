import React from 'react';

const WhatAndWhyNumerology = () => {
  return (
    <div  style={{
      background:
        'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg7.jpg")',
    }} className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 w-[80%] mx-auto gap-8">
        {/* What is Numerology */}
        <div className="p-6 bg-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out rounded">
          <h2 className="text-3xl text-[#724121] font-bold mb-4">What is Numerology?</h2>
          <p className="text-[#724121] leading-relaxed">
            The word, “numerology,” is the science of numbers. The Numerology word comes from the Latin root,
            “numerus,” which means number and the Greek word, “logos,” which refers word or thought. These
            number-thoughts, or numerology is an ancient method of divination where numerical vibrations are charted
            in order to determine or predict the pattern of trends for the future.
          </p>
        </div>

        {/* Why Numerology */}
        <div className="p-6 bg-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out rounded border-l border-gray-300">
          <h2 className="text-3xl font-bold mb-4 text-[#724121]">Why Numerology?</h2>
          <p className="text-[#724121] leading-relaxed">
            Once you learn how to use numerology successfully and implement it in your daily life you will soon see how it
            can guide you on a path to personal fulfillment and enjoyment. Numerology can be used to find a compatible partner,
            choose a career, determine your destiny and allows for full advantage of lucky days, events and years.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatAndWhyNumerology;

import React from 'react';

const NumerologyReport = () => {
  return (
    <div style={{background : 'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg6.jpg")'}} className="flex flex-col py-20 md:flex-row items-center justify-center p-8 w-[80%] mx-auto bg-white text-black">
      {/* Left: Illustration */}
      <div className="md:w-1/2 w-full  flex justify-center mb-6 md:mb-0">
        <img
          src="/numerology.png"
          alt="Numerology Illustration"
          className="w-80 md:w-[400px] rounded-2xl shadow-xl hover:scale-105 hover:shadow-4xl hover:shadow-gray-700 shadow-gray-500 transition duration-300"
        />
      </div>

      {/* Right: Text and CTA */}
      <div className="md:w-1/2 w-full px-4">
        <p className="text-lg text-[#724121] leading-7 mb-4">
          An ancient technique of deriving significance from various numbers, number combinations,
          letters, and symbols in your life. This art can assist us in tapping into the underlying
          patterns of the universe and revealing new truths about ourselves. Numerology explains the
          <strong> significance of the numbers concealed in our birth name and birth date</strong>.
          Numerology numbers are utilized to gain an understanding of a person's personality,
          strengths, vulnerabilities, emotions, abilities, aspirations, opportunities, difficulties,
          inner needs, and habits. Numerology <strong>reveals information</strong> about our lives,
          our fate, and how we interact with others.
        </p>
        <button className="bg-[#724121] hover:bg-[#F46333] transition duration-300  text-white font-bold py-3 px-6 rounded">
          Get Your Free Numerology Report Now
        </button>
      </div>
    </div>
  );
};

export default NumerologyReport;

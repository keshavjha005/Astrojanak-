import React from "react";

const KundliPromo = () => {
  return (
    <section style={{background : 'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg2.jpg")' , backgroundPosition : 'right'}} className=" py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://astroarunpandit.org/wp-content/uploads/2024/06/caruna-1536x1536.png"
            alt="Kundli Offer"
            className="max-w-sm w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl md:text-4xl font-bold text-[#724121] leading-tight mb-4">
            Make Your Dreams Come True
          </h2>
          <h3 className="text-xl md:text-lg font-semibold text-[#724121] mb-6">
            Discover Solutions through Expert Online Janam Kundli Analysis Report!
          </h3>
          <p className="text-[#F46333] mb-4 leading-relaxed">
            The main purpose with which one’s janam Kundli report is developed and sent online via
            mail is to examine your life’s past, present, and future predictions by studying your
            birth chart, planets, DOB Analysis and houses.
          </p>
          <p className="text-[#F46333] mb-6 leading-relaxed">
            Our Vedic expert kundali report finds solutions to all love, career, marriage & business
            more related problems.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button className="bg-[#724121] hover:bg-[#F46333] text-white text-lg font-medium px-6 py-3 rounded-full transition duration-300">
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KundliPromo;

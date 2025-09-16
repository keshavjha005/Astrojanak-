import React from 'react';

const HowNumerologyWorks = () => {
  return (
    <div style={{background : 'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg4.jpg")'}}  className="bg-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 w-[80%] mx-auto gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#724121]">How does Numerology Work?</h2>
          <p className="text-[#724121] mb-4">
            Your ruling number can be calculated by <strong>adding the numbers</strong> from{' '}
            <a href="#" className="text-[#724121] underline">your birth date</a>. In other words, your ruling number is the sum of your birthdays. 
            Your numerology number serves as a <strong>road map for your life</strong>.
          </p>
          <p className="text-[#724121] mb-4">
            Using the Numerology Calculator, you can obtain detailed information about your parents, partner, children, health, career, and job. 
            Numerology provides a mathematical formula that directs your <strong>Karmic Pathway</strong> based on your date of birth and name. 
            As you move forward in your life, the day of your birth indicates your chosen mission.
          </p>
          <p className="text-[#724121] mb-6">
            A Free Numerology Report will tell you anything, from discovering facts about a person to learning about the world. 
            Without a doubt, it is regarded as a universal language of numbers, and <strong>a Free Vedic Numerology Calculator</strong> 
            can assist you in comprehending that language. Vedic Rishi presents you with a complete numerology report of the Astro Numerology 
            Calculator based on Vedic Principles, which allows us to better understand ourselves as individuals and the world.
          </p>
          <button className="bg-[#724121] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300">
            Get Your Free Numerology Report Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img src="hownumerology.png" alt="Numerology Star" className="w-[300px] md:w-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default HowNumerologyWorks;

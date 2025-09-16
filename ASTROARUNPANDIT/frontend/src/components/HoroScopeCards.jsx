import React from 'react'

const zodiacSigns = [
    {
      name: "ARIES",
      img: "https://kamleshyadav.com/html/astrology/version-3/assets/images/svg/horoscope/h1.svg",
    },
    {
      name: "TAURUS",
      img: "https://kamleshyadav.com/html/astrology/version-3/assets/images/svg/horoscope/h2.svg",
    },
    {
      name: "GEMINI",
      img: "https://kamleshyadav.com/html/astrology/version-3/assets/images/svg/horoscope/h3.svg",
    },
    {
      name: "CANCER",
      img: "https://kamleshyadav.com/html/astrology/version-3/assets/images/svg/horoscope/h4.svg",
    },
    {
      name: "LEO",
      img: "https://kamleshyadav.com/html/astrology/version-3/assets/images/svg/horoscope/h5.svg",
    },
    {
      name: "VIRGO",
      img: "https://kamleshyadav.com/html/astrology/version-3/assets/images/svg/horoscope/h6.svg",
    },
    {
      name: "LIBRA",
      img: "https://kamleshyadav.com/html/astrology/version-3/assets/images/svg/horoscope/h7.svg",
    },
    {
      name: "SCORPIO",
      img: "https://kamleshyadav.com/html/astrology/version-3/assets/images/svg/horoscope/h8.svg",
    },
    {
      name: "SAGITTARIUS",
      img: "https://kamleshyadav.com/html/astrology/version-3/assets/images/svg/horoscope/h9.svg",
    },
    {
      name: "CAPRICORN",
      img: "https://kamleshyadav.com/html/astrology/version-3/assets/images/svg/horoscope/h10.svg",
    },
    {
      name: "AQUARIUS",
      img: "https://kamleshyadav.com/html/astrology/version-3/assets/images/svg/horoscope/h11.svg",
    },
    {
      name: "PISCES",
      img: "https://kamleshyadav.com/html/astrology/version-3/assets/images/svg/horoscope/h12.svg",
    },
  ];

const HoroScopeCards = () => {
  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {zodiacSigns.map((sign, index) => (
          <div
            key={index}
            className=" bg-white text-white p-3 group  hover:bg-[#F7E9CF] flex shadow-md rounded-2xl  flex-col items-center cursor-pointer hover:scale-105 transition"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex-col text-[#724121] font-bold items-center justify-center">
              <div className="w-20 h-20 mx-auto">
                <img src={sign.img} alt={sign.name} className="w-12 sm:w-16 sm:h-16 mx-auto group-hover:brightness-0" />
              </div>
              <span>{sign.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HoroScopeCards

import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Landmark, Languages, Send } from "lucide-react";
import { FiCloud } from "react-icons/fi";
import PromoBanner from "./PromoBanner";

const DailyPanchang = () => {
  const cardData = {
    date: "Wednesday, 7 May 2025",
    ayana: "Uttarayana",
    ritu: "Vasant Ritu",
    icon: <FiCloud className="text-white text-4xl" />,
    info: [
      { label: "Sunrise", value: "6:7:16" },
      { label: "Sunset", value: "19:2:59" },
      { label: "Moonrise", value: "14:51:20" },
      { label: "Moonset", value: "2:48:26" },
      { label: "Hindu Sunrise", value: "6:11:1" },
      { label: "Hindu Sunset", value: "18:59:13" },
      { label: "Sun Sign", value: "Aries" },
      { label: "Moon Sign", value: "Leo" },
    ],
  };

  const panchangData = [
    { label: "Tithi", value: "Shukla-Dashami upto 10:21:42" },
    { label: "Nakshatra", value: "Purva Phalguni upto 18:19:29" },
    { label: "Yog", value: "Vyaghat upto 25:4:2" },
    { label: "Karan", value: "Gara upto 10:21:42" },
  ];

  const hinduData = [
    {
      left: { label: "Vikram Samvat", value: "2082-Kaalyukt" },
      right: { label: "Shaka Samvat", value: "1947-Vishvavasu" },
    },
    {
      left: { label: "Paksha", value: "Shukla-Paksha" },
      right: { label: "Ayana", value: "Uttarayana" },
    },
    {
      left: { label: "Purnimanta", value: "Vaishakh" },
      right: { label: "Amanta", value: "Vaishakh" },
    },
    {
      left: { label: "Sun Sign", value: "Aries" },
      right: { label: "Moon sign", value: "Leo" },
    },
  ];

  const timings = {
    rahuKalam: "12:35:08 - 14:12:05",
    yamghantKalam: "07:44:14 - 09:21:12",
    gulikaKalam: "10:58:10 - 12:35:08",
    durMuhurta: "12:09:16 - 13:00:59",
    varjyam: ["00:40:40 - 02:26:24", "26:20:42 - 28:07:58"],
  };

 

  return (
    <div className="w-full min-h-screen">
      {/* Header Section */}
      <div
        style={{
          background:
            'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg10.jpg")',
          backgroundPosition: "center",
        }}
        className="relative bg-black text-white"
        id="banner"
      >
        <div className="relative z-10 py-24 text-center">
          <h1 className="text-4xl font-bold">Daily Panchang</h1>
          <p className="mt-4 mb-6">Home 🡆 Daily Panchang</p>
        </div>
      </div>

      {/* Form Section */}
      <div className=" w-full text-black shadow-md p-6 px-6 md:px-40 rounded-md ">
        <div className="grid md:grid-cols-5 gap-4 items-end">
          {/* Select Date */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Select Date
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Calendar size={18} />
              </span>
              <input
                type="date"
                className="border pl-10 pr-3 py-2 rounded w-full"
                defaultValue="2025-05-07"
              />
            </div>
          </div>

          {/* Panchang Place */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Select Panchang Place
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Landmark size={18} />
              </span>
              <select className="border pl-10 pr-3 py-2 rounded w-full">
                <option>India</option>
              </select>
            </div>
          </div>

          {/* City / District */}
          <div>
            <label className="block text-sm font-medium mb-1">
              City / District
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <MapPin size={18} />
              </span>
              <input
                type="text"
                placeholder="Type Birth City/District"
                className="border pl-10 pr-3 py-2 rounded w-full"
              />
            </div>
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-medium mb-1">Language</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Languages size={18} />
              </span>
              <select className="border pl-10 pr-3 py-2 rounded w-full">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button className="flex items-center justify-center gap-2 bg-[#F46333] text-white px-5 py-2 rounded w-full hover:bg-[#f46333c0]">
              <Send size={18} />
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      {/* Main Content Section */}
      <div
        style={{
          background:
            'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg7.jpg")',
        }}
        className="px-[10%] py-20 grid grid-cols-1 mt-5 md:grid-cols-3 gap-6 font-sans  mx-auto"
      >
        {/* Card 1 */}
        <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden border shadow bg-white transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#FFFAF0] hover:cursor-pointer duration-300 ease-in-out">
          {/* Header */}
          <div className="bg-[#F96F42] p-4 flex justify-between items-start text-white">
            <div>
              <h2 className="text-lg font-bold">{cardData.date}</h2>
              <p className="text-sm">Ayana- {cardData.ayana}</p>
              <p className="font-semibold">{cardData.ritu}</p>
            </div>
            {cardData.icon}
          </div>

          {/* Grid Info */}
          <div className="grid grid-cols-2 border-t divide-x divide-y">
            {cardData.info.map(({ label, value }, index) => (
              <div key={index} className="p-3">
                <div className="text-sm font-semibold text-gray-800">
                  {label}
                </div>
                <div className="text-sm text-gray-600">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2 (Panchang Elements) */}
        <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden shadow bg-white transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#FFFAF0] hover:cursor-pointer duration-300 ease-in-out">
          {/* Heading */}
          <div className="text-center p-4 border-b">
            <h3 className="text-xl font-bold text-gray-800">
              Panchang Elements
            </h3>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-2 divide-x divide-gray-50 divide-y text-gray-800">
            {panchangData.map(({ label, value }, index) => (
              <React.Fragment key={index}>
                <div className="p-3 font-semibold">{label}</div>
                <div className="p-3">{value}</div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Card 3 (Hindu Month & Year) */}
        <div className="w-full max-w-md mx-auto border rounded-lg overflow-hidden shadow bg-white transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#FFFAF0] hover:cursor-pointer duration-300 ease-in-out">
          {/* Heading */}
          <div className="text-center p-4 ">
            <h3 className="text-xl font-bold text-gray-800">
              Hindu Month & Year
            </h3>
          </div>

          {/* Content */}
          <div className="divide-y divide-gray-50 divide-x">
            {hinduData.map((item, index) => (
              <div key={index} className="grid grid-cols-2 p-4 text-gray-800">
                <div className="font-semibold">{item.left.label}</div>
                <div>{item.left.value}</div>
                <div className="font-semibold">{item.right.label}</div>
                <div>{item.right.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{background : 'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg2.jpg")', backgroundPosition : 'left'}} className="py-20">
        {/* Inauspicious Timing */}
        <div className="border rounded-lg shadow bg-rose-50 w-[75%] mx-auto overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:bg-rose-100 duration-300">
          <div className="bg-rose-50 text-center p-4 border-b">
            <h3 className="text-xl font-bold text-gray-800">
              Inauspicious Timing
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-gray-50 text-gray-800">
            <div className="p-4">
              <div className="font-semibold">Rahu Kalam</div>
              <div className="text-sm">{timings.rahuKalam}</div>
            </div>
            <div className="p-4">
              <div className="font-semibold">Yamghant Kalam</div>
              <div className="text-sm">{timings.yamghantKalam}</div>
            </div>
            <div className="p-4">
              <div className="font-semibold">Gulika Kalam</div>
              <div className="text-sm">{timings.gulikaKalam}</div>
            </div>
            <div className="p-4 col-span-1">
              <div className="font-semibold">Dur Muhurtam</div>
              <div className="text-sm">{timings.durMuhurta}</div>
            </div>
            <div className="p-4">
              <div className="font-semibold">Varjyam</div>
              {timings.varjyam.map((time, i) => (
                <div key={i} className="text-sm">
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Auspicious timing & yoga container */}
        <div className="max-w-[77%] mx-auto p-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Auspicious Timing */}
            <div className="flex-1 border rounded-lg bg-[#ECFDF5] shadow-md overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:bg-[#D1F7E9] duration-300">
              <div className="text-center p-4 border-b border-green-100 bg-[#ECFDF5]">
                <h3 className="text-xl font-bold text-gray-800">
                  Auspicious Timing
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-x divide-y divide-green-100 text-gray-800">
                <div className="p-4">
                  <div className="font-semibold">Abhijit Muhurta</div>
                  <div className="text-sm text-gray-600">12:10 - 13:00</div>
                </div>
                <div className="p-4">
                  <div className="font-semibold">Amrit Kalam</div>
                  <div className="text-sm text-gray-600">
                    11:15:04 - 13:00:48
                  </div>
                </div>
              </div>
            </div>

            {/* Other Yoga */}
            <div className="flex-1 bg-white rounded-lg border border-gray-100 shadow-md text-gray-800 transition-all hover:scale-105 hover:shadow-lg hover:bg-[#FFFAF0] duration-300">
              <div className="text-center p-4 border-b border-gray-100">
                <h3 className="text-xl font-bold">Other Yoga</h3>
              </div>

              {/* Anandadi Yog */}
              <div className="px-4 py-3 border-b border-gray-100 flex justify-between">
                <div className="font-medium">Anandadi Yog</div>
                <div className="text-gray-600">Sthira upto 18:19:29</div>
              </div>

              {/* Subheading */}
              <div className="text-center font-semibold border-y border-gray-100 py-2">
                Shool & Nivas
              </div>

              {/* Disha Shool */}
              <div className="px-4 py-3 border-b border-gray-100 flex justify-between">
                <div className="font-medium">Disha Shool</div>
                <div className="text-gray-500">NORTH</div>
              </div>

              {/* Nakshatra Shool */}
              <div className="px-4 py-3 border-b border-gray-100 flex justify-between">
                <div className="font-medium">Nakshatra Shool</div>
                <div className="text-gray-500">none</div>
              </div>

              {/* Moon Nivash */}
              <div className="px-4 py-3 border-b border-gray-100 flex justify-between">
                <div className="font-medium">Moon Nivash</div>
                <div className="text-gray-500">EAST</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <PromoBanner />
      </div>
    </div>
  );
};

export default DailyPanchang;

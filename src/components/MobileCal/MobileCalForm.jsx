import React from "react";

const MobileCalForm = () => {
  return (
    <div  style={{
      background:
        'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg3.jpg")',
      backgroundColor: "white",
      backgroundPosition: "top",
    }} className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-10">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="bg-[#724121]  font-bold px-6 py-3 rounded-full text-lg">
          Mobile Number Calcaulation
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-6 text-[#724121] leading-snug">
          Unlock Your Lucky, Destiny and Friendly <br />
          Numbers through Mobile Number
        </h1>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-md text-[#724121] bg-white shadow-xl rounded-xl overflow-hidden border-2 border-[#f4633346]">
  <div className="bg-gradient-to-r from-[#724121] via-[#724121f6] to-[#F46333] p-5 text-center">
    <h2 className="text-white text-lg font-bold">
      Get Your Free Mobile Number Report Now
    </h2>
  </div>
  <form className="p-6 space-y-4">
    {/* Name Input */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#724121]"
      />
    </div>

    {/* Phone Number Input */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
      <input
        type="tel"
        placeholder="Enter your phone number"
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#724121]"
      />
    </div>

    {/* Date of Birth */}
    <div className="flex gap-4">
      <div className="w-1/3">
        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
        <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#724121]">
          <option>DD</option>
          {[...Array(31)].map((_, i) => (
            <option key={i}>{i + 1}</option>
          ))}
        </select>
      </div>
      <div className="w-1/3">
        <label className="block text-sm font-medium text-gray-700 mb-1">Month</label>
        <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#724121]">
          <option>MM</option>
          {[
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
          ].map((month, i) => (
            <option key={i} value={i + 1}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <div className="w-1/3">
        <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
        <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#724121]">
          <option>YY</option>
          {Array.from({ length: 100 }, (_, i) => 2025 - i).map((year) => (
            <option key={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-[#724121] text-white font-semibold py-2 rounded-md hover:bg-[#F46333] transition"
    >
      Get Your Free Mobile Number Report Now
    </button>
  </form>
</div>

    </div>
  );
};

export default MobileCalForm;

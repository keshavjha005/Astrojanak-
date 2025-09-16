import React from "react";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import HoroScopeCards from "./HoroScopeCards";
import PromoBanner from "./PromoBanner";

const HoroScope = () => {
  const [tabs] = useState([
    { name: "Daily Horoscope", component: <HoroScopeCards /> },
    { name: "Monthly Horoscope", component: <HoroScopeCards /> },
    { name: "Yearly Horoscope", component: <HoroScopeCards /> },
  ]);
  return (
    <div className="py-20">
      {/* Banner  */}
      <div
        style={{
          background:
            'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg10.jpg")',
          backgroundPosition: "center",
        }}
        className="relative bg-black text-white "
        id="banner"
      >
        {/* Main Section Content */}
        <div className="relative z-10 py-24 text-center">
          <h1 className="text-4xl font-bold">Horoscope</h1>
          <p className="mt-4 mb-6">Home 🡆 Horoscope</p>
        </div>
      </div>
      {/* tab */}
      <Tab.Group>
        {/* Tab Navigation */}
        <Tab.List className="flex flex-wrap justify-center gap-3 px-4 py-6 pb-10">
          {tabs.map((tab, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                `px-5 py-2.5 text-sm sm:text-base font-semibold rounded-full transition duration-200 ${
                  selected
                    ? "bg-[#F46333] text-white shadow-md"
                    : "text-[#724121] hover:bg-orange-100 hover:text-[#F46333]"
                }`
              }
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List>

        {/* Tab Content */}
        <Tab.Panels className="w-full">
          {tabs.map((tab, idx) => (
            <Tab.Panel key={idx} className="w-full">
              {tab.component}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <div className="pt-20">
        <PromoBanner />
      </div>
    </div>
  );
};

export default HoroScope;

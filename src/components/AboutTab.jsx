import { Tab } from "@headlessui/react";
import { useState } from "react";
import OurMotto from "./OurMotto";
import WhoBelieveIn from "./WhoBelieveIn";
import WhyAstroArun from "./WhyAstroArun";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabBar() {
  const [tabs] = useState([
    { name: "Our Motto", component: <OurMotto /> },
    { name: "Who Believe In", component: <WhoBelieveIn /> },
    { name: "Why Astro Arun", component: <WhyAstroArun /> },
  ]);

  return (
    <div
      style={{
        background:
          'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg7.jpg")',
      }}
      className="w-full py-10"
    >
      <Tab.Group>
        {/* Tab Navigation */}
        <Tab.List className="flex flex-wrap justify-center gap-3 px-4 py-4">
          {tabs.map((tab, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                classNames(
                  "px-5 py-2.5 text-sm sm:text-base font-semibold rounded-full transition duration-200",
                  selected
                    ? "bg-[#F46333] text-white shadow-md"
                    : " text-[#724121] hover:bg-orange-100 hover:text-[#F46333]"
                )
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
    </div>
  );
}

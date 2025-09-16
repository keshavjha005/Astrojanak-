import React from "react";
import {
  BadgeCheck,
  Gem,
  Award,
  Percent,
  ClipboardCheck,
  Network,
} from "lucide-react";

const features = [
  { icon: <BadgeCheck size={36} />, title: "Licensed", subtitle: "Guide" },
  { icon: <Gem size={36} />, title: "Gemstone", subtitle: "Activation" },
  { icon: <Award size={36} />, title: "Authentic", subtitle: "Products" },
  { icon: <Percent size={36} />, title: "Best", subtitle: "Pricing" },
  { icon: <ClipboardCheck size={36} />, title: "Astrologically", subtitle: "Verified" },
  { icon: <Network size={36} />, title: "Wide Variety", subtitle: "Of Products" },
];

const FeatureIconsSection = () => {
  return (
    <section className=" w-[80%] mx-auto pt-10 pb-20">
      <div className="max-w-7xl bg-[#8c2a21] py-10 px-4 rounded-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-6 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div className="bg-white text-[#8c2a21] rounded-full p-8">
              {feature.icon}
            </div>
            <div className="text-xl font-medium leading-tight">
              <p>{feature.title}</p>
              <p>{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureIconsSection;

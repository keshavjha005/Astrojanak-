import React from "react";
import {
  HeartCrack,
  Briefcase,
  IndianRupee,
  Heart,
  FileSearch,
  Home,
} from "lucide-react";

const problems = [
  {
    icon: <HeartCrack className="w-10 h-10 text-white" />,
    title: "Relationship Problems",
    description:
      "Are you struggling to develop & maintain healthy relationships with your family and loved ones? Know about your life partner in your kundli report.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-white" />,
    title: "Business Problems",
    description:
      "Struggling to achieve business goals? Overcome losses, financial challenges. Earn money with your finance analysis details in your kundli report.",
  },
  {
    icon: <IndianRupee className="w-10 h-10 text-white" />,
    title: "Financial Troubles",
    description:
      "Hard to make ends meet? Discover effective financial solutions in your kundli & analysis report by time & date of birth.",
  },
  {
    icon: <Heart className="w-10 h-10 text-white" />,
    title: "Love Troubles",
    description:
      "Lacking love from your partner? Feeling unloved & unhappy in your relationship? Get insights in kundli report.",
  },
  {
    icon: <FileSearch className="w-10 h-10 text-white" />,
    title: "Career Prospects",
    description:
      "Struggling in your job or exams? Get complete career analysis to ace exams & land secure jobs with kundli analysis.",
  },
  {
    icon: <Home className="w-10 h-10 text-white" />,
    title: "Home And Luxury",
    description:
      "Longing for luxury or home harmony? Get insights & in-depth analysis in your kundli report.",
  },
];

const KundliProblemCards = () => {
  return (
    <section style={{background : 'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg3.jpg")'}} className="py-20 px-4 bg-gradient-to-b from-orange-400 to-yellow-200">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {problems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
          >
            <div className="bg-[#724121] p-4 rounded-full mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-[#724121] mb-2">
              {item.title}
            </h3>
            <p className="text-[#724121] text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KundliProblemCards;

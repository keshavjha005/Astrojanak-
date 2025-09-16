import React, { useState } from "react";
import { Telescope } from "lucide-react";

const Journey = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      style={{
        background:
          'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg2.jpg")',
        backgroundPosition: "left",
      }}
      className="text-[#724121] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center w-[90%]">
        {/* Video Thumbnail */}
        <div className="w-full md:w-1/2">
          <div
            className="cursor-pointer relative group overflow-hidden rounded-2xl shadow-lg transition-all hover:scale-105 duration-300 aspect-video"
            onClick={() => setIsOpen(true)}
          >
            <img
              src="https://astroarunpandit.org/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-04-at-18.40.40_f36d3c1a.jpg"
              alt="Astro Arun Pandit"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <svg
                className="w-16 h-16 text-white group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-bold mb-4 leading-snug">
            Astrology: Your Guide To Life's Journey & Path To Success!
          </h2>
          <p className="text-sm text-[#724121] leading-relaxed mb-6">
            Astro Arun Pandit is a renowned astrologer dedicated to helping you
            unlock your life's full potential. With deep knowledge of astrology
            and years of experience, he guides individuals through the twists
            and turns of destiny. Whether it’s your career, relationships, or
            health – astrology offers clarity and direction for a more
            successful future.
          </p>

          {/* Legacy Section */}
          <div className="flex items-center flex-wrap gap-4">
            <div className="rounded-full border border-gray-200 p-4 shrink-0">
              <Telescope className="w-10 h-10 text-[#724121]" />
            </div>

            <p className="text-5xl font-bold text-[#F46333] leading-tight shrink-0">
              50<sup>+</sup>
            </p>

            <div className="min-w-[200px]">
              <p className="text-sm text-[#724121]">Years Of Legacy With</p>
              <p className="text-lg font-semibold text-[#724121]">
                Horoscope, Kundali, And Predictions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden w-[90%] md:w-[800px] shadow-2xl relative">
            <button
              className="absolute top-2 right-2 text-3xl text-white bg-black/70 rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-black"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <div className="aspect-video w-full h-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/lqVwy39qdhg?si=Dch_j0ZWvuVXaC1E"
                title="Astro Arun Pandit Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Journey;

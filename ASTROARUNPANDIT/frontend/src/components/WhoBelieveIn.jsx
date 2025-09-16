import React, { useState, useEffect } from "react";

const WhoBelieveIn = () => {
  const [whoBelieveUsContent, setWhoBelieveUsContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWhoBelieveUsContent = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/about");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Assuming the API returns an object with a 'who_believe_us' key
        setWhoBelieveUsContent(data.who_believe_us || "Content not available.");
      } catch (err) {
        setError(err);
        setWhoBelieveUsContent("Failed to load content. Please try again later.");
        console.error("Error fetching 'Who Believe In Us' content:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWhoBelieveUsContent();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section className=" py-16 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative sm:w-100 sm:h-100 rounded-full overflow-hidden border-8 shadow-lg">
            <img
              src="https://astroarunpandit.org/wp-content/uploads/2022/03/Untitled-design-11-1-1-1.png.webp"
              alt="Astro Arun Pandit"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="group relative overflow-hidden bg-[#F96F42] text-white transition-all duration-300 rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-xl hover:scale-[1.02] w-full flex-1 text-center lg:text-left">
          <div
            className="absolute w-70 right-0 animate-spin-md brightness-0 invert inset-0 bg-cover bg-center mx-auto transition-opacity duration-300 z-0"
            style={{
              backgroundImage: `url('https://kamleshyadav.com/html/astrology/version-3/assets/images/hand_bg.png')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h2 className="text-4xl font-bold mb-6">Who Do We Believe In?</h2>
          <p className="text-white leading-relaxed text-lg">
            {loading ? (
              <p className="text-center">Loading content...</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: whoBelieveUsContent }} />
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoBelieveIn;

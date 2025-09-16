import React, { useState, useEffect } from "react";
import Journey from "../components/Journey";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutTab from "../components/AboutTab";
import ConsulationCallForm from "../components/ConsulationCallForm";
import TestimonialSection from "../components/TestimonialSection";

const About = () => {
  const [aboutContent, setAboutContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/about");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Assuming the API returns an array or object where about_content is directly accessible
        // If the API returns an array, you might need to pick the first item, e.g., data[0].about_content
        setAboutContent(data.about_content || "Content not available.");
      } catch (err) {
        setError(err);
        setAboutContent("Failed to load content. Please try again later.");
        console.error("Error fetching about content:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutContent();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section className="text-[#724121]">
      <div
        style={{
          background:
            'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg10.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover", // Ensure the background covers the area
        }}
        className="relative bg-black text-white "
        id="banner"
      >
        {/* Main Section Content */}
        <div className="relative z-10 py-24 text-center">
          <h1 className="text-4xl font-bold">About us</h1>
          <p className="mt-4 mb-6">Home 🡆 About Us</p>
        </div>
      </div>

      {/* About us Section */}
      <div
        style={{
          background:
            'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg3.jpg")',
          backgroundSize: 'cover', // Ensure the background covers the area
        }}
        className="px-10 pb-20 mx-auto pt-16"
      >
        <div className="space-y-8 w-[80%] mx-auto text-justify leading-relaxed ">
          {loading ? (
            <p className="text-center">Loading about content...</p>
          ) : (
            // Render the fetched content directly. Be cautious with HTML content from API.
            // If the content contains HTML, you might need dangerouslySetInnerHTML.
            // For plain text, direct rendering is fine.
            <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
          )}
        </div>
      </div>
      <Journey />
      <WhyChooseUs />
      <AboutTab />
      <TestimonialSection />
      <ConsulationCallForm />
    </section>
  );
};

export default About;

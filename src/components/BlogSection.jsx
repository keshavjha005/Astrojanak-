import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const blogs = [
  {
    title: "2025: मंगल राजा ग्रह और तीनमुखी रुद्राक्ष का वर्ष",
    img: "https://astroarunpandit.org/wp-content/uploads/2025/03/mangal-raja-768x513.png",
    link: "#",
  },
  {
    title: "How To Read The Sun Line: A Palmistry Expert’s Guide",
    img: "https://astroarunpandit.org/wp-content/uploads/2025/03/Sun-Line-in-Palmistry-768x513.png",
    link: "#",
  },
  {
    title: "Head Line Palmistry: What Your Palm Says About Your Mind",
    img: "https://astroarunpandit.org/wp-content/uploads/2025/04/head-line-768x513.png",
    link: "#",
  },
  {
    title: "Children Lines In Palmistry: What Your Palm Says About Parenthood",
    img: "https://astroarunpandit.org/wp-content/uploads/2025/04/Children-Line-in-Palmistry-768x513.jpg",
    link: "#",
  },
];

const BlogCarousel = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.2, spacing: 24 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 4, spacing: 28 },
      },
    },
  });

  return (
    <section style={{background : 'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg6.jpg")'}} className="pt-16 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#724121] mb-8">Latest Blog Posts</h2>
        <div ref={sliderRef} className="keen-slider w-full h-85 mb-10">
          {blogs.map((blog, i) => (
            <div key={i} className="keen-slider__slide min-w-0">
              <div className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-md sm:text-lg font-semibold text-[#724121] line-clamp-1 h-14">
                    {blog.title}
                  </h3>
                  <a
                    href={blog.link}
                    className="text-[#F46333] font-medium inline-flex items-center mt-2 hover:underline"
                  >
                    Read More <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;

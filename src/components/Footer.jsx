import React from "react";
import { Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#724121] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Premium Services */}
        <div>
          <h4 className="font-bold mb-4 text-white text-lg">
            Premium Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#F46333] transition">
                Premium Personalized Kundli
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F46333] transition">
                Book Consultation Call
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F46333] transition">
                Kundali Matching
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4 text-white text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#F46333] transition">
                Daily Horoscope
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F46333] transition">
                Daily Panchang
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F46333] transition">
                Numerology Prediction
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F46333] transition">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F46333] transition">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F46333] transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h4 className="font-bold mb-4 text-white text-lg">Other Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#F46333] transition">
                Help
              </a>
            </li>
            <li>
              <Link
                to="terms-and-services"
                className="hover:text-[#F46333] transition"
              >
                Terms & Services
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-[#F46333] transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="refund-policy" href="#" className="hover:text-[#F46333] transition">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-2">
          <h4 className="font-bold mb-4 text-white text-lg">
            Subscribe To Our Newsletter
          </h4>
          <form className="flex flex-col space-y-3">
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border-1 border-gray-100 rounded-l-md focus:outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md">
                →
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm text-gray-200">
            Astro Arun Pandit is the best astrologer in India in the field of
            Astrology, Numerology & Palmistry. Helping people solve problems
            related to jobs, health, marriage, love, career, and business for
            49+ years.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-[#c44] pt-6 text-center text-sm text-gray-300">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} CloudTrains Technologies. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-[#F46333] transition">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-[#F46333] transition">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-[#F46333] transition">
            <Youtube size={20} />
          </a>
          <a href="#" className="hover:text-[#F46333] transition">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-[#F46333] transition">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white text-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-25 -mt-2 w-auto object-contain" />
        </Link>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8 font-medium">
          <Link to="/" className="hover:text-[#F46333] transition">Home</Link>
          <Link to="/about" className="hover:text-[#F46333] transition">About</Link>
          <Link to="/premium-kundli" className="hover:text-[#F46333] transition">Premium Personalized Kundli</Link>
          <Link to="/panchang" className="hover:text-[#F46333] transition">Panchang</Link>
          
          <div className="relative group">
            <button className="hover:text-[#F46333] transition">
              Free Calculation
            </button>
            <div className="absolute top-full left-0 bg-white text-black rounded shadow-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 min-w-[250px] z-40">
              <Link to="/numerology" className="block px-4 py-2 hover:bg-gray-100">Numerology Calculation</Link>
              <Link to="/mobile-cal" className="block px-4 py-2 hover:bg-gray-100">Mobile Number Calculation</Link>
              <Link to="/name-cal" className="block px-4 py-2 hover:bg-gray-100">Name Calculation</Link>
            </div>
          </div>

          <Link to="/blog" className="hover:text-[#F46333] transition">Blog</Link>
          <Link to="/contact">
            <button className="hover:bg-[#724121] bg-[#F46333] px-4 py-2 rounded text-white transition">
              Contact Us
            </button>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white text-black px-4 pb-6 pt-2 space-y-3 text-base shadow-md">
          <Link to="/" className="block hover:text-[#F46333] transition">Home</Link>
          <Link to="/about" className="block hover:text-[#F46333] transition">About</Link>
          <Link to="/premium-kundli" className="block hover:text-[#F46333] transition">Premium Personalized Kundli</Link>
          <Link to="/panchang" className="block hover:text-[#F46333] transition">Panchang</Link>

          <details className="group">
            <summary className="cursor-pointer hover:text-[#F46333] transition">
              Free Calculation
            </summary>
            <div className="pl-4 mt-2 space-y-2">
              <Link to="/numerology" className="block hover:text-[#F46333] transition">Numerology Calculation</Link>
              <Link to="/lucky-mobile" className="block hover:text-[#F46333] transition">Mobile Number Calculation</Link>
              <Link to="/main-calc" className="block hover:text-[#F46333] transition">Male Calculation</Link>
            </div>
          </details>

          <Link to="/blog" className="block hover:text-[#F46333] transition">Blog</Link>
          <Link to="/contact">
            <button className="w-full mt-2 hover:bg-[#724121] bg-[#F46333] px-4 py-2 rounded text-white transition">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const ContactUs = () => {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/contact");
        const data = await res.json();
        setContact({
          name: data[0].fullname || "",
          email: data[0].email || "",
          phone: data[0].phone_no || "",
        });
        setLoading(false);
      } catch (err) {
        console.error("Error fetching contact info:", err);
        setLoading(false);
      }
    };

    fetchContact();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl">
        <h2 className="text-4xl font-bold mb-4 text-[#724121] text-center">Contact Information</h2>

        <p className="text-gray-800 text-center mb-8">
          In case you have any query, trouble, or problems regarding our products and services,
          please feel free to contact us at{" "}
          <span className="text-[#724121] font-medium">@astrojanak.com</span>.
        </p>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          <div className="space-y-4 text-lg text-gray-800 bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div>
              <span className="font-semibold text-[#724121]">Name:</span> {contact.name}
            </div>
            <div>
              <span className="font-semibold text-[#724121]">Email:</span> {contact.email}
            </div>
            <div>
              <span className="font-semibold text-[#724121]">Phone:</span> {contact.phone}
            </div>
          </div>
        )}

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Follow us on</p>
          <div className="flex justify-center space-x-5 text-2xl text-[#724121]">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className=" p-10 max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-[#724121] mb-4">Thank You!</h1>

        <p className="text-lg text-gray-800 mb-6">
          Your Kundali has been successfully purchased 🙏
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          You will receive your detailed Kundali report within
          <span className="font-semibold text-[#724121]"> 7 working days</span> via your registered Email or WhatsApp.
          <br />
          <br />
          For any queries, feel free to contact our support at{" "}
          <span className="text-[#724121] font-medium">support@astroarunpandit.org</span>.
        </p>

        <Link
          to="/"
          className="mt-4 inline-block bg-[#724121] text-white px-6 py-2 rounded-lg hover:bg-[#5e3419] transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;

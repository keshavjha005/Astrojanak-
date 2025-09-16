import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCity,
  FaMapMarkedAlt,
} from "react-icons/fa";

const ConsulationCallForm = () => {
  // State variables for form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [message, setMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', 'loading'
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setSubmissionStatus("loading");
    setErrorMessage("");

    // Map consultation type to 'video', 'call', or 'message' as per DB schema
    let dbConsultationType = '';
    if (consultationType === "Call Consultation") {
      dbConsultationType = "call";
    } else if (consultationType === "Video Consultation") {
      dbConsultationType = "video";
    } else {
      // Default or handle other cases if 'message' is an option
      dbConsultationType = "message"; // Assuming 'message' if neither call nor video
    }


    const formData = {
      full_name: fullName,
      email: email,
      phone_number: phoneNumber,
      city: city,
      state: state,
      consultation_type: dbConsultationType,
      message: message, // This field is not in the provided DB schema, but included for completeness
    };

    try {
      const response = await fetch("http://localhost:5000/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        // Clear form fields on successful submission
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setCity("");
        setState("");
        setConsultationType("");
        setMessage("");
      } else {
        const errorData = await response.json();
        setSubmissionStatus("error");
        setErrorMessage(errorData.message || "Failed to book consultation. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
      setErrorMessage("Network error or server is unreachable. Please try again later.");
    }
  };

  return (
    <div
      style={{
        background: 'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg6.jpg")',
        backgroundSize: 'cover', // Ensure the background covers the area
        backgroundPosition: 'center', // Center the background image
      }}
      className="pt-6 pb-12 px-4 sm:px-6 lg:px-20 min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-5xl p-10 "> {/* Added rounded-lg, shadow-xl, bg-white, bg-opacity-90 */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#724121]">
            Book Consultation Call From The Best Astrologer In India!
            
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 text-[#724121]">
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-2 top-4 text-[#724121]" />
            <input
              type="text"
              placeholder="Name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full pl-10 py-3 border-0 border-b-2 border-gray-300 focus:border-[#F46333] focus:outline-none transition bg-transparent"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-2 top-4 text-[#724121]" />
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 py-3 border-0 border-b-2 border-gray-300 focus:border-[#F46333] focus:outline-none transition bg-transparent"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <FaPhoneAlt className="absolute left-2 top-4 text-[#724121]" />
            <input
              type="tel"
              required
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full pl-10 py-3 border-0 border-b-2 border-gray-300 focus:border-[#F46333] focus:outline-none transition bg-transparent"
            />
          </div>

          {/* City Dropdown */}
          <div className="relative">
            <FaCity className="absolute left-2 top-4 text-[#724121]" />
            <select
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-transparent pl-10 py-3 border-0 border-b-2 border-gray-300 focus:border-[#F46333] focus:outline-none transition"
            >
              <option value="">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Kolkata">Kolkata</option>
            </select>
          </div>

          {/* State Dropdown */}
          <div className="relative">
            <FaMapMarkedAlt className="absolute left-2 top-4 text-[#724121]" />
            <select
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full bg-transparent pl-10 py-3 border-0 border-b-2 border-gray-300 focus:border-[#F46333] focus:outline-none transition"
            >
              <option value="">Select State</option>
              <option value="Delhi">Delhi</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Karnataka">Karnataka</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>

          {/* Consultation Dropdown */}
          <div className="relative">
            <FaMapMarkedAlt className="absolute left-2 top-4 text-[#724121]" />
            <select
              required
              value={consultationType}
              onChange={(e) => setConsultationType(e.target.value)}
              className="w-full bg-transparent pl-10 py-3 border-0 border-b-2 border-gray-300 focus:border-[#F46333] focus:outline-none transition"
            >
              <option value="">Select Consultation</option>
              <option value="Call Consultation">Call Consultation</option>
              <option value="Video Consultation">Video Consultation</option>
            </select>
          </div>

          {/* Textarea */}
          <div>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-28 border-0 border-b-2 border-gray-300 pl-3 py-3 resize-none focus:border-[#F46333] focus:outline-none transition bg-transparent"
            ></textarea>
          </div>

          {/* Submission Status Message */}
          {submissionStatus === "loading" && (
            <p className="text-center text-blue-600">Submitting...</p>
          )}
          {submissionStatus === "success" && (
            <p className="text-center text-green-600">
              Consultation booked successfully!
            </p>
          )}
          {submissionStatus === "error" && (
            <p className="text-center text-red-600">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#724121] hover:bg-[#F46333] text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-transform transform hover:scale-105"
              disabled={submissionStatus === "loading"} // Disable button while submitting
            >
              {submissionStatus === "loading" ? "Booking..." : "Book Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsulationCallForm;

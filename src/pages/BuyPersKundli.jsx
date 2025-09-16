import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaLanguage,
} from "react-icons/fa";

const BuyPersKundli = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    dob: "",
    birth_time: "",
    gender: "",
    country: "",
    state: "",
    city_of_birth: "",
    birth_place_pin_code: "",
    preferred_language: "",
    billing_country: "",
    billing_state: "",
    billing_city: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  let paymentHandled = false;

  try {
    const orderResponse = await axios.post("http://localhost:5000/api/order", {
      amount: 100,
      currency: "INR",
      receipt: `receipt#${Date.now()}`,
    });

    const { order } = orderResponse.data;

    const options = {
      key: "rzp_test_x4yXzG7C3BELm0",
      amount: order.amount,
      currency: order.currency,
      name: "Kundli App",
      description: "Buy Personalized Kundli",
      order_id: order.id,
      handler: async function (response) {
        paymentHandled = true;
        try {
          const payload = {
            ...formData,
            payment_status: "paid",
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };

          await axios.post("http://localhost:5000/api/kundali", payload);
          navigate("/thankyou")
        } catch (error) {
          alert("Payment succeeded, but Kundli creation failed.");
        }
      },
      prefill: {
        name: formData.full_name,
        email: formData.email,
        contact: formData.phone_number,
      },
      notes: {
        address: formData.address,
      },
      theme: { color: "#3399cc" },
      // ✅ THIS IS VERY IMPORTANT
      modal: {
        ondismiss: async function () {
          if (!paymentHandled) {
            try {
              await axios.post("http://localhost:5000/api/unpaid", {
                ...formData,
                payment_status: "closed",
              });
              alert("❌ Payment was not completed. Details saved.");
            } catch (err) {
              alert("❌ Payment not completed. Couldn't save details.");
            }
          }
        },
      },
    };

    const rzp = new window.Razorpay(options);

    // ✅ Better way to detect failure (fallback)
    rzp.on("payment.failed", async function (response) {
      paymentHandled = true;
      try {
        await axios.post("http://localhost:5000/api/unpaid", {
          ...formData,
          payment_status: "failed",
          error: response.error, // optional: save error reason
        });
        alert("❌ Payment failed. Details saved.");
      } catch (err) {
        alert("❌ Payment failed, and we couldn't save your info.");
      }
    });

    rzp.open();
  } catch (err) {
    alert("❌ Something went wrong while creating order.");
  }
};


  return (
    <div
      style={{
        background:
          'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg4.jpg")',
      }}
      className="min-h-screen py-12 px-4 md:px-20"
    >
      <div className="p-10 rounded-3xl shadow-xl max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#724121]">
            Buy Your Premium Personalized Kundli
          </h2>
          <p className="text-[#724121] max-w-xl mx-auto text-sm mt-4">
            Please provide accurate birth details. The report will be delivered
            within 3 working days.
            <br />
            Contact Us: +91-7236936903 Support Portal
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 text-[#724121] md:grid-cols-2 gap-6"
        >
          <Input name="full_name" icon={<FaUser />} value={formData.full_name} onChange={handleChange} placeholder="Name *" />
          <Input name="email" icon={<FaEnvelope />} type="email" value={formData.email} onChange={handleChange} placeholder="Email *" />
          <Input name="phone_number" icon={<FaPhoneAlt />} type="tel" value={formData.phone_number} onChange={handleChange} placeholder="Phone *" />
          <Input name="dob" icon={<FaCalendarAlt />} type="date" value={formData.dob} onChange={handleChange} placeholder="Date of Birth *" />
          <Input name="birth_time" icon={<FaClock />} type="time" value={formData.birth_time} onChange={handleChange} placeholder="Time of Birth *" />
          <Select name="gender" icon={<FaUser />} value={formData.gender} onChange={handleChange} options={["Male", "Female", "Other"]} placeholder="Gender *" />
          <Select name="country" icon={<FaMapMarkerAlt />} value={formData.country} onChange={handleChange} options={["India", "Other"]} placeholder="Country *" />
          <Select name="state" icon={<FaMapMarkerAlt />} value={formData.state} onChange={handleChange} options={["Delhi", "Uttar Pradesh", "Maharashtra", "Other"]} placeholder="State *" />
          <Input name="city_of_birth" icon={<FaMapMarkerAlt />} value={formData.city_of_birth} onChange={handleChange} placeholder="City of Birth *" />
          <Input name="birth_place_pin_code" icon={<FaMapMarkerAlt />} value={formData.birth_place_pin_code} onChange={handleChange} placeholder="Birth Place Pin Code *" />
          <Select name="preferred_language" icon={<FaLanguage />} value={formData.preferred_language} onChange={handleChange} options={["English", "Hindi"]} placeholder="Preferred Language *" />
          <Select name="billing_country" icon={<FaMapMarkerAlt />} value={formData.billing_country} onChange={handleChange} options={["India", "Other"]} placeholder="Billing Country *" />
          <Input name="billing_state" icon={<FaMapMarkerAlt />} value={formData.billing_state} onChange={handleChange} placeholder="Billing State *" />
          <Input name="billing_city" icon={<FaMapMarkerAlt />} value={formData.billing_city} onChange={handleChange} placeholder="Billing City *" />
          <Textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address (Optional)" />

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#724121] to-[#F46333] cursor-pointer text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition duration-300"
            >
              Create your kundli now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Input component
const Input = ({ icon, type = "text", name, value, onChange, placeholder }) => (
  <div className="relative">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 pl-10 bg-gray-100 border border-gray-300 rounded-xl text-[#724121] placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F46333] transition duration-200"
    />
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#724121]">{icon}</div>
  </div>
);

// Select component
const Select = ({ icon, name, value, onChange, options, placeholder }) => (
  <div className="relative">
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 pl-10 bg-gray-100 border border-gray-300 rounded-xl text-[#724121] placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F46333] transition duration-200"
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((option, idx) => (
        <option key={idx} value={option}>{option}</option>
      ))}
    </select>
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#724121]">{icon}</div>
  </div>
);

// Textarea component
const Textarea = ({ name, value, onChange, placeholder }) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl text-[#724121] placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F46333] transition duration-200 md:col-span-2 resize-none h-28"
  />
);

export default BuyPersKundli;

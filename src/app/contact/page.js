"use client";

import { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [phoneError, setPhoneError] = useState("");
  const phoneWrapperRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setPhoneError("");

    try {
      const pn = parsePhoneNumberFromString(formData.phone || "");
      if (!pn || !pn.isValid()) {
        setPhoneError("Please enter a valid phone number.");
        setSubmitStatus("error");
        // Scroll into view on mobile if not visible
        try {
          phoneWrapperRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
          // Try to focus the input
          const el = document.getElementById("phone");
          if (el) el.focus();
        } catch {}
        return;
      }
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
        });
        setPhoneError("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans min-h-screen bg-[#F8FAF9]">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2E6B4D] to-[#23523A] text-white py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-[#CDE2D8] max-w-3xl mx-auto">
            Get in touch with us for product inquiries, private label, or logistics. 
            We're here to help you with all your dried fruit needs.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1F2937] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2E6B4D] focus:border-transparent text-black placeholder:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1F2937] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2E6B4D] focus:border-transparent text-black placeholder:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#1F2937] mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2E6B4D] focus:border-transparent text-black placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">
                  Phone Number
                </label>
                <div ref={phoneWrapperRef} className={`${phoneError ? "ring-2 ring-red-500 rounded-md animate-shake" : ""}`}>
                  <PhoneInput
                    country={"tr"}
                    value={formData.phone}
                    onChange={(value) => {
                      setFormData((p) => ({ ...p, phone: value }));
                      if (phoneError) setPhoneError("");
                    }}
                    enableSearch
                    inputProps={{ required: true, name: "phone", id: "phone", "aria-invalid": !!phoneError, "aria-describedby": phoneError ? "phone-error" : undefined }}
                    inputClass="!text-black"
                    inputStyle={{ width: "100%", height: "48px", color: "#000", backgroundColor: "#fff", borderColor: phoneError ? "#ef4444" : "#d1d5db" }}
                    buttonStyle={{ borderTopLeftRadius: "0.375rem", borderBottomLeftRadius: "0.375rem" }}
                    dropdownStyle={{ zIndex: 60, color: "#000", backgroundColor: "#fff" }}
                    searchStyle={{ color: "#000", backgroundColor: "#fff" }}
                    masks={{ tr: "... ... .. .." }}
                  />
                </div>
                {phoneError && (
                  <p id="phone-error" className="mt-2 text-sm text-red-600">{phoneError}</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-[#1F2937] mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2E6B4D] focus:border-transparent text-black placeholder:text-gray-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-[#1F2937] mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2E6B4D] focus:border-transparent text-black placeholder:text-gray-500"
              />
            </div>

            {/* Honeypot field */}
            <input
              type="text"
              name="website"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                Sorry, there was an error sending your message. Please try again or contact us directly.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#2E6B4D] text-white py-3 px-6 rounded-md hover:bg-[#23523A] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

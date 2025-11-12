"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* White spacer section */}
      <div className="h-24 bg-white"></div>
      <section id="contact" className="py-12 lg:py-16 bg-gradient-to-br from-[#FF9A4D] via-[#FFCC99] to-[#FFD9B3]">
        <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Section - Image */}
          <div className="hidden lg:block flex items-center lg:ml-16">
            <div className="relative rounded-lg overflow-hidden max-w-sm w-full">
              <ImageWithFallback
                src={`${import.meta.env.BASE_URL}assets/people.png`}
                alt="Professional contact person working on laptop"
                className="w-full h-full object-cover aspect-[4/5] rounded-lg"
              />
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full lg:-ml-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E3A5F] mb-8">
              Contact Us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Row: First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="sr-only">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name*"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB366] focus:border-transparent bg-white text-black placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="sr-only">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB366] focus:border-transparent bg-white text-black placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Second Row: Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB366] focus:border-transparent bg-white text-black placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB366] focus:border-transparent bg-white text-black placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Message Text Area */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB366] focus:border-transparent bg-white text-black placeholder-gray-400 resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white uppercase font-semibold py-4 px-8 rounded-lg transition-all"
                >
                  SUBMIT
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

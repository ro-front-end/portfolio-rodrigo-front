"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_uu7uuhk",
        "template_wlxuiqt",
        formData,
        "MNNTW42GgEOepd-Nw"
      )
      .then(
        (result) => {
          alert("Thanks for contacting me. I'll contact you ASAP.");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          alert(`Error sending message: ${error.text}`);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        required
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        className="px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
      />
      <input
        required
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        className="px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
      />
      <textarea
        required
        type="text"
        name="message"
        id="message"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        className="px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-blue-500 resize-none"
      ></textarea>
      <button
        type="submit"
        className="bg-gradient-to-r from-orange-500 to-amber-400 text-black font-semibold py-2 rounded-full hover:scale-105 transition duration-300 ease-in-out"
      >
        Send Message
      </button>
    </form>
  );
}

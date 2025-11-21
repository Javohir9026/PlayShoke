"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "react-toastify";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleYubor = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.name && formData.email && formData.message) {
      if (emailRegex.test(formData.email)) {
        toast.success("Xabar muvaffaqiyatli yuborildi!", {
          style: {
            padding: "12px",
            color: "#FFFFFF",
            background: "#232d47",
            borderRadius: "12px",
            fontWeight: "bold",
            width: "300px",
            minHeight: "30px",
            height: "50px",
            fontSize: 13,
          },
        });
      } else {
        return;
      }
    } else {
      return;
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col gap-10">
      <h1 className="text-3xl font-bold text-center text-white">Bog'lanish</h1>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 bg-[#0C101A] p-6 rounded-xl shadow-md flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <MapPin className="text-red-500" />
            <span className="text-white">Xorazm, O'zbekiston</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-red-500" />
            <span className="text-white">+998 97 606 90 26</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-red-500" />
            <span className="text-white">amanbayevjavohir94@email.com</span>
          </div>
        </div>

        <div className="flex-1 bg-[#0C101A] p-6 rounded-xl shadow-md">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Ismingiz"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Emailingiz"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <textarea
              name="message"
              placeholder="Xabar matni"
              value={formData.message}
              onChange={handleChange}
              className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none h-32"
              required
            ></textarea>
            <button
              type="submit"
              onClick={() => handleYubor()}
              className="bg-red-500 text-black font-semibold py-2 rounded-md hover:bg-red-600 transition"
            >
              Yuborish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;

"use client";

import React, { useState, FormEvent } from "react";
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import dynamic from 'next/dynamic';

// Icons
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { IoMailOpenOutline } from "react-icons/io5";

// Styles
import 'react-toastify/dist/ReactToastify.css';

// Dynamic imports
const ToastContainer = dynamic(
  () => import('react-toastify').then((mod) => mod.ToastContainer),
  { ssr: false }
);

// Form validation
const validateForm = (data: typeof initialFormState) => {
  if (!data.name.trim()) return "Name is required";
  if (!data.email.trim()) return "Email is required";
  if (!data.subject.trim()) return "Subject is required";
  if (!data.message.trim()) return "Message is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Invalid email format";
  return null;
};

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const error = validateForm(formData);
    if (error) {
      toast.error(error);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_email: 'weharima.std@gmail.com',
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.success(
          <div className="flex items-center gap-3">
            <div>
              <p className="font-medium text-[#a28f65]">Message Sent Successfully</p>
              <p className="text-sm text-zinc-600">Thank you for contacting Weharima Studio</p>
            </div>
          </div>,
          {
            className: "!bg-white/95 backdrop-blur-sm !border !border-[#a28f65]/10 !rounded-lg !shadow-lg",
            progressClassName: "!bg-[#a28f65]",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
        setFormData(initialFormState);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Email send error:', error);
      toast.error(
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="font-medium text-[#a28f65]">Message Not Sent</p>
            <p className="text-sm text-zinc-600">Please try again later</p>
          </div>
          <div className="flex-shrink-0 ml-3">
          </div>
        </div>,
        {
          className: "!bg-white/95 backdrop-blur-sm !border !border-[#a28f65]/10 !rounded-lg !shadow-lg",
          progressClassName: "!bg-[#a28f65]",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#fbfaf4] to-white px-4 sm:px-6 lg:px-8 py-24">
      <ToastContainer 
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="!rounded-lg !shadow-lg !border !border-[#a28f65]/10 backdrop-blur-sm"
        closeButton={({ closeToast }) => (
          <button
            onClick={closeToast}
            className="text-zinc-400 hover:text-zinc-600 transition-colors duration-200 text-right"
          >
            ✕
          </button>
        )}
      />
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 max-w-2xl text-center mx-auto">
          <h2 className="text-[#a28f65] text-3xl sm:text-4xl font-light tracking-wide mb-4">
            Contact Us
          </h2>
          <div className="w-12 h-px bg-[#a28f65]/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border border-[#a28f65]/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-zinc-200 rounded-md focus:ring-2 
                    focus:ring-[#a28f65]/20 focus:border-[#a28f65] transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-zinc-200 rounded-md focus:ring-2 
                    focus:ring-[#a28f65]/20 focus:border-[#a28f65] transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-zinc-200 rounded-md focus:ring-2 
                    focus:ring-[#a28f65]/20 focus:border-[#a28f65] transition-colors duration-300"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-zinc-200 rounded-md focus:ring-2 
                    focus:ring-[#a28f65]/20 focus:border-[#a28f65] transition-colors duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#a28f65] text-white py-3 px-6 rounded-md 
                  hover:bg-[#8f7c57] active:bg-[#7a6a4a] 
                  transition-all duration-300 
                  disabled:opacity-50 disabled:cursor-not-allowed
                  focus:outline-none focus:ring-2 focus:ring-[#a28f65]/50
                  shadow-sm hover:shadow-md"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-[#a28f65] text-xl font-light tracking-wide mb-6">
                Our Address
              </h3>
              <div className="flex gap-4 items-start">
                <svg
                  className="shrink-0 w-5 h-5 text-[#a28f65]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="text-zinc-500 text-sm mb-2">
                    Indonesia
                  </p>
                  <address className="text-zinc-700 not-italic text-sm leading-relaxed">
                    Jl. Karet Hijau No.10, Beji Tim., Kecamatan Beji, Kota Depok, Jawa Barat 16422
                  </address>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[#a28f65] text-xl font-light tracking-wide mb-6">
                Contact Information
              </h3>
              <div className="grid gap-6">
                <div className="flex gap-4 items-start group">
                  <a href="mailto:weharima.std@gmail.com" className="text-[#a28f65] hover:text-[#8f7c57] transition-colors duration-300">
                    <IoMailOpenOutline className="w-5 h-5" />
                  </a>
                  <div>
                    <p className="text-zinc-500 text-sm mb-1">Email</p>
                    <a
                      href="mailto:weharima.std@gmail.com"
                      className="text-zinc-700 hover:text-[#a28f65] transition-colors duration-300 text-sm"
                    >
                      weharima.std@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <a href="https://www.instagram.com/weha.studio/" target="_blank" className="text-[#a28f65] hover:text-[#8f7c57] transition-colors duration-300">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <div>
                    <p className="text-zinc-500 text-sm mb-1">Instagram</p>
                    <a
                      href="https://www.instagram.com/weha.studio/"
                      target="_blank"
                      className="text-zinc-700 hover:text-[#a28f65] transition-colors duration-300 text-sm"
                    >
                      weha.studio
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <a href="https://wa.me/6281399100399" className="text-[#a28f65] hover:text-[#8f7c57] transition-colors duration-300">
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                  <div>
                    <p className="text-zinc-500 text-sm mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/6281399100399"
                      className="text-zinc-700 hover:text-[#a28f65] transition-colors duration-300 text-sm"
                    >
                      +62 813 9910 0399
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
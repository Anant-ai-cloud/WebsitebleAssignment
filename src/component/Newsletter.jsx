import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-[#e8f5e9] py-20 relative overflow-hidden font-sans">
      {/* Pink decorative squiggle - top left */}
      <div className="absolute top-10 left-12 z-10">
        <svg 
          width="140" 
          height="70" 
          viewBox="0 0 140 70" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-pink-400"
        >
          <path 
            d="M10 55 Q35 15 65 42 Q95 65 125 28" 
            stroke="currentColor" 
            strokeWidth="5" 
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Purple decorative blob - top right */}
      <div className="absolute top-8 right-12 w-40 h-40 bg-violet-400 rounded-[40%] rotate-12 opacity-90 z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">
            Subscribe to our newsletter
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto">
            To read our blog post, special news or more information
          </p>

          {/* Subscribe Button */}
          <button className="mt-10 bg-black hover:bg-gray-800 transition-colors text-white text-lg font-medium px-12 py-5 rounded-3xl shadow-md">
            Subscribe Now
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-300 w-full mb-14" />

        {/* Four Column Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          
          {/* Column 1 - Company */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-5">Company</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Home</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">About</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Services</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Column 2 - Terms & Policies */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-5">Terms &amp; Policies</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Terms &amp; Conditions</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Cookie</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Accessibility</li>
            </ul>
          </div>

          {/* Column 3 - Follow Us */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-5">Follow Us</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Instagram</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">LinkedIn</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Facebook</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Twitter</li>
            </ul>
          </div>

          {/* Column 4 - Contact Us */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="hover:text-gray-900 transition-colors cursor-pointer">1234 Example St.</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">(123) 456-7890</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">info@example.com</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">www.example.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 mt-20">
          ©2023 Example. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
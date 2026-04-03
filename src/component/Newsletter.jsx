import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-[#e8f5e9] py-16 relative overflow-hidden font-sans h-[700px]">
      
      {/* Purple decorative blob - top right */}
      <svg viewBox="-120 -120 240 240" xmlns="http://www.w3.org/2000/svg" className='w-[120px] h-[120px] absolute z-10 right-[100px]'>
                              <path d="M 102.67944646822858,0 C 98.80601059885478,35.840600806572745 -15.052598841766375,99.6649836048546 -49.13203278593297,85.0991770643758 C -83.21146673009957,70.53337052389699 -71.59115912197821,-36.98843189582124 -33.63828930843782,-58.26322616191519 C 4.314580505102569,-79.53802042800913 106.55288233760237,-35.840600806572745 102.67944646822858,0 Z" fill="#cd93ff" />
                              </svg>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-gray-900">
            Subscribe to our newsletter
          </h2>
          <p className="mt-4 text-base text-gray-600 max-w-md mx-auto">
           To make your stay special and even more memorable
          </p>

          {/* Subscribe Button */}
          <button className="mt-10 bg-black hover:bg-gray-800 transition-colors text-white text-base font-medium px-10 py-3 rounded-3xl shadow-md">
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
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Studio</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Service</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Column 2 - Terms & Policies */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-5">Terms &amp; Policies</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Terms &amp; Conditions</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Explore</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Accessibility</li>
            </ul>
          </div>

          {/* Column 3 - Follow Us */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-5">Follow Us</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Instagram</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">LinkedIn</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Youtube</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">Twitter</li>
            </ul>
          </div>

          {/* Column 4 - Contact Us */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="hover:text-gray-900 transition-colors cursor-pointer">1498w Fluton ste, STE <br />2D Chicgo, IL 63867.</li>
              
              <li className="hover:text-gray-900 transition-colors cursor-pointer">(123) 456789000</li>
              <li className="hover:text-gray-900 transition-colors cursor-pointer">info@elementum.com </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 mt-20">
          ©2023 Elementum. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
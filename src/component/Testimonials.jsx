import React from 'react';

const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 bg-white font-sans">
      {/* Title */}
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-emerald-600 tracking-tight mb-16">
        What our customer says About Us
      </h2>

      {/* Main container with scattered avatars */}
      <div className="relative mx-auto max-w-2xl h-[520px] flex items-center justify-center">
        
        {/* Central Testimonial Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-emerald-100 p-10 md:p-12 max-w-md text-center relative z-10">
          <p className="text-gray-700 text-xl leading-relaxed mb-8 italic">
            “Lorem ipsum dolor sit amet consectetur. Nibh non proin nunc sed. 
            Nibh non proin nunc sed. Nibh non proin nunc sed. Nibh non proin nunc sed. 
            Nibh non proin nunc sed. Nibh non proin nunc sed.”
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-5xl leading-none text-emerald-500">—</span>
            <span className="text-xl font-medium text-gray-900">John Doe</span>
          </div>
        </div>

        {/* Scattered Avatar 1 - Top Left */}
        <div className="absolute -left-4 top-8 w-20 h-20 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
          <img 
            src="" 
            alt="Customer 1" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Scattered Avatar 2 - Upper Left */}
        <div className="absolute -left-12 top-36 w-20 h-20 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
          <img 
            src="" 
            alt="Customer 2" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Scattered Avatar 3 - Lower Left */}
        <div className="absolute -left-8 bottom-24 w-20 h-20 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
          <img 
            src="" 
            alt="Customer 3" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Scattered Avatar 4 - Bottom Left */}
        <div className="absolute -left-14 bottom-8 w-20 h-20 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
          <img 
            src="" 
            alt="Customer 4" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Scattered Avatar 5 - Top Right */}
        <div className="absolute -right-4 top-12 w-20 h-20 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
          <img 
            src="" 
            alt="Customer 5" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Scattered Avatar 6 - Upper Right */}
        <div className="absolute -right-12 top-40 w-20 h-20 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
          <img 
            src="" 
            alt="Customer 6" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Scattered Avatar 7 - Lower Right */}
        <div className="absolute -right-8 bottom-28 w-20 h-20 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
          <img 
            src="" 
            alt="Customer 7" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Scattered Avatar 8 - Bottom Right (slightly larger for emphasis) */}
        <div className="absolute -right-10 bottom-6 w-24 h-24 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
          <img 
            src="" 
            alt="Customer 8" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
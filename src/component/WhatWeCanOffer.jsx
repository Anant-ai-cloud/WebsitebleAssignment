import React from 'react';

const WhatWeCanOffer = () => {
  return (
    <div className="max-w-3xl ml-[400px] mx-auto px-8 py-16 font-sans relative">
      {/* Red decorative curve */}
      <div className="absolute top-8 right-12 w-64 h-32">
        <svg 
          viewBox="0 0 200 100" 
          className="w-full h-full text-red-400"
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3"
        >
          <path 
            d="M10 80 Q60 20 120 45 Q160 65 190 30" 
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl font-semibold leading-none tracking-tight">
          What we{' '}
          <span className="bg-emerald-100 text-emerald-900 px-6 py-1 rounded-full inline-block -rotate-2">
            can
          </span>{' '}
          offer you!
        </h1>
        <div className="h-1 w-48 bg-amber-400 mt-4 rounded" />
      </div>

      {/* Content Rows */}
      <div className="space-y-8">
        {/* Row 1 */}
        <div className="grid grid-cols-12 items-center border-b border-gray-200 pb-8">
          <div className="col-span-4 text-gray-600 text-lg">
            Office of multiple<br />
            interest content
          </div>
          <div className="col-span-5 text-3xl font-semibold tracking-tight">
            Collaborative &amp; partnership
          </div>
          <div className="col-span-3 flex justify-end">
            <div className="text-4xl text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">
              →
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-12 items-center border-b border-gray-200 pb-8">
          <div className="col-span-4 text-gray-600 text-lg">
            The hanger US Air force<br />
            digital experimental
          </div>
          <div className="col-span-5 text-3xl font-semibold tracking-tight">
            We talk about our weight
          </div>
          <div className="col-span-3 flex justify-end">
            <div className="text-4xl text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">
              →
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-4 text-gray-600 text-lg">
            Delta faucet content,<br />
            social, digital
          </div>
          <div className="col-span-5 text-3xl font-semibold tracking-tight relative">
            Piloting digital confidence
            
          </div>
          <div className="col-span-3 flex justify-end">
            <div className="text-4xl text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">
              →
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeCanOffer;
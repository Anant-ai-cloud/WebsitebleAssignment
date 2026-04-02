import React from "react";




 function HeroSection() {
  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden mt-[200px]">

      {/* ══════════════════════════════════════
          TOP SECTION — white background
      ══════════════════════════════════════ */}
      <div className="grid grid-cols-2 min-h-[280px] bg-white relative">

        {/* Left — Headline + body + link */}
        <div className="flex flex-col justify-center px-10 pt-10 pb-16 relative z-10">

          <h1
            className="text-[28px] font-black leading-[1.18] text-[#111111] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tomorrow should<br />be better than today.
          </h1>

          <p className="text-[11.5px] text-[#999999] leading-[1.8] mb-4 max-w-[210px]">
            We are a team of strategic business advisors who have been helping
            companies grow, transform, and thrive for over two decades.
          </p>

          <a
            href="#"
            className="text-[11.5px] font-medium text-[#111111] no-underline border-b-2 border-[#e52e2e] pb-0.5 w-fit"
          >
            Read more
          </a>

          {/* ── Red triangle pair — bottom-left corner ── */}
          <div className="absolute bottom-0 left-0 z-20">
            <svg
              width="96"
              height="84"
              viewBox="0 0 96 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Large triangle pointing top-right */}
              <polygon points="0,84 58,84 0,18" fill="#e52e2e" />
              {/* Smaller semi-transparent triangle */}
              <polygon points="42,84 80,84 80,46" fill="#e52e2e" opacity="0.5" />
            </svg>
          </div>
        </div>

        {/* Right — Image with rounded bottom-left corner */}
        <div className="relative overflow-hidden rounded-bl-[80px] bg-[#cbb89e]">
          
          <img
            src="YOUR_TOP_IMAGE_URL"
            alt="Team collaborating"
            className="w-full h-full object-cover block"
          />
        </div>

      </div>

      {/* ══════════════════════════════════════
          BOTTOM SECTION — warm beige background
      ══════════════════════════════════════ */}
      <div className="grid grid-cols-2 min-h-[230px] bg-[#f4f0ea] relative">

        {/* Left — Floating circle image (overlaps top section) */}
        <div className="relative">
          <div className="absolute -top-12 left-9 w-[156px] h-[156px] rounded-full overflow-hidden border-[6px] border-white shadow-lg z-20 bg-[#bfaa8c]">
            {/* 👉 Replace src with your actual image */}
            <img
              src="YOUR_CIRCLE_IMAGE_URL"
              alt="Progress discussion"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right — Headline + body + link */}
        <div className="flex flex-col justify-center pr-10 pl-4 py-8 relative z-10">

          <h2
            className="text-[24px] font-bold leading-[1.2] text-[#111111] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            See how we can<br />help you progress
          </h2>

          <p className="text-[11.5px] text-[#999999] leading-[1.8] mb-4 max-w-[210px]">
            Our advisors work closely with leadership teams to design and
            implement strategies that drive lasting, meaningful results.
          </p>

          <a
            href="#"
            className="text-[11.5px] font-medium text-[#111111] no-underline border-b-2 border-[#e52e2e] pb-0.5 w-fit"
          >
            Read more
          </a>
        </div>

        {/* ── Red triangle pair — bottom-right corner ── */}
        <div className="absolute bottom-0 right-0 z-20">
          <svg
            width="96"
            height="84"
            viewBox="0 0 96 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Large triangle pointing top-left */}
            <polygon points="96,84 38,84 96,18" fill="#e52e2e" />
            {/* Smaller semi-transparent triangle */}
            <polygon points="54,84 16,84 16,46" fill="#e52e2e" opacity="0.5" />
          </svg>
        </div>

      </div>

    </div>
  );
}

export default HeroSection
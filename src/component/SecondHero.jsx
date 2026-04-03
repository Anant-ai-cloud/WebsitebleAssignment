import React from "react";




function HeroSection() {
  return (
    <div className="w-full max-w-4xl ml-[400px] mx-auto overflow-hidden mt-[200px] mb-[50px]">


      <div className="grid grid-cols-2 min-h-[280px] bg-white relative">

        
        <div className="flex flex-col justify-center px-10 pt-10 pb-16 relative z-10">

           <h2
            className="text-[24px] font-bold leading-[1.2] text-[#111111] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tomorrow should<br />be better than today.
          </h2>

          <p className="text-[11.5px] text-[#999999] leading-[1.8] mb-4 max-w-[210px]">
            We are a team of strategists, designers communicators, researchers.
            Togeather, we belive that progress only happens when you refuse
            to play things safe.
          </p>

          <a
            href="#"
            className="text-[11.5px] font-medium text-[#111111] no-underline border-b-2 border-[#e52e2e] pb-0.5 w-fit"
          >
            Read more
          </a>

          
        </div>

       
        <div className="relative overflow-hidden w-[270px] h-[270px]">


          <img
            src="/secondheroimg1.png"
            alt="Team collaborating"
            className="w-[230px] h-[230px] object-cover object-right block rounded-full absolute z-10"
          />
          <img src="/Polygon3.svg" alt="" className="w-20 h-20 absolute right-2 top-6" />

        </div>

      </div>

      
      <div className="grid grid-cols-2 min-h-[230px] relative">

       
        <div className="relative top-[100px] mb-4">
          <div className="absolute -top-12 left-9 w-[256px] h-[266px] rounded-full overflow-hidden border-[6px] border-white shadow-lg z-20 bg-[#bfaa8c]">
           
            <img
              src="/secondheroimg2.png"
              alt="Progress discussion"
              className="w-full h-full object-cover object-left-bottom absolute z-10"
            />
           
          </div>
           <img src="/Polygon1.svg" alt="" className="absolute -top-12 left-8 w-20 h-20"/>
            <img src="/Polygon1.svg" alt="" className="absolute top-24 left-60 w-20 h-20 z-20"/>
        </div>

        
        <div className="flex flex-col justify-center pr-10 pl-4 py-8 relative z-10">

          <h2
            className="text-[24px] font-bold leading-[1.2] text-[#111111] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            See how we can<br />help you progress
          </h2>

          <p className="text-[11.5px] text-[#999999] leading-[1.8] mb-4 max-w-[210px]">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>

          <a
            href="#"
            className="text-[11.5px] font-medium text-[#111111] no-underline border-b-2 border-[#e52e2e] pb-0.5 w-fit"
          >
            Read more
          </a>
        </div>

        

      </div>

    </div>
  );
}

export default HeroSection
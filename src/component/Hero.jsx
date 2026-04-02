import react from "react"
import ImageFormatter from "./ImageFormatter.jsx"

function Hero() {

    const images = [
        { src: "/img1.png", className: "top-[80px]" },
        { src: "/img2.png", className: "top-[40px] left-[440px]" },
        { src: "/img3.png", className: "" },
        { src: "/img4.png", className: "left-[700px] top-[80px]" },
        { src: "/img5.png", className: "left-[880px] top-[40px]" },
        { src: "/img6.png", className: "left-[930px] top-[80px]" },
        { src: "/img7.png", className: "left-[1100px]" },
    ]

    return (
        <>
            <div >

                <section className="relative text-center font-semibold text-4xl mt-[50px]">
                    <div> The thinkers and </div>
                    <div> doers were ch<span className="border rounded-full pr-2 pb-1  bg-pink-200">anging</span></div>
                    <div> the <span className="bg-green-100 pl-3 pr-3 rounded-full">status</span> Quo With </div>
                </section>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40 absolute top-[120px] right-[450px]">
                    <path fill="#8A3FFC" d="M15.2,7.8C2,31.6,-38.5,38.7,-45.6,18.3C-52.7,-2,-26.4,-49.7,-6.1,-53.2C14.2,-56.7,28.4,-16.1,15.2,7.8Z" transform="translate(100 100)" />
                </svg>

                <p className="text-sm text-center mt-4">We are a team of strategists, designers communicators, researchers. Togeather,<br />
                    we belive that progress only hghappens when you refuse to play things safe.</p>

              
                <ImageFormatter Images={images} />






            </div>

        </>
    )

}

export default Hero
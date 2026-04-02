import react from "react"
import { nanoid } from "nanoid"

function ImageFormatter({ Images }) {

    return (
        <>
            <div className="flex gap-[130px] relative justify-center mt-6">
                <svg class="squiggle-black" width="60" height="140" viewBox="0 0 60 140" fill="none" className="absolute left-4 ">
                        <path d="M30 5 Q55 35 20 60 Q-5 85 30 110 Q55 130 30 140" stroke-black stroke="#e8453c" stroke-width="2.5" fill="none" stroke-linecap="round" />
                    </svg>

                {
                    Images.map((Image) =>
                        <div key={nanoid()}>
                            <img src={Image.src} alt="" className={`rounded-full w-20 h-20 absolute z-10 border border-white border-2 ${Image.className}`} />
                        </div>

                    )
                }

            </div>




        </>
    )
}

export default ImageFormatter
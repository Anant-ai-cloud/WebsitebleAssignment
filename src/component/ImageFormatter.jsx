import react from "react"
import { nanoid } from "nanoid"

function ImageFormatter({ Images}) {

    return (
        <>
        <div className="flex gap-[130px] relative justify-center mt-6">
            {
                Images.map((Image)=>
                <div key={nanoid()}>
                     <img src={Image.src} alt="" className= {`rounded-full w-20 h-20 absolute z-10 border border-white border-2 ${Image.className}`} />
                </div>

            )
            }
       
        </div>
                

            

        </>
    )
}

export default ImageFormatter
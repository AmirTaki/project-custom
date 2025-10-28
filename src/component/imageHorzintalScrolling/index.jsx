import { useRef } from "react"
import imgBack from "./img/back.png"
import imgNext from './img/next.png'
import img1 from './img/image-1.png'
import img2 from './img/image-2.png'
import img3 from './img/image-3.png'
import img4 from './img/image-4.png'
import img5 from './img/image-5.png'
import img6 from './img/image-6.png'

const HorzinotalScrolling = () => {
    const galleryRef =  useRef(null)

    const handlerBack = () => {

    }
    const handlerNext = () => {

    }

    return(
        // gallery wrap
        <div className="flex justify-items items-center mx-auto my-[10%]">
            {/* back */}
            <img 
                src= {imgBack} 
                alt="" 
                className="w-[50px] cursor-pointer m-[40px]" 
                onClick={() => {handlerBack}}
            />


            {/* gallery */}
            <div ref = {galleryRef} className="w-[900px] flex overflow-x-scroll overflow-y-hidden">
                <div className="w-[100%] grid grid-cols-3 gap-[20px] p-[10px] flex-none">
                    <span>
                        <img src={img1} alt="" className="w-[100%] grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110" />
                    </span>
                    <span>
                        <img src={img2} alt="" className="w-[100%] grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110" />
                    </span>
                    <span>
                        <img src={img3} alt="" className="w-[100%] grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110" />
                    </span>
                </div>
                <div className="w-[100%] grid grid-cols-3 gap-[20px] p-[10px] flex-none">
                    <span>
                        <img src={img4} alt="" className="w-[100%] grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110" />
                    </span>
                    <span>
                        <img src={img5} alt="" className="w-[100%] grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110" />
                    </span>
                    <span>
                        <img src={img6} alt="" className="w-[100%] grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110" />
                    </span>
                </div>
            </div>

            {/* next */}
            <img 
                src={imgNext} 
                alt="" 
                className="w-[50px] cursor-pointer m-[40px]" 
                onClick={()=> {handlerNext}}    
            />
        </div>
    )
}

export default HorzinotalScrolling;
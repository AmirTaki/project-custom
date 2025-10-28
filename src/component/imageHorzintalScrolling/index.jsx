import imgBack from "./img/back.png"
import img1 from './img/image-1.png'
import img2 from './img/image-2.png'
import img3 from './img/image-3.png'

const HorzinotalScrolling = () => {
    return(
        // gallery wrap
        <div className="flex justify-items items-center m-[10%_auto]">
            {/* back */}
            <img src= {imgBack} alt="" className="" />


            {/* gallery */}
            <div className="w-[900px] flex overflow-scroll">
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
            </div>

        </div>
    )
}

export default HorzinotalScrolling;
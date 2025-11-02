import { useRef } from "react";
import "./styles.css"

const ImageSlider = () => {
    const slider = useRef(null)
    return(
        <>
        {/* // slider */}
        <div className="flex flex-row gap-2 " ref = {slider}>
            {/* item */}
            <div className="bg-white w-30 h-30 flex justify-center items-center text-6xl item">1</div>
            <div className="bg-white w-30 h-30 flex justify-center items-center text-6xl item">2</div>
            <div className="bg-white w-30 h-30 flex justify-center items-center text-6xl item">3</div>
            <div className="bg-white w-30 h-30 flex justify-center items-center text-6xl item">4</div>
        </div>


        <button className="bg-white mt-10 w-10 cursor-pointer">next</button>
        <button></button>
        </>


    )
}

export default ImageSlider;
import img1 from "./image/img1.jpg"
const ImageSlider = () => {
    return(
    <div className="w-full h-[100vh] bg-red-200 overflow-hidden">
        
        {/*slider  overflow-hidden*/}
        <div className="h-[100vh] w-[100vw] relative overflow-hidden -mt-[50px]">
            {/* list */}
            <div className="">
                {/* item */}
                <div className="w-full h-full absolute inset-0">
                    {/* img */}
                    <img src = {img1} alt="" className="w-full h-full object-cover" />
                    {/* content */}
                    <div className="absolute top-[20%] w-[1140px] max-w-[80%] left-[50%] h-10 bg-amber-600 transform -translate-x-1/2 pr-[30%] box-border text-white shadow-[0_5px_10px_#0004] ">
                        {/* title */}
                        <div className="text-[5em] font-bold leading-[1.3em]">MAGIC SLIDER</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}

export default ImageSlider;
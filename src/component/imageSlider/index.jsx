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
                    <div className="absolute top-[20%] w-[1140px] max-w-[80%] left-[50%] h-10 bg-amber-600 transform -translate-x-1/2 pr-[30%] max-md:pr-[0]! box-border text-white shadow-[0_5px_10px_#0004] ">
                        {/* title */}
                        <div className="text-[5em] font-bold leading-[1.3em] max-md:text-[50px]!">MAGIC SLIDER</div>
                        {/* type */}
                        <div className="text-[5em] font-bold leading-[1.3em] text-[#14ff72cb]">FLOWER</div>
                        {/* discription */}
                        <div className="">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur velit provident pariatur optio sapiente et mollitia, in ut odit placeat accusantium officia, ipsa quae, fugit sequi expedita dignissimos cum doloremque.
                        </div>
                        {/* button */}
                        <div className="grid grid-cols-[130px_130px] grid-rows-[40px] gap-[5px] mt-[20px]">
                            <button 
                                className="border-0 bg-[#eee] font-[Poppins] cursor-pointer transition-all duration-500 leading-2"
                            >SEE MORE</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}

export default ImageSlider;
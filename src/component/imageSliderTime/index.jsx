import img1 from "./image/img1.jpg"
const ImgSliderTime = () => {
    return(
        // slider
        <div className="w-[1300px] max-w-[100vw] h-[700px] m-auto relative overflow-hidden max-md:h-[400px]!">
            {/* list */}
            <div className="absolute top-0 left-0 h-full flex duration-1000 max-w-max">
                {/* item */}
                <div className="">
                    <img 
                        className="w-[1300px] max-w-[100vw] h-full object-cover"
                        src={img1} alt="" />
                </div>
            </div>
        </div>
    )
}
export default ImgSliderTime;

//https://www.youtube.com/watch?v=CCPZ6SsJVT8&t=4s
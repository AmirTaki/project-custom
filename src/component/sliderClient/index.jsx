import SwiperComponent from "./sliderItem";

const SliderClientSwiper = () => {
    return(
        // section
        <div className="relative w-full min-h-screen flex justify-center items-center bg-[#2196f3] ">
            {/* swiper-wrapper */}
            <div className="">
                <SwiperComponent />
            </div>
        </div>
 
    )
}

export default SliderClientSwiper;
const SliderClientSwiper = () => {
    return(
        // section
        <section className="relative w-full min-h-screen flex justify-center items-center bg-[#2197f3] overflow-hidden ">
            {/* swiper-container   -> h-0 */}
            <div className="w-[400px] h-[500px] pt-[50px] pb-[50px]">
                {/* swiper-wrapper */}
                <div className="">
                    {/* swiper-slide */}
                    <div className="w-[320px] h-[300px] bg-[#d1ebff] shadow-[0_15px_50px_rgba(0,0,0,.2)] backdrop-blur-[4px] rounded-[10px]"></div>
                </div>
            </div>
        </section>
    )
}

export default SliderClientSwiper;
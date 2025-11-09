const SliderClientSwiper = () => {
    return(
        // section
        <section className="relative w-full min-h-screen flex justify-center items-center bg-[#2197f3] overflow-hidden ">
            {/* swiper-container   -> h */}
            <div className="w-[400px] h-[500px] pt-[50px] pb-[50px]">
                {/* swiper-wrapper */}
                <div className="">
                    {/* swiper-slide -> h */}
                    <div className="w-[320px] h-[300px] bg-[#d1ebff] shadow-[0_15px_50px_rgba(0,0,0,.2)] backdrop-blur-[4px] rounded-[10px] bg-center bg-cover">
                        {/* testimonialBox */}
                        <div className="relative w-full p-[40px] pt-[90px] text-[#999]">
                            {/* img -> quote */}
                            <img 
                                className="absolute top-[20px] right-[3px] opacity-20"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHj-4qt5ZMM1om-SSRsIe50XzOyznYOz0ZTQ&s" alt=""
                             />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SliderClientSwiper;
const SliderItem = ({item}) => {
    return(
        // {/* swiper-slide -> h */}
        <div className="w-[320px]  bg-[#d1ebff] shadow-[0_15px_50px_rgba(0,0,0,.2)] backdrop-blur-[4px] rounded-[10px] bg-center bg-cover">
            {/* testimonialBox */}
            <div className="relative w-full p-[40px] pt-[90px] text-[#999]">
                {/* img -> quote */}
                <img 
                    className="absolute bottom-[5px] right-[3px] opacity-20"
                    src={item.img} alt=""
                />
                {/* content */}
                <div className="">
                    <p>
                        {item.content}
                    </p>
                    {/* details */}
                    <div className="flex items-center mt-[20px]">
                        {/* imgBx */}
                        <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden mr-[10px]">
                            <img 
                                className="absolute top-0 left-0 w-full h-full object-center"
                                src={item.imgDetails} alt="" 
                            />
                        </div>
                        <h3 className="text-[16px] font-[400] tracking-[1px] text-[#2196f3] leading-[1.1em]">
                            {item.title}<br /> <span className="text-[#666] text-[12px]">{item.job}</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SliderItem;
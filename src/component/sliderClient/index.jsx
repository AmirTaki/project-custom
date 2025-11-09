import { Swiper,SwiperSlide } from 'swiper/react';
import { DataSlider, } from "./dataSlider";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import SliderItem from "./sliderItem";

const SliderClientSwiper = () => {
    return(
        
        <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="swiper-container bg-white"
        >
            {DataSlider.SliderGroup.map((item) => (
            //    <SliderItem  key = {item.id} item = {item}/>

                    <SwiperSlide className="w-[320px]  bg-[#d1ebff] shadow-[0_15px_50px_rgba(0,0,0,.2)] backdrop-blur-[4px] rounded-[10px] bg-center bg-cover">
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
                    </SwiperSlide>
              
            ))}
    
            {/* Add more slides as needed */}
            <div className="swiper-pagination" />
        </Swiper>
 
    )
}

export default SliderClientSwiper;
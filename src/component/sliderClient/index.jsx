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
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            {/* Add more slides as needed */}
            <div className="swiper-pagination" />
        </Swiper>
 
    )
}

export default SliderClientSwiper;
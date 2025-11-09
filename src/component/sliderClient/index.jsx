import { Swiper } from 'swiper/react';
import { DataSlider } from "./dataSlider";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import SliderItem from "./sliderItem";

const SliderClientSwiper = () => {
    return(
        <Swiper
            effect = 'coverflow'
            grabCursor = {true}
            centeredSlides = {true}
            slidesPerView="auto"
            loop = {true}
            pagination = {{el : '.swiper-pagination', clickable: true}}
            coverflowEffect={{
                rotate : 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="swiper-container "
        >
            <section className="relative w-full min-h-screen flex justify-center items-center bg-[#2197f3] overflow-hidden ">
                {/* swiper-container   -> h */}
                <div className="w-[400px]  pt-[50px] pb-[50px]">
                </div>
            </section>
        </Swiper>
    )
}

                    // {/* swiper-wrapper */}
                    //     <div className="swiper-container ">
                    //         {DataSlider.Slider.map((item) => {
                    //             return(
                    //                 <SliderItem key = {item.id} item = {item} />
                    //             )
                    //         })}
                    //     </div>
export default SliderClientSwiper;
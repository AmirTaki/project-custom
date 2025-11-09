import { Swiper } from 'swiper/react';
import 'swiper/css';
import { DataSlider } from "./dataSlider";
import SliderItem from "./sliderItem";

const SliderClientSwiper = () => {
    return(
        <Swiper
            effect = 'coverflow'
            grabCursor = {true}
            centeredSlides = {true}
            slidesPerView="auto"
            loop = {true}

        >

            <section className="relative w-full min-h-screen flex justify-center items-center bg-[#2197f3] overflow-hidden ">
                {/* swiper-container   -> h */}
                <div className="w-[400px]  pt-[50px] pb-[50px]">
                    {/* swiper-wrapper */}
                    <div className="">
                        {DataSlider.Slider.map((item) => {
                            return(
                                <SliderItem key = {item.id} item = {item} />
                            )
                        })}
                    </div>
                </div>
            </section>
        </Swiper>
    )
}

export default SliderClientSwiper;
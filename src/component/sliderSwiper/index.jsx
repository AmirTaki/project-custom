import { useEffect, useReducer, useRef, useState } from "react";
import { InitalStateItems, } from "./initialState";
import './styles.css'

const SliderSwiper = () => {
    const slider =  useRef(null)
   const hadlerScroll = () => {
        const scrollPos = window.screenY;

   }
    return(
        <div className="w-screen h-[80vh] overflow-auto  bg-red-600">
            <div ref = {slider} className="slider">
                {InitalStateItems.Images.map((card) => (
                    <div className="card" key = {card.id}>
                        <img src={card.src} alt={card.src} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SliderSwiper;


// https://www.youtube.com/watch?v=ZczUFf-mOho
// https://www.youtube.com/watch?v=kzLFdOY7GQk  ===> 4:6
// https://www.youtube.com/@CSSnippets/playlists


// https://www.youtube.com/watch?v=0JKGNnIKitM&list=PL8bX3D8aBEpnS3nVvSHiPqxX_HvBYCTcL

//https://www.youtube.com/watch?v=CCPZ6SsJVT8&t=4s
// https://swiperjs.com/demos#scrollbar

import { useEffect, useReducer, useState } from "react";
import { InitalStateItems, } from "./initialState";

const SliderSwiper = () => {
   const [cards, setCards]  = useState([])
  
   useEffect(() => {
    const newCards = InitalStateItems.Images.map((img) => ({
        id : img.id + 1,
        imgSrc : img.src
    }))

    setCards(newCards)

   },[])
    return(
        <div className="w-screen h-[80vh] overflow-hidden ">
            <div className="slider">
                {cards.map((card) => (
                    <div className="card" key = {card.id}>
                        <img src="" alt={card.imgSrc} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SliderSwiper;


// https://www.youtube.com/watch?v=ZczUFf-mOho
// https://www.youtube.com/watch?v=kzLFdOY7GQk
// https://www.youtube.com/@CSSnippets/playlists


// https://www.youtube.com/watch?v=0JKGNnIKitM&list=PL8bX3D8aBEpnS3nVvSHiPqxX_HvBYCTcL

//https://www.youtube.com/watch?v=CCPZ6SsJVT8&t=4s
// https://swiperjs.com/demos#scrollbar

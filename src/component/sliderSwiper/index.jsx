import { useEffect, useReducer, useState } from "react";


const SliderSwiper = () => {
   const [cards, setCards]  = useState([])
   const [state, dispatch] = useReducer()
   useEffect(() => {
        const items = Array.from({length : 10000} ,(_,i)=> `Item ${i + 1}`)
        console.log(items)
   })
    return(
        <div className="w-10 h-10 bg-amber-800"></div>
    )
}

export default SliderSwiper;


// https://www.youtube.com/watch?v=ZczUFf-mOho
// https://www.youtube.com/watch?v=kzLFdOY7GQk
// https://www.youtube.com/@CSSnippets/playlists


// https://www.youtube.com/watch?v=0JKGNnIKitM&list=PL8bX3D8aBEpnS3nVvSHiPqxX_HvBYCTcL

//https://www.youtube.com/watch?v=CCPZ6SsJVT8&t=4s
// https://swiperjs.com/demos#scrollbar

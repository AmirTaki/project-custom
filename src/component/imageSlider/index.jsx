import { useEffect, useReducer, useRef } from "react";
import { DataImage } from "./dataItem";
import "./styles.css"
import ListSlider from "./listSlider";

const ImageSlider = () => {
    const slider = useRef(null)
    const sliderList = useRef(null)
    const thumbnail = useRef(null)

    const reducer = (state, action) => {
        var thumbnailItems = thumbnail.current.querySelectorAll('.item')
        var sliderItems = sliderList.current.querySelectorAll(".item")
 
        switch (action.type){
            case "next":
                sliderList.current.appendChild(sliderItems[0])
                thumbnail.current.appendChild(thumbnailItems[0])
                slider.current.classList.add('next')
            return {...state};

            case "prev" : 
                sliderList.current.prepend(sliderItems[sliderItems.length - 1])
                thumbnail.current.prepend(thumbnailItems[thumbnailItems.length - 1])
                slider.current.classList.add('prev')
            return {...state}
        }
    }

    const [state, dispatch] = useReducer(reducer, DataImage)

    useEffect(() => {
        if(thumbnail.current){
            var thItems = thumbnail.current.querySelectorAll('.item')
            thumbnail.current.appendChild(thItems[0])
        }
    },[])

    useEffect(() => {
        if(slider.current){
            slider.current.addEventListener('animationend', () => {
                slider.current.classList.remove('next')
                slider.current.classList.remove('prev')
            }, {once : false})
        }
    }, [state])

    return(
        <div className="slider
            h-[100vh] mt-[-50px] w-[100%] overflow-hidden relative" 
            ref = {slider}>
            {/* list */}
                <ListSlider state = {state}  sliderList = {sliderList}/>

            {/* thumbnail */}
            <div className="thumbnail
                absolute bottom-[50px] left-[50%] w-[max-content] z-[100] flex gap-[20px]
            " ref = {thumbnail}>

                {state.image.map((item) => {
                    return(
                        // item
                        <div className="item
                            w-[150px] h-[220px] shrink-0 relative
                        "
                        
                            key = {item.id}
                        >
                            <img src={item.image} alt="" 
                                className="w-full h-full object-cover rounded-[20px] shadow-[5px_0_15px_rgba(0,0,0,.3)]"
                            />
                        </div>
                    )
                })}
            </div>

            {/* next prev arrows */}
            <div className="nextPrevArrows
                absolute top-[80%] right-[52%] z-[100] w-[300px] max-w-[30%] flex gap-[10px] items-center
            ">
                {state.buttons.map((item) => {
                    return(
                        <button 
                            className={`${item.name}
                                w-[40px] h-[40px] rounded-[50%] bg-[#14ff72cb] border-0 text-white font-[monospace]
                                font-bold duration-500 cursor-pointer hover:bg-white! hover:text-black    
                            `} 
                            key = {item.id}
                            onClick={() => {dispatch({type : `${item.name}`})}}
                        >
                            {item.symbol}
                        </button>
                    )
                })}
            </div>
        </div>

    )
}

export default ImageSlider;
import { useEffect, useReducer, useRef } from "react";
import "./styles.css"
import { DataImage } from "./dataItem";


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
                return {...state}
        }
    }

    const [state, dispatch] = useReducer(reducer, DataImage)
    useEffect(() => {
        if(slider.current){
            slider.current.addEventListener('animationend', () => {
                slider.current.classList.remove('next')
                slider.current.classList.remove('prev')
            })
        }
    }, [state])
    return(
        <div className="slider" ref = {slider}>
            {/* list */}
            <div className="list" ref = {sliderList}>
                {state.image.map((item) => {
                    return(
                        <div className="item" key = {item.id}>
                            <img src={item.image} alt="" />
                            <div className="content">
                                <div className="title">{item.title}</div>
                                <div className="type">{item.type}</div>
                                <div className="description">{item.description}</div>
                            </div>
                            <div className="button">
                                <button>SEE MORE</button>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* thumbnail */}
            <div className="thumbnail" ref = {thumbnail}>
                {state.image.map((item) => {
                    return(
                        <div className="item" key = {item.id}>
                            <img src={item.image} alt="" />
                        </div>
                    )
                })}
            </div>

            {/* next prev arrows */}
            <div className="nextPrevArrows">
                {state.buttons.map((item) => {
                    return(
                        <button 
                            className={`${item.name}`} key = {item.id}
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
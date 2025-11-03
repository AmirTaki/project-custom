import { useEffect, useReducer, useRef } from "react";
import { reducerSlider } from "./reducerSlider";
import { DataImage } from "./dataItem";
import ListSlider from "./listSlider";
import Thumbnail from "./thumbnail";
import ButtonArrows from "./buttonArrows";
import "./styles.css"

const ImageSlider = () => {
    const slider = useRef(null)
    const sliderList = useRef(null)
    const thumbnail = useRef(null)

    const [state, dispatch] = useReducer(reducerSlider, DataImage)

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
            ref = {slider}
        >
            {/* list */}
            <ListSlider state = {state}  sliderList = {sliderList} />

            {/* thumbnail */}
            <Thumbnail state= {state} thumbnail = {thumbnail} />

            {/* next prev arrows */}
            <ButtonArrows state={state} dispatch={dispatch} sliderList = {sliderList} thumbnail = {thumbnail} slider = {slider} />
        </div>

    )
}

export default ImageSlider;
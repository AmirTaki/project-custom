import { useReducer, useRef } from "react";
import "./styles.css"
import { DataImage } from "./dataItem";


const ImageSlider = () => {
    const slider = useRef(null)
    const sliderList = useRef(null)
    const thumbnail = useRef(null)
    const thumbnailItems = useRef(null)
    
    const reducer = (state, action) => {
        switch (action.type){
            case "":
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, DataImage)
    return(
        <div className="slider">
            {/* list */}
            <div className="list">
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
            <div className="thumbnail">
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
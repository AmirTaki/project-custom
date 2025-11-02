import { useReducer } from "react";
import "./styles.css"
import { DataImage } from "./dataItem";

const ImageSlider = () => {
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
                        <div className="item">

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageSlider;
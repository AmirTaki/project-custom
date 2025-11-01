import { useContext } from "react";
import ItemImage from "./itemImage";
import { imageSliderContext } from ".";

const ListSlider = () => {
    const {state, dispatch} =  useContext(imageSliderContext)
    return(
        <div className="">
            {state.image.map((item) => {
                return(
                    <ItemImage key = {item.id} item = {item} />
                )
            })}
            {/* item */}
        </div>
    )
}
export default ListSlider;
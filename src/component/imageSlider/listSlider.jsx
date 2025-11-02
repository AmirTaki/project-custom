import { useContext } from "react";
import ItemImage from "./itemImage";
import { imageSliderContext } from ".";
import Slider from "./te";

const ListSlider = () => {
    const {DataImage, sliderListRef} =  useContext(imageSliderContext)
    return(
        // slider
        <div className="" ref = {sliderListRef}  >
            {DataImage.image.map((item) => {
                return(
                    <ItemImage key = {item.id} item = {item} />
                )
            })}
            {/* item */}
        </div>
    )
}
export default ListSlider;
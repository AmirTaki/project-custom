import { useContext } from "react";
import ItemImage from "./itemImage";
import { imageSliderContext } from ".";

const ListSlider = () => {
    const {DataImage} =  useContext(imageSliderContext)
    return(
        <div className=""  >
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
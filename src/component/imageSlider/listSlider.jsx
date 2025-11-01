import { DataImage } from "./dataItem";
import ItemImage from "./itemImage";
const ListSlider = () => {
    return(
        <div className="">
            {DataImage.map((item) => {
                return(
                    <ItemImage key = {item.id} item = {item} />
                )
            })}
            {/* item */}
        </div>
    )
}
export default ListSlider;
import { DataImage } from "./dataItem";
import ItemImage from "./itemImage";

const ImageSlider = () => {
    return(
    <div className="w-full h-[100vh] bg-red-200 overflow-hidden">
        
        {/*slider  overflow-hidden*/}
        <div className="h-[100vh] w-[100vw] relative overflow-hidden -mt-[50px]">
            {/* list */}
            <div className="">
                {DataImage.map((item) => {
                    return(
                        <ItemImage key = {item.id} item = {item} />
                    )
                })}
                {/* item */}
      
            </div>
        </div>
    </div>
    )
}

export default ImageSlider;
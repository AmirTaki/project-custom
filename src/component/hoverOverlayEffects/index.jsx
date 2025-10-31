import BoxImage from "./boxImage";
import { DataBoxImage } from "./dataBoxImage";

const ImageHoverOverlayEffects = () => {
    return(
        // container
        <div className="relative w-[90%] flex flex-wrap bg-amber-100">
            {DataBoxImage.map((box) => {
                return(
                    <BoxImage key = {box.id} box = {box}/>
                )
            } )}
        </div>
    )
}
export default ImageHoverOverlayEffects;
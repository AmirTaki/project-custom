import { createContext } from "react";
import NextPrevButton from "./buttonPrevArrows";
import ListSlider from "./listSlider";
import Thumbnail from "./thumbnail";

export const imageSliderContect =  createContext()
const ImageSlider = () => {
    return(
    <div className="w-full h-[100vh] bg-red-200 overflow-hidden">
        
        {/*slider  overflow-hidden*/}
        <div className="h-[100vh] w-[100vw] relative overflow-hidden -mt-[10px]">
            <imageSliderContect.Provider value ={{}}>

                {/* list */}
                <ListSlider />

                {/* thumbnail */}
                <Thumbnail />

                {/* next prev Arrows */}
                <NextPrevButton />
                
            </imageSliderContect.Provider>
        </div>
    </div>
    )
}

export default ImageSlider;
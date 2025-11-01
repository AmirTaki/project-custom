import ListSlider from "./listSlider";
import Thumbnail from "./thumbnail";

const ImageSlider = () => {
    return(
    <div className="w-full h-[100vh] bg-red-200 overflow-hidden">
        
        {/*slider  overflow-hidden*/}
        <div className="h-[100vh] w-[100vw] relative overflow-hidden -mt-[50px]">
            {/* list */}
            <ListSlider />

            {/* thumbnail */}
            <Thumbnail />

        </div>
    </div>
    )
}

export default ImageSlider;
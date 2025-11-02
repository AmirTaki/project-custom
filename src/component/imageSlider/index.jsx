import { DataImage } from "./dataItem";



const ImageSlider = () => {

    return(
    //    slider
    <div className="w-full h-[100vh] bg-red-200 overflow-hidden ">
        {/* item */}
        {DataImage.image.map((item) => {
            return(
                <div style={{width : `%`}} key = {item.id}>
                    <img src={item.image} alt="" />
                </div>      
            )
        }) }
    </div>
    )
}

export default ImageSlider;  
import IconImage from "./iconImage"
import { ImageData } from "./imageData"
import './styles.css'

const ImageCardHover = () => {    
    return(
        // container
        <div className="w-[400px]  h-[400px] flex items-end max-md:hidden!">
            {ImageData.map((item) => {
                return(
                    <IconImage item = {item} />
                ) 
            })}
        </div>
    )
}

export default ImageCardHover;
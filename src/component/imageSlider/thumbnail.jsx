import { useContext } from "react";
import { imageSliderContext } from ".";
import './styles.css'


const Thumbnail = () => {
    const {DataImage} = useContext(imageSliderContext)
    return(
        // thumbnail
        <div className="absolute bottom-[50px] left-[50%] w-max z-[100] flex gap-[20px] ">
          

            {/* item */}
            {DataImage.image.map((item) => {
                return(
                    <div key = {item.id} className="w-[150px] h-[220px] shrink-0 reative">
                        <img src={item.image} 
                            className={`w-full h-full object-cover rounded-[20px] shadow-[5px_0_15px_rgba(0,0,0,.3)]`}
                        alt="" />
                    </div>
                )
            })}
        </div>
    )
}
export default Thumbnail;
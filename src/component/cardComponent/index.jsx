import { ImageData } from "./imageData"
import './styles.css'

const ImageCardHover = () => {
    
    return(
        // container
        <div className="container">
            {ImageData.map((item) => {
                return(
                    // {/* icon-image */}
                    <div key = {item.id} className="icon-image">
                        {/* icon */}
                        <div className="icon">
                            <img src={item.image} alt=""  
                                className=""
                            />
                        </div>
                        {/* hover-image */}
                        <div className="hover-image">
                            {/* img */}
                            <div className="img">
                                <img src={item.image} alt="" className=""/>
                            </div>
                            {/* content */}
                            <div className="content">
                                {/* details */}
                                <div className="details">
                                    {/* name */}
                                    <div className="name">{item.name}</div>
                                    {/* job */}
                                    <div className="job">{item.job}</div>
                                </div>

                            </div>
                        </div>
                    </div>

                )
            }) }
        </div>
    )
}

export default ImageCardHover;
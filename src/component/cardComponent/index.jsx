import { ImageData } from "./imageData"
import './styles.css'

const ImageCardHover = () => {
    
    return(
        // container
        <div className="min-w-[400px] h-[400px] flex items-end mt-30">
            {ImageData.map((item) => {
                return(
                    // {/* icon-image */}
                    <div key = {item.id} className="relative bg-white rounded-[50%] h-[70px] w-[70px] my-0 mx-[5px] shadow-[0_5px_10px_rgba(0,0,0,.25)] icon-image group">
                        {/* icon */}
                        <div className="">
                            <img src={item.image} alt=""  
                                className="absolute h-[95%] w-[95%] left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2
                                object-cover rounded-[50%] border-[3px] border-[#0396FF]
                                "
                            />
                        </div>
                        {/* hover-image */}
                        <div className="h-[350px] w-[300px] absolute bottom-[110px] left-[50%] rounded-[25px] -translate-x-1/2
                            shadow-[0_5px_10px_rgba(0,0,0,.25)] z-0! pointer-events-none hover-image  
                        ">
                            {/* img */}
                            <div className="absolute w-[95%] h-[95%] left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 object-cover rounded-[50%] border-[3px] border-[#0396FF]">
                                <img src={item.image} alt="" className="absolute w-full h-full object-cover border-[3px] border-white  rounded-[25px]"/>
                            </div>
                            {/* content */}
                            <div className="absolute w-full bottom-[-10px] left-0 py-0 px-[10px]
                                before:content before:absolute before:h-[20px] before:w-[20px] before:bg-white 
                                before:left-[50%] before:bottom-[1px] before:-translate-x-1/2 before:rotate-45 before:-z-[1]
                            ">
                                {/* details */}
                                <div className="relative bg-white p-[10px] rounded-[12px] text-center opacity-0 translate-y-[10px]
                                    before:content before:absolute before:h-[20px] before:w-[20px] before:bg-white before:left-[50%] before:-bottom-[10px]
                                    before:-translate-x-1/2 before:rotate-45 before:-z-1 details
                                    group-hover:transition-all group-hover:duration-500 group-hover:ease-in group-hover:opacity-100 group-hover:translate-y-[4px]
                                    group-hover:transition-all group-hover:duration-300 group-hover:ease-in group-hover:delay-1000
                                ">
                                    {/* name */}
                                    <div className="text-[20px] font-[500]">{item.name}</div>
                                    {/* job */}
                                    <div className="text-[17px] text-[#0396FF] m-[-3px_0_5px_0]">{item.job}</div>
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
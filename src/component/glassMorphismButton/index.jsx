import { BrowserRouter, Link } from "react-router-dom";
import "./styles.css"

const GlassMorphism = () => {
    return (
        // container
        <div className="w-[600px] flex flex-wrap justify-around">
            {/* btn */}
            <BrowserRouter >
            
            <div
                className="
              

             
                btn group
                
             
                ">
                <Link 
                    to = "/" 
                    className = "absolute top-0 left-0 w-[100%] h-[100%] flex items-center justify-center bg-[rgba(255,255,255,.5)] shadow-[0_15px_35px_rgba(0,0,0,.2)] border-t-1 border-t-[rgba(255,255,255,.1)] border-b-1 border-b-[rgba(255,255,255,.1)]  rounded-[30px] text-white  font-[400] leading-[1px] decoration-0 overflow-hidden duration-500 blur-[15px]
                        before:content-[''] before:absolute before:top-0 before:left-0 before:w-[50%] before:h-[100%] before:bg-[linear-gradient(to_left,rgba(255,255,255,.15),transparent]
                        before:skew-x-45 before:translate-x-0 before:duration-500
                        group-hover:before:skew-x-45 group-hover:before:translate-x-[200%] 
                    "
                > 
                    Read More
                </Link>
            </div>
            
            </BrowserRouter>
        </div>
    )
}
export default GlassMorphism;
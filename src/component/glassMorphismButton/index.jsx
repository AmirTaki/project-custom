import { BrowserRouter, Link } from "react-router-dom";
import "./styles.css"

const GlassMorphism = () => {
    return (
        // container
        <div className="w-[600px] flex flex-wrap justify-around">
            {/* btn */}
            <BrowserRouter >
            
            <div
                className="relative w-[155px] h-[50px] m-[20px]
                before:content-[''] before:absolute before:left-[50%] before:-translate-x-1/2
                before:bottom-[-5px] before:w-[30px] before:h-[10px] before:bg-[#ff1f71]
                before:rounded-[10px] before:duration-500 before:delay-0
                after:content-[''] after:absolute after:left-[50%] after:-translate-x-1/2
                after:top-[-5px] after:w-[30px] after:h-[10px] after:bg-[#ff1f71] 
                after:rounded-[10px] after:duration-500 after:delay-0
                btn
            ">
                <Link to = "/" 
                    className = "absolute top-0 left-0 w-[100%] h-[100%] flex items-center justify-center
                        bg-[rgba(255,255,255,.5)] shadow-[0_15px_35px_rgba(0,0,0,.2)] border-t-1 border-t-[rgba(255,255,255,.1)] border-b-1 border-b-[rgba(255,255,255,.1)]
                        rounded-[30px] text-white z-10 font-[400] leading-[1px] decoration-0 overflow-hidden duration-500 blur-[15px]
                        "> Read More
                </Link>
            </div>
            
            </BrowserRouter>
        </div>
    )
}
export default GlassMorphism;
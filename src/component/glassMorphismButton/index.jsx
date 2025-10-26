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
                <Link to = "/" className = ""> Read More</Link>
            </div>
            
            </BrowserRouter>
        </div>
    )
}
export default GlassMorphism;
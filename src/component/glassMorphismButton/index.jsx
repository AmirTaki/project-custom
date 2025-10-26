import { BrowserRouter, Link } from "react-router-dom";

const GlassMorphism = () => {
    return (
        // container
        <div className="w-[600px] flex flex-wrap justify-around">
            {/* btn */}
            <BrowserRouter >
            
            <div className="relative w-[155px] h-[50px] m-[20px]
                before:content-[''] before:absolute before:left-[50%] before:-translate-x-1/2
                before:bottom-[-5px] before:w-[30px] before:h-[10px] before:bg-[#ff1f71]
                before:rounded-[10px] before:duration-[.5s] before:delay-0
            ">
                <Link to = "/" className = "text-white"> Read More</Link>
            </div>
            
            </BrowserRouter>
        </div>
    )
}
export default GlassMorphism;
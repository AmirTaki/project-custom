import { BrowserRouter, Link } from "react-router-dom";
import "./styles.css"

const GlassMorphism = () => {
    return (
        // container
        <div className="w-[600px] flex flex-wrap justify-around">
            {/* btn */}
            <BrowserRouter >
            
            <div
                style = {{'--color-bg' : "#ff1f71"}}
                className=" btn group btn-morphism">
                <Link 
                    to = "/" 
                    className ="link-morphism group-hover:before:skew-x-45 group-hover:before:translate-x-[200%] group-hover:tracking-[3px] "                    
                > 
                    Read More
                </Link>
            </div>
            <div
                style = {{'--color-bg' : "#2db2ff"}}
                className=" btn group btn-morphism">
                <Link 
                    to = "/" 
                    className ="link-morphism group-hover:before:skew-x-45 group-hover:before:translate-x-[200%] group-hover:tracking-[3px] "                    
                > 
                    Read More
                </Link>
            </div>
            <div
                style = {{'--color-bg' : "#1eff45"}}
                className=" btn group btn-morphism "
            >
                <Link 
                    to = "/" 
                    className ="link-morphism group-hover:before:skew-x-45 group-hover:before:translate-x-[200%] group-hover:tracking-[3px]"> 
                    Read More
                </Link>
            </div>
            
            </BrowserRouter>
        </div>
    )
}
export default GlassMorphism;
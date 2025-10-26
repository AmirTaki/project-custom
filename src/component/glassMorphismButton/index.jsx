import { BrowserRouter, Link } from "react-router-dom";
import "./styles.css"


const GlassMorphism = () => {
    return (
        // container
        <div className="w-[600px] flex flex-wrap justify-around">
            {/* btn */}
            <BrowserRouter >            
            <div
                style = {{'--color-bg' : ""}}
                className=" btn group btn-morphism">
                <Link 
                    to = "/" 
                    className ="link-morphism  "                    
                > 
                    Read More
                </Link>
            </div>
            </BrowserRouter>
        </div>
    )
}
export default GlassMorphism;
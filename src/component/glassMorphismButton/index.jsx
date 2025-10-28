import { BrowserRouter, Link } from "react-router-dom";
import "./styles.css"
import { ColorsItems } from "./colorsItem";

const GlassMorphism = () => {
    return (
        // container
        <div className="  flex mx-10 flex-wrap justify-around">
            {/* btn */}
            <BrowserRouter > 
            {ColorsItems.map((item) => {
                return(
                    <div
                        key = {item.id}
                        style = {{'--color-bg' : item.color}}
                        className=" btn group btn-morphism">
                        <Link 
                            to = "/" 
                            className ="link-morphism  "                    
                        > 
                            Read More
                        </Link>
                    </div>
                )
            })}           
            </BrowserRouter>
        </div>
    )
}
export default GlassMorphism;
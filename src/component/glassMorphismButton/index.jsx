import { BrowserRouter, Link } from "react-router-dom";
import "./styles.css"

const GlassMorphism = () => {
    return (
        // container
        <div className="w-[600px] flex flex-wrap justify-around">
            {/* btn */}
            <BrowserRouter >
            
            <div
                className=" btn group btn-morphism">
                <Link 
                    to = "/" 
                    className ="link-morphism group-hover:before:skew-x-45 group-hover:before:translate-x-[200%] group-hover:tracking-[3px] "                    
                > 
                    Read More
                </Link>
            </div>
            <div
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
                className=" btn group btn-morphism 
                        before:shadow-[0_0_5px_var(--color-bg),0_0_15px_var(--color-bg),0_0_30px_var(--color-bg),0_0_60px_var(--color-bg)]!
                        after:shadow-[0_0_5px_var(--color-bg),0_0_15px_var(--color-bg),0_0_30px_#1eff45,0_0_60px_var(--color-bg)]!
                        before:bg-[var(--color-bg)]!
                        after:bg-[var(--color-bg)]!
                ">
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
import { DotsList } from "./dotsList";
import "./styles.css"

const GoogleLoader = () => {
    return (
        // wrapper
        <div className="flex gap-5">
            {/* dot */}
            {DotsList.map((dots) => {
                return(
                    <div 
                        key = {dots.id}
                        style={{'--color-bg': `${dots.color}`, animationDelay : `${dots.delay}s`}}
                        className="h-[20px] w-[20px] rounded-[50%] bg-[var(--color-bg)] shadow-[0_5px_10px_rgba(0,0,0,.1)]
                        animate-[loaderGoogle_1s_ease-in-out_infinite_alternate] 
                    ">
                    </div>
                )  
            })}
        </div>
    )
}


export default GoogleLoader;
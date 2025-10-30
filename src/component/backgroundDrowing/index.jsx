import imgBackGround from "./img/background.png"
import imgTransparent from "./img/transparent.png"
import imgOrginal from "./img/original.jpg"
import imgArrwo from "./img/arrow.png"


const BackgroundChangeEffect = () => {


    return(
        <>
            <div 
            className="top-10 relative w-full max-w-4xl aspect-[1.5/1] overflow-hidden select-none cursor-ew-resize rounded-lg shadow-2xl bg-slate-900">

                <img src={imgTransparent} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

            </div>
            <div 
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                // style = {{clipPath : `inset(0 ${100 - }% 0 0 )`}}
            >
                <img src="" alt="" />

            </div>
        </>
    )
}
export default BackgroundChangeEffect
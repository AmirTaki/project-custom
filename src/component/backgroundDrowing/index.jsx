import imgBackGround from "./img/background.png"
import imgTransparent from "./img/transparent.png"
import imgOrginal from "./img/original.jpg"
import imgArrwo from "./img/arrow.png"


const BackgroundChangeEffect = () => {


    return(
        <div 
            style={{backgroundImage : `url(${imgBackGround})`}}
            className="mt-10 w-[700px] bg-white h-100 relative">
            

            <img src={imgTransparent} alt="" className="z-20! absolute "/>
            <img src={imgOrginal} className="absolute top-0  h-[100%] z-10" alt="" />
        </div>
    )
}
export default BackgroundChangeEffect
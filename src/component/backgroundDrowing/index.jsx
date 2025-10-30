import imgBackGround from "./img/background.png"
import imgTransparent from "./img/transparent.png"
import imgOrginal from "./img/original.jpg"
import imgArrwo from "./img/arrow.png"

const BackgroundChangeEffect = () => {
    return(
        //  container
        <div className="w-[100%] h-[100vh] flex justify-center items-center-safe bg-[#f3fbff]">
            {/* img-box */}
            <div 
                style={{backgroundImage : `url(${imgBackGround})` }}
                className="w-[60%] m-auto leading-0 overflow-hidden relative"
            >
                {/* img-box */}
                <img src={imgTransparent} alt="" className="w-[100%]" />

                {/* img-wrap */}
                <div className="w-[20px] absolute left-0 top-0 overflow-hidden">
                    <img src={imgOrginal} alt="" />
                </div>
            </div>

            {/* line */}
            <span className="w-[40px]  h-[100%] cursor-ew-resize bg-blue absolute left-[20%] top-[0]">
                {/* arrow */}
                <img src={imgArrwo} alt="" className="w-[100px] absolute top-[50%] ml-[-20px] mt-[-20px]"/>
            </span>
        </div>
    )
}
export default BackgroundChangeEffect
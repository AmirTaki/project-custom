import imgBackGround from "./img/background.png"
import imgTransparent from "./img/transparent.png"
import imgOrginal from "./img/original.jpg"

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
            <span className="w-[1px] h-[100%] cursor-ew-resize bg-white absolute left-[20%] top-[0]"></span>
        </div>
    )
}
export default BackgroundChangeEffect
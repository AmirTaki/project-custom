import imgBackGround from "./img/background.png"
import imgTransparent from "./img/transparent.png"

const BackgroundChangeEffect = () => {
    return(
        //  container
        <div className="w-[100%] h-[100vh] flex justify-center items-center-safe bg-[#f3fbff]">
            {/* img-box */}
            <div 
                style={{backgroundImage : imgBackGround}}
                className="w-[60%] m-auto leading-0 overflow-hidden relative"
            >
                {/* img-box */}
                <img src={imgTransparent} alt="" className="w-[100%]" />

                {/* img-wrap */}
            </div>
        </div>
    )
}
export default BackgroundChangeEffect
import imgBack from "./img/back.png"

const HorzinotalScrolling = () => {
    return(
        // gallery wrap
        <div className="flex justify-items items-center m-[10%_auto]">
            {/* back */}
            <img src= {imgBack} alt="" className="" />


            {/* gallery */}
            <div className="w-[900px] flex overflow-scroll">
                <div className="w-[100%] grid grid-cols-3 gap-[20px] p-[10px] flex-none"></div>
            </div>

        </div>
    )
}

export default HorzinotalScrolling;
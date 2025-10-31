const ImageHoverOverlayEffects = () => {
    return(
        // container
        <div className="relative w-[1100px] flex flex-wrap">
            {/* box  overflow hidden*/}
            <div className="relative w-[275px] h-[275px] duration-500 hover:z-10 hover:scale-125 hover:shadow-[0_25px_40px_rgba(0,0,0,.5)]">
                {/* imgBx */}
                <div className="absolute top-0 left-0 w-full h-full">
                    {/* img  */}
                </div>
            </div>
        </div>
    )
}
export default ImageHoverOverlayEffects;
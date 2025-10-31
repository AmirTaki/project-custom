const ImageHoverOverlayEffects = () => {
    return(
        // container
        <div className="relative w-[90%] flex flex-wrap bg-amber-100">
            {/* box  overflow hidden*/}
            <div className="relative w-[275px] h-[275px] duration-500 hover:z-10! hover:scale-125 hover:shadow-[0_25px_40px_rgba(0,0,0,.5)] group">
                {/* imgBx */}
                <div className="absolute top-0 left-0 w-full h-full
                   before:content-['asdf'] before:w-full before:h-full before:z-10! before:absolute before:top-0 before:left-0 before:bg-[linear-gradient(180deg,#f00,#000)]! before:mix-blend-multiply! before:duration-500 before:opacity-0 group-hover:before:opacity-100! ">
                    {/* img  */}
                    <img 
                        // className="absolute top-0 left-0 w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ybGR8ZW58MHx8MHx8fDA%3D" alt="" 
                        />
                </div>
            </div>
        </div>
    )
}
export default ImageHoverOverlayEffects;
const ImageSlider = () => {
    return(
    <div className="w-full h-[600px] bg-red-200">
        
        {/*slider  overflow-hidden*/}
        <div className="h-[100vh] w-[100vw] relative ">
            {/* list */}
            <div className="">
                {/* item */}
                <div className="w-full h-full absolute inset-0"></div>
            </div>
        </div>
    </div>
    )
}

export default ImageSlider;
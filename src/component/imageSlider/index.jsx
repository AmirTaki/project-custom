import img1 from "./image/img1.jpg"
const ImageSlider = () => {
    return(
    <div className="w-full h-full bg-red-200 overflow-hidden">
        
        {/*slider  overflow-hidden*/}
        <div className="h-[100vh] w-[100vw] relative overflow-hidden ">
            {/* list */}
            <div className="">
                {/* item */}
                <div className="w-full h-full absolute inset-0">
                    {/* img */}
                    <img src = {img1} alt="" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default ImageSlider;
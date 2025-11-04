import img1 from './image/img8.jpg'
const GalleryImage = () => {
    return(
        // imageWrpper
        <div className="w-full h-screen bg-[rgba(0,0,0,.9)] fixed top-0 left-0 flex justify-center items-center z-[200]">
            <img src={img1} alt="" />
        </div>
    )
}

export default GalleryImage;
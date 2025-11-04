import img1 from './image/img8.jpg'
const GalleryImage = () => {
    return(
        // imageWrpper
        <div className="w-full h-screen bg-[rgba(0,0,0,.9)] fixed top-0 left-0 flex justify-center items-center z-[200]">
            <img src={img1} alt="" className='w-[90%] max-w-[500px]'/>
            <span className='absolute top-[5%] right-[5%] text-[30px] font-[sans-serif]  text-white cursor-pointer'>
                X
            </span>
        </div>
    )
}

export default GalleryImage;
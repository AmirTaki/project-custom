import img1 from './image/img8.jpg'
const GalleryImage = () => {
    return(
        <>
        {/* imageWrpper */}
        <div className="w-full h-screen bg-[rgba(0,0,0,.9)] fixed top-0 left-0 hidden justify-center items-center z-[200]">
            <img src={img1} alt="" className='w-[90%] max-w-[500px]'/>
            <span className='absolute top-[5%] right-[5%] text-[30px] font-[sans-serif]  text-white cursor-pointer'>
                X
            </span>
        </div>
        {/* img-gallery */}
        <div 
            className="w-[80%] m-[100px_auto_50px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[30px]"
        >
            {/* img */}
            <img src={img1} alt="" 
                className='w-full cursor-pointer transition duration-1000 ease-in-out hover:scale-75 hover:shadow-[0_32px_75px_rgba(68,77,136,.2)]'
            />
        </div>
        </>
        

    )
}

export default GalleryImage;
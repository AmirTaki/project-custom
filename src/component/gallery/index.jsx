import { useReducer } from 'react';
import { DataGallery } from './dataImg';
import img1 from './image/img8.jpg'
import './styles.css'
const GalleryImage = () => {

    const [state, disptach] = useReducer(reducer, DataGallery)

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
            className="w-[80%] h-[750px]  overflow-y-scroll m-[100px_auto_50px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[30px] scrollbarGarllery "
        >
            {state.map((item) => {
                return(

                    //  img 
                    <img key = {item.id} src={item.image} alt="" 
                        className='w-[99%] h-full cursor-pointer transition duration-1000 ease-in-out hover:scale-75 hover:shadow-[0_32px_75px_rgba(68,77,136,.2)] ' 
                    />
                )
            })}
        </div>
        </>
        

    )
}

export default GalleryImage;
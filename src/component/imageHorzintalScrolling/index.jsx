import { useCallback, useEffect, useRef,} from "react"
import './styles.css'
import imgBack from "./img/back.png"
import imgNext from './img/next.png'
import img1 from './img/image-1.png'
import img2 from './img/image-2.png'
import img3 from './img/image-3.png'
import img4 from './img/image-4.png'
import img5 from './img/image-5.png'
import img6 from './img/image-6.png'


const HorzinotalScrolling = () => {
    const imgList = [img1, img2, img3, img4, img5, img6]
    const galleryRef =  useRef(null)

 
    const handlerWheel = useCallback((event) => {
        event.preventDefault();
        const container =  galleryRef.current
        if(!container) return;
        container.scrollLeft += event.deltaY ;
    },[])

    useEffect(() => {
        const container = galleryRef.current
        if(!container) return;

        container.addEventListener('wheel', handlerWheel, {passive : false})

        return () => {
            container.removeEventListener('wheel', handlerWheel)
        }
    }, [handlerWheel])

    const handlerChange = (move) => {
        const container = galleryRef.current
        if(!container) return
        container.style.scrollBehavior = 'smooth'
        move === 'next' ?   container.scrollLeft += container.offsetWidth : container.scrollLeft -= container.offsetWidth
    }

    return(
            <div className="relative ">
                {/* back */}
                <img 
                    src= {imgBack} 
                    alt="" 
                        className="w-[50px] cursor-pointer m-[40px] absolute -left-20 top-50 z-50" 
                        onClick={() => {handlerChange('back')}}
                />
                
                <div 
                    ref = {galleryRef}
                    className="bg-white w-[960px] max-lg:w-[640px]!  max-md:w-[320px]! h-[380px] mt-20 flex flex-wrap  flex-col  justify-evenly overflow-x-scroll overflow-y-hidden  scrollbar-hide"
                >

                    {imgList.map((item,index) => {
                        return(
                            <div 
                                key = {index}
                                className="bg-gray-200 w-[300px] h-[95%] mx-[10px] "
                            >
                                <img src={item} alt="" className="w-[100%] h-[100%] grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110"  />
                            </div>          
                        )
                    })}
                </div>

                {/* next */}
                <img 
                    src={imgNext} 
                    alt="" 
                    className="w-[50px] cursor-pointer m-[40px] absolute -right-20 top-50 z-50" 
                    onClick={()=> {handlerChange('next')}}    
                />

            </div>

    )
}

export default HorzinotalScrolling;
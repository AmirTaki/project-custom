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

    const handlerBack = () => {
        const container = galleryRef.current
        if(!container) return
        container.style.scrollBehavior = 'smooth'
        container.scrollLeft -= 900
    }
    const handlerNext = () => {
        const container = galleryRef.current
        if(!container) return
        container.style.scrollBehavior = 'smooth'
        container.scrollLeft += 900
    }

    return(
        // gallery 
        <div className="flex justify-center items-center mx-auto my-[10%] bg-blue-700 w-[90%] h-[400px] ">
            {/* back */}
            <img 
                src= {imgBack} 
                alt="" 
                className="w-[50px] cursor-pointer m-[40px]" 
                onClick={() => {handlerBack()}}
            />


            {/* gallery */}
            <div ref = {galleryRef} className=" bg-amber-300  w-[90%] h-[100%]  flex overflow-x-scroll overflow-y-hidden  scrollbar-hide">
                <div className=" w-[100%] md:w-100 grid grid-cols-3 gap-[20px] p-[10px] flex-none">
                    <span>
                        <img src={img1} alt="" className="w-[100%] h-100 grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110" />
                    </span>
                    <span>
                        <img src={img2} alt="" className="w-[100%] grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110" />
                    </span>
                    <span>
                        <img src={img3} alt="" className="w-[100%] grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110" />
                    </span>
                </div>
                <div className="w-[100%] grid grid-cols-3 gap-[20px] p-[10px] flex-none ">
                    <span>
                        <img src={img4} alt="" className="w-[100%] grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110" />
                    </span>
                    <span>
                        <img src={img5} alt="" className="w-[100%] grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110" />
                    </span>
                    <span>
                        <img src={img6} alt="" className="w-[100%] grayscale-100 duration-500 hover:grayscale-0 cursor-pointer hover:scale-110" />
                    </span>
                </div>
            </div>

            {/* next */}
            <img 
                src={imgNext} 
                alt="" 
                className="w-[50px] cursor-pointer m-[40px]" 
                onClick={()=> {handlerNext()}}    
            />
        </div>
    )
}

export default HorzinotalScrolling;
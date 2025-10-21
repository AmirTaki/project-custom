import {  createContext, useRef, useState } from "react"
import AnimatedOnScroll from "../animatedOnScroll/index.jsx"
import Card from "../card3D/index.jsx"
import ComponentNavigation from "../componentNavigation"
import DigitalClock from "../digitalClock/index.jsx"
import DownloadButton from "../downloadButton/index.jsx"
import LayerdHoverEffect from "../layerdHoverEffect"
import NavbarPaeg from "../navbarPage.jsx"
import AnimationEffect from "../animationEffect/index.jsx"
import AnimateEffect from "../animateEffect/index.jsx"
import CardHoverEffect from "../cardHoverEffect/index.jsx"
import LoadingAnimation from "../loadingAnimation/index.jsx"
import CustomRightClick from "../customRightClick/index.jsx"
import SelectMenu from "../selectMenu/index.jsx"

// 
import MouseDragComponent from "../drag/index.jsx"
// create context
export const navigationContext = createContext ()

const Home =  ()  => {

    // drag navigation
    const dragRef =  useRef(null)
    const [dragOffset, setDragOffset]  =  useState({x : 0, y : 0})
    const [position, setPosition] = useState({ x : 120, y : 500})
    const [isDragging, setIsDragging] = useState(false)
    
    const handleMouseUp = () => { setIsDragging(false)}
    const handleMouseLeave = () => {setIsDragging(false)}

    const handleMouseMove = (event) => {
        if(!isDragging) return;
       
        setPosition({
            x:event.clientX - dragOffset.x,
            y:event.clientY - dragOffset.y
        })
    }

    const handleMouseDown = (event) => {
        setIsDragging(true)
        const rect =  dragRef.current.getBoundingClientRect();
        setDragOffset({
            x : event.clientX - rect.left,
            y : event.clientY - rect.top
        })
        event.preventDefault()

    }

    // 

    // veiw projects 
    const  [view, setView] =   useState(false)   
    return(
        <div className={`bg-[#10131c] min-h-[100vh] ${view ? "" : "flex justify-center items-center"}`} >
            <div  
                onMouseUp={handleMouseUp} 
                onMouseMove={handleMouseMove} 
                onMouseLeave={handleMouseLeave}  
                className={` ${view ? "flex" : 'hidden'} bg-[#10131c] min-h-[100vh]  flex-col justify-center items-center gap-35 `}
            >        

                {/* component navigation */}
                <ComponentNavigation />

                {/* Navbar */}
                <NavbarPaeg />

                {/* animation on Scroll */}
                <AnimatedOnScroll />
                
                {/* Digital Clock */}
                <DigitalClock />

                {/* Download Button */}
                <DownloadButton />

                {/* LayerdHoverEffect */}
                <LayerdHoverEffect />

                {/* card 3d */}
                <Card />

                {/* animation effects */}
                <AnimationEffect />

                {/* animate effects */}
                <AnimateEffect />

                {/* card hover effect */}
                <CardHoverEffect />

                {/* loading animation */}
                <LoadingAnimation />

                {/* custom right click */}
                <CustomRightClick />
                
                {/* select menu */}
                <SelectMenu />
            </div>

            <MouseDragComponent />
            <div className="h-100 w-100 text-white"></div>
        </div>   
    )
}

export default Home
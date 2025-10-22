import { createContext, useCallback, useRef, useState} from "react"
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
// create context
export const navigationContext = createContext ()

const Home =  ()  => {

    // doctMenu
    const DoctsMenuRef = useRef(null)
    const dragLocationRef = useRef({x : 0, y : 0})
    const isDraggingDocts = useRef(false)
    
    // navigation
    const NavigationRef =  useRef(null)
    const dragPostionRef = useRef({x : 0, y : 0})
    const isDraggingNavigation = useRef(false)


    const handlerMouseUp = useCallback(() => {
        if(isDraggingDocts.current){
            isDraggingDocts.current = false
        }
        else if(isDraggingNavigation.current){
            isDraggingNavigation.current = false
        }
    }, [])

   const handlerMouseLeave = useCallback(() => {
        if(isDraggingDocts.current){
            isDraggingDocts.current = false
        }
        else if(isDraggingNavigation.current){
            isDraggingNavigation.current = false
        }
    }, [])

    const handlerMouseMove = useCallback((e) => {
        if(isDraggingDocts.current){
            const x =  e.clientX - dragLocationRef.current.x;
            const y =  e.clientY - dragLocationRef.current.y;
            DoctsMenuRef.current.style.left = `${x}px`;
            DoctsMenuRef.current.style.top = `${y}px`
        }
        if(isDraggingNavigation.current){
            const x = e.clientX - dragPostionRef.current.x;
            const y = e.clientY - dragPostionRef.current.y;
            NavigationRef.current.style.left = `${x}px`
            NavigationRef.current.style.top = `${y}px`
        }
        else {
            return
        }
    }, [])

    // veiw projects 
    const  [view, setView] =   useState(false)   
    return(
        <div 
            className={`bg-[#10131c] min-h-[100vh] ${view ? "" : "flex justify-center items-center"}`} 
        >
            <div 
                onMouseUp={handlerMouseUp}
                onMouseLeave={handlerMouseLeave}  
                onMouseMove={handlerMouseMove} 
                className={` ${view ? "flex" : 'hidden'} bg-[#10131c] min-h-[100vh]  flex-col justify-center items-center gap-35 `}
            >        
                <navigationContext.Provider value = {{DoctsMenuRef, dragLocationRef, isDraggingDocts, NavigationRef, dragPostionRef, isDraggingNavigation}}>
                    {/* component navigation */}
                    <ComponentNavigation />
                </navigationContext.Provider>

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



            {/* <MouseDragComponent /> */}
            <div className="h-100 w-100 text-white"></div>
        </div>   
    )
}

export default Home
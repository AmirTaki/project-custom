import { createContext, useCallback, useEffect, useRef, useState} from "react"
import { handlerMouseLeave, handlerMouseMove, handlerMouseUp } from "./navigationFunctional.jsx"
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
import DropDrownMenu from "../dropDrownMenu.jsx/index.jsx"
import EnergyButton from "../energyButton/index.jsx"
import EnglishDictionary from "../englishDictionary/index.jsx"
import FlashLight from "../flashLightEffect/index.jsx"
import FooterAnimated from "../footerAnimated/index.jsx"
import GenerateQrCode from "../generateQrCode/index.jsx"

// create context
export const navigationContext = createContext ()

const Home =  ()  => {

    // doctMenu
    const DoctsMenuRef = useRef(null)
    const dragLocationRef = useRef({x : 0, y : 0})
    const isDraggingDocts = useRef(false)
    
    // navigation
    const NavigationRef =  useRef(null)
    const dragPostionRef = useRef({x : 120, y : 120})
    const isDraggingNavigation = useRef(false)

    // veiw projects 
    const  [view, setView] =   useState(true)   
    return(
        <div 
            className={`bg-[#10131c] min-h-[100vh] ${view ? "" : "flex justify-center items-center"}`} 
        >
            <div 
                onMouseUp={() => {handlerMouseUp(isDraggingDocts, isDraggingNavigation)}}
                onMouseLeave={() => {handlerMouseLeave(isDraggingDocts, isDraggingNavigation)}}  
                onMouseMove={(e) => {handlerMouseMove(e, isDraggingDocts, dragLocationRef, DoctsMenuRef, isDraggingNavigation, dragPostionRef, NavigationRef)}} 
            
                className={` ${view ? "flex" : 'hidden'} bg-[#10131c] min-h-[100vh]  flex-col justify-center items-center gap-52 `}
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

                {/* drop drown menu */}
                <DropDrownMenu />
               
                {/* energy button */}
                <EnergyButton />
            
                {/* english dictionary */}
                <EnglishDictionary />
            
                {/* flash light effect */}
                {/* <FlashLight /> */}
            
                {/* Generate Qr Code */}
                <GenerateQrCode />
               
                {/* footer animated */}
                <FooterAnimated />
        
            </div>

            {/* user location */}

            <div className="h-100 w-100 text-white"></div>
        </div>   
    )
}

export default Home
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
import { useState } from "react"
 
const Home =  ()  => {

    const  [view, setView] =   useState(false)
    return(
        <div  
            className={`  bg-[#10131c] min-h-[100vh] flex flex-col justify-center items-center gap-15 `}
        >        

            <div className={`${view ? "flex justify-center items-center flex-col" : "hidden"}`}>

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
            </div>
            
            <div className="h-100 w-100"></div>
        </div>
   
    )
}

export default Home
import AnimatedOnScroll from "../animatedOnScroll/index.jsx"
import ComponentNavigation from "../componentNavigation"
import DigitalClock from "../digitalClock/index.jsx"
import DownloadButton from "../downloadButton/index.jsx"
import LayerdHoverEffect from "../layerdHoverEffect"
import NavbarPaeg from "../navbarPage.jsx"

const Home =  ()  => {
    return(
        <div 
            className={`  bg-[#10131c] h-[20000px] `}
        >        

            {/* component navigation */}
            <ComponentNavigation />

            {/* Navbar */}
            <NavbarPaeg />

            {/* Digital Clock */}
            {/* <DigitalClock /> */}

            {/* Download Button */}
            {/* <DownloadButton /> */}

            {/* LayerdHoverEffect */}
            {/* <LayerdHoverEffect /> */}

            {/* animation on Scroll */}
            <AnimatedOnScroll />
        </div>
   
    )
}

export default Home
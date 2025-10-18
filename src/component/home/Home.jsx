import AnimatedOnScroll from "../animatedOnScroll/index.jsx"
import ComponentNavigation from "../componentNavigation"
import DigitalClock from "../digitalClock/index.jsx"
import DownloadButton from "../downloadButton/index.jsx"
import LayerdHoverEffect from "../layerdHoverEffect"
import NavbarPaeg from "../navbarPage.jsx"

const Home =  ()  => {
    return(
        <div 
            className={`  bg-[#10131c] min-h-[100vh] flex flex-col `}
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
            {/* <DownloadButton /> */}

            {/* LayerdHoverEffect */}
            {/* <LayerdHoverEffect /> */}

        </div>
   
    )
}

export default Home
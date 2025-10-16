import ComponentNavigation from "../componentNavigation"
import DigitalClock from "../digitalClock/index.jsx"
import DownloadButton from "../downloadButton/index.jsx"
import LayerdHoverEffect from "../layerdHoverEffect"
import NavbarPaeg from "../navbarPage.jsx"


const Home =  ()  => {
    return(
        <div 
            className={`h-[100vh] bg-[#10131c] flex justify-center items-center  `}
        >        

            {/* component navigation */}
            <ComponentNavigation />

            {/* Navbar */}
            <NavbarPaeg />

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
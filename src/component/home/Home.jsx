import ComponentNavigation from "../componentNavigation"
import DownloadButton from "../downloadButton/index.jsx"
import LayerdHoverEffect from "../layerdHoverEffect"
import NavbarPaeg from "../navbarPage.jsx"

const Home =  ()  => {
    return(
        <div 
            className={`h-[100vh] bg-[#10131c]   `}
        >        

            {/* component navigation */}
            <ComponentNavigation />

            {/* Navbar */}
            <NavbarPaeg />

            {/* download button */}
            {/* <DownloadButton /> */}

            {/* LayerdHoverEffect */}
            {/* <LayerdHoverEffect /> */}
        </div>
   
    )
}

export default Home
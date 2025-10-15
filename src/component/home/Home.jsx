import { createContext } from "react"
import ComponentNavigation from "../componentNavigation"
import LayerdHoverEffect from "../layerdHoverEffect"
import PageSearch from "../pageSearch"
import SearchInput from "../search"
import NavbarPaeg from "../navbarPage.jsx"



const Home =  ()  => {
    return(
   
        <div 
            className={`h-[100vh] bg-[#10131c] flex justify-center items-center   `}
        >        

            {/* component navigation */}
            <ComponentNavigation />

            {/* Navbar */}
            <NavbarPaeg />

            {/* LayerdHoverEffect */}
            {/* <LayerdHoverEffect /> */}
        </div>
   
    )
}

export default Home
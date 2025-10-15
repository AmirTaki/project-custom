import { createContext } from "react";
import Navbar from "../navbar";
import PageSearch from "../pageSearch";

export const searchContext = createContext()

const NavbarPaeg = () => {
    return(
       <>
            {/* NAVBAR  => bg-no-repeat bg-cover bg-center => style={{backgroundImage : `url(${background})`}} */}
            <Navbar />
            <PageSearch />
            
       </>
    )
}

export default NavbarPaeg;
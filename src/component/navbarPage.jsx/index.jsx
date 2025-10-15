import { createContext } from "react";
import Navbar from "../navbar";
import PageSearch from "../pageSearch";

export const searchContext = createContext()

const NavbarPaeg = () => {
    
    const [active, setActive] = useState(true)
    return(
       <>
            <searchContext.Provider value = {{}} >
            
                {/* NAVBAR  => bg-no-repeat bg-cover bg-center => style={{backgroundImage : `url(${background})`}} */}
                <Navbar />
                <PageSearch />
            
                
            </searchContext.Provider> 
     
            
       </>
    )
}

export default NavbarPaeg;
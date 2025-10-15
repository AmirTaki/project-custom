import { createContext } from "react"
import ComponentNavigation from "../componentNavigation"
import LayerdHoverEffect from "../layerdHoverEffect"
import Navbar from "../navbar"
import PageSearch from "../pageSearch"
import SearchInput from "../search"



const Home =  ()  => {
    return(
   
        <div 
            className={`h-[100vh] bg-[#10131c] flex justify-center items-center   `}
        >        

            {/* component navigation */}
            <ComponentNavigation />

            {/* NAVBAR  => bg-no-repeat bg-cover bg-center => style={{backgroundImage : `url(${background})`}} */}
            <Navbar />


            {/* LayerdHoverEffect */}
            {/* <LayerdHoverEffect /> */}

            <PageSearch />
            <SearchInput />
        </div>
   
    )
}

export default Home
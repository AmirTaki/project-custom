import { useState } from "react"
import ComponentNavigation from "../componentNavigation"
import LayerdHoverEffect from "../layerdHoverEffect"
import Navbar from "../navbar"
import SearchInput from "../search"


const Home =  ()  => {
    const [activeSearch, setActiveSearch] = useState(false)
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

          <SearchInput activeSearch={activeSearch} setActiveSearch={setActiveSearch}/>
        </div>
   
    )
}

export default Home
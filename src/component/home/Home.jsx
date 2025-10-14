import ComponentNavigation from "../componentNavigation"
import LayerdHoverEffect from "../layerdHoverEffect"
import Navbar from "../navbar"




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
            <LayerdHoverEffect />


            {/* search */}
        </div>
   
    )
}

export default Home
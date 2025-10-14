import LayerdHoverEffect from "../layerdHoverEffect"
import MagicNavigationMenu from "../magicNavigationMenu"
import Navbar from "../navbar"
import SwitchButton from "../switchButton"


const Home =  ()  => {
    return(
   
        <div 
            className={`h-[100vh] bg-[#10131c] flex justify-center items-center   `}
        >        
            
        
            {/* NAVBAR  => bg-no-repeat bg-cover bg-center => style={{backgroundImage : `url(${background})`}} */}
            <Navbar />


            {/* LayerdHoverEffect */}
            <LayerdHoverEffect />
        </div>
   
    )
}

export default Home
import DoctsMenu from "../9DoctsMenu"
import LayerdHoverEffect from "../layerdHoverEffect"
import MagicNavigationMenu from "../magicNavigationMenu"
import Navbar from "../navbar"
import Navigation from "../navigation"
import SwitchButton from "../switchButton"


const Home =  ()  => {
    return(
   
        <div 
            className={`h-[100vh] bg-[#10131c] flex justify-center items-center   `}
        >

            <Navigation />
            <DoctsMenu />

            {/* NAVBAR  => bg-no-repeat bg-cover bg-center => style={{backgroundImage : `url(${background})`}} */}
            <Navbar />

            {/* magic navigation menu */}
            <MagicNavigationMenu />
            

            {/* button switch animation */}
            <SwitchButton />

            {/* LayerdHoverEffect */}
            <LayerdHoverEffect />
        </div>
   
    )
}

export default Home
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

            {/* NAVIGATION & DOCTS MENE 9  =>  bg-linear-[25deg,red_5%,yellow_60%,lime_90%,teal] ,bg-[#10131c]   */}
            {/* <Navigation /> */}
            {/* <DoctsMenu /> */}

            {/* NAVBAR  => bg-no-repeat bg-cover bg-center => style={{backgroundImage : `url(${background})`}} */}
            <Navbar />

            {/* magic navigation menu */}
            {/* <MagicNavigationMenu /> */}
            
            {/* LayerdHoverEffect */}
            {/* <LayerdHoverEffect /> */}

            {/* button switch animation */}
            <SwitchButton />

        </div>
   
    )
}

export default Home
import DoctsMenu from "../9DoctsMenu";
import MagicNavigationMenu from "../magicNavigationMenu";
import Navigation from "../navigation";
import SwitchButton from "../switchButton";


const ComponentNavigation = () => {
    return (
        <>
            {/* button switch animation */}
            <SwitchButton />

            {/* NAVIGATION & DOCTS MENE 9  =>  bg-linear-[25deg,red_5%,yellow_60%,lime_90%,teal] ,bg-[#10131c]   */}
            <Navigation />
            <DoctsMenu />

            
            {/* magic navigation menu */}
            <MagicNavigationMenu />

        </>
    )
}

export default ComponentNavigation;
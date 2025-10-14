import { useReducer } from "react";
import DoctsMenu from "../9DoctsMenu";
import MagicNavigationMenu from "../magicNavigationMenu";
import Navigation from "../navigation";
import SwitchButton from "../switchButton";

const ComponentNavigation = () => {


    const reducer = (state, action) => {
        switch (action.type){
            case "switchChange" : 
                return state.map((item) => ({
                    ...item,
                    status : item.id === action.payload.box ? !item.status : item.status
                }))    

            case  "switchHandle" : 
                return {...state, listSwitch : {...state.listSwitch,  [action.payload.box] : !state.listSwitch[action.payload.box]}}
        }
    }



    // {id : 0, status : false},
    // {id : 1, status : false},
    // {id : 2, status : false},
    const [stateSwich, dispatchSwitch] = useReducer(reducer, {
        listSwitch : {}
    });
    
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
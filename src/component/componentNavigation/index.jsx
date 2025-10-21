import { createContext, useContext, useReducer } from "react";
import DoctsMenu from "../9DoctsMenu";
import MagicNavigationMenu from "../magicNavigationMenu";
import Navigation from "../navigation";
import SwitchButton from "../switchButton";
import { dragContext } from "../home/Home";
 

export const switchNavigationContext =  createContext()

const ComponentNavigation = () => {

   const {dragHandler} =  useContext(dragContext)

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
        <switchNavigationContext.Provider  value = {{stateSwich, dispatchSwitch}}>

            {/* button switch animation */}
            <SwitchButton />

            {/* NAVIGATION & DOCTS MENE 9  =>  bg-linear-[25deg,red_5%,yellow_60%,lime_90%,teal] ,bg-[#10131c]   */}
            
            <div 
                onDragStart={dragHandler()}
                draggable = {true}    
                className={`${stateSwich.listSwitch[0] ? "flex" : "hidden"}`}
            >
                <Navigation  />
            </div>

            <div className={`${stateSwich.listSwitch[1] ? "flex" : "hidden"}`}>
                <DoctsMenu />
            </div>

            
            {/* magic navigation menu */}
            <div className={`${stateSwich.listSwitch[2] ? "flex" : "hidden"}`}>
                <MagicNavigationMenu />
            </div>

        </switchNavigationContext.Provider>
    )
}

export default ComponentNavigation;
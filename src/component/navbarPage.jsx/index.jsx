import { createContext, useEffect, useReducer, useState } from "react";
import Navbar from "../navbar";
import PageSearch from "../pageSearch";

export const searchContext = createContext()

const NavbarPaeg = () => {
    
    const [active, setActive] = useState(true)
    const [activeSearch, setActiveSearch] = useState(false)
    
    const reducer = (state, action) => {
        switch(action.type){
            case "" :
                return {...state}
        }
    }
    const [state, dispath] = useReducer(reducer, {
        active : true,
        activeSearch : false    
    })
    

    return(
       <>
            <searchContext.Provider value = {{active, setActive, activeSearch, setActiveSearch}} >
            
                {/* NAVBAR  => bg-no-repeat bg-cover bg-center => style={{backgroundImage : `url(${background})`}} */}
                <Navbar />
                <PageSearch />
            
                
            </searchContext.Provider> 
     
            
       </>
    )
}

export default NavbarPaeg;
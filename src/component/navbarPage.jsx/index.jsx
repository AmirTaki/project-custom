import { createContext, useEffect, useReducer, useState } from "react";
import Navbar from "../navbar";
import PageSearch from "../pageSearch";
export const searchContext = createContext()

const NavbarPaeg = () => {
    
    const reducer = (state, action) => {
        switch(action.type){
            case "inputWidth" :
                return {...state, activeSearch : action.payload.flag }
            case "openSearch": 
       
                return  {...state, active : action.payload.flag  }
        }
    }
    const [stateSearch, dispathSearch] = useReducer(reducer, {
        active : true,
        activeSearch : false    
    })
    
    

    return(
       <>
            <searchContext.Provider value = {{stateSearch, dispathSearch}} >
            
                {/* NAVBAR  => bg-no-repeat bg-cover bg-center => style={{backgroundImage : `url(${background})`}} */}
                <Navbar />
                <PageSearch />
            
                
            </searchContext.Provider> 
     
            
       </>
    )
}

export default NavbarPaeg;
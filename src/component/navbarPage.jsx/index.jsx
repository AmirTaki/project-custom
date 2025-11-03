import { createContext, useEffect, useReducer, useState } from "react";
import Navbar from "../navbar";
export const searchContext = createContext()
const NavbarPaeg = () => {
    
    // const reducer = (state, action) => {
    //     switch(action.type){
    //         case "inputWidth" :
    //             return {...state, activeSearch : action.payload.flag }
    //         case "openSearch": 
    //             return  {...state, active : action.payload.flag  }
    //     }
    // }
    // const [stateSearch, dispathSearch] = useReducer(reducer, {
    //     active : true,
    //     activeSearch : false    
    // })
    
    // useEffect(() => {
    //     if(!stateSearch.active){
    //         const timer = setTimeout(() => {dispathSearch({type : 'inputWidth', payload : {flag : true}})}, [100])
    //         return() => { clearTimeout(timer)}
    //     }
    // }, [stateSearch.active])
    
    // useEffect(() => {
    //     if(!stateSearch.activeSearch){
    //         const timer = setTimeout(() => {dispathSearch({type : 'openSearch', payload : {flag : true}})}, [900])
    //         return () => {clearInterval(timer)}
    //     }
    // }, [stateSearch.activeSearch])

    return(  
        <searchContext.Provider value = {{}} >
            {/* NAVBAR  => bg-no-repeat bg-cover bg-center => style={{backgroundImage : `url(${background})`}} */}
            <Navbar />  
        </searchContext.Provider> 
    )
}

export default NavbarPaeg;
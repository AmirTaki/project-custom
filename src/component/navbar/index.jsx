import {  useEffect, useReducer,  } from "react"
import { BrowserRouter } from "react-router-dom"
import { inialState, reducer } from "./inialState"
import SearchInput from "./search"
import Header from "./header"
import './styles.css'

const Navbar = () => {
    
    const [state, dispatch] =  useReducer(reducer, inialState)

    const handlerResize = () => {
        dispatch({type : 'handlerResize', payload : {size : window.innerWidth <= 1024 ? true : false }})  
    } 

    useEffect(() => {handlerResize()},[])

    useEffect(() => {
        window.addEventListener("resize", handlerResize)
        return()=> {
            window.removeEventListener('resize', handlerResize)
        }
    }, )
   
    useEffect(() => {
        if(!state.input){
            const timer = setTimeout(() => {dispatch({type : 'handlerSearch', payload : {flag : false}})}, [1000])
            return() => {clearInterval(timer)}
        }
    },[state.input])

    return(
        <div 
        className={`text-white w-[100%]   fixed! top-0 bg-[rgba(0,0,0,.7)]  z-[2000]! h-[60px]
            ${state.search ? "flex justify-center items-center" : ""}  
        `}>
            <BrowserRouter>
                <Header state = {state} dispatch = {dispatch} />
            </BrowserRouter>
            
            <div className={` absolute  left-10! right-10 bg-transparent ${state.search ? "flex" : "hidden"}   `}>
                <SearchInput state = {state} dispatch = {dispatch}/>
            </div>
        </div>
    )
}

export default Navbar
import {  useEffect, useReducer,  } from "react"
import { BrowserRouter, Link } from "react-router-dom"
import SearchInput from "./search"
import './styles.css'

const Navbar = () => {
    
    const reducer =(state, action) => {
        switch(action.type){
            case "handlerResize":
                return {...state, resize : action.payload.size}
            case "hadlerDropMenu" : 
                return {...state, dropMenu : !state.dropMenu}
            case 'handlerSearch' : 
                return{...state, search : action.payload.flag, input : true  }
            case "handerWidth" : 
                return {...state, input : false }
        }
    }
    const [state, dispatch] =  useReducer(reducer, {
        resize : false,
        dropMenu : false,
        search : false,
        input : false 
    })

    const handlerResize = () => {
        dispatch({type : 'handlerResize', payload : {size : window.innerWidth <= 1024 ? true : false  }})  
    } 

    useEffect(() => {
        window.addEventListener("resize", handlerResize)
        return()=> {
            window.removeEventListener('resize', handlerResize)
        }
    }, )
   
    useEffect(() => {handlerResize()},[])

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
                <div className={`${state.search ? 'hidden' : "flex"} transition-all duration-1000  justify-between items-center  h-[60px] px-[5rem]! max-lg:px-[2rem]!`}>

                    <div className={` flex items-center justify-center  `}>
                        {/* logo */}
                        <div className="">
                            <div className="text-[1.5rem] font-bold  cursor-pointer duration-300 hover:text-[orange]" >Web developer </div>
                        </div>
                    </div>
                    <ul className =
                        {`
                            ${state.resize ? " overflow-hidden  duration-500 h-0 flex! flex-col items-center justify-center fixed right-[2rem] max-md:right-[5%] max-md:left-[5%]  max-md:w-[90%]! w-[300px] rounded-2xl top-[60px] bg-[rgba(0,0,0,.7)]" : " flex justify-center items-center gap-10 "}
                            ${state.resize && state.dropMenu ? "h-[260px] duration-500 " : ""} 
                        `}    
                    >
                        <li  className={`${state.resize ? " p-[.7rem] text-md" : "text-md"} cursor-pointer duration-300 hover:text-[orange] `} ><Link to = '/'>Home</Link></li>
                        <li  className={`${state.resize ? " p-[.7rem] text-md" : "text-md"} cursor-pointer duration-300 hover:text-[orange] `} ><Link to = '/'>About</Link></li>
                        <li  className={`${state.resize ? " p-[.7rem] text-md" : "text-md"} cursor-pointer duration-300 hover:text-[orange] `} ><Link to = '/'>Services</Link></li>
                        <li  className={`${state.resize ? " p-[.7rem] text-md" : "text-md"} cursor-pointer duration-300 hover:text-[orange] `} ><Link to = '/'>Contact</Link></li>
                        <div className="border-0 w-[80%] text-center oumdine-0 px-[1rem] py-[.5rem] rounded-[20px] cursor-pointer text-[.8rem] font-bold bg-[orange] hover:scale-111 duration-200 active:scale-95 lg:hidden!">
                            Get Started
                        </div>
                    </ul>

                    <div 
                        className={`flex items-center justify-center  max-lg:hidden!  } `}
                    >
                        <div className="border-0 outline-0 px-[1rem] py-[.5rem]
                            rounded-[20px] cursor-pointer text-[.8rem] font-bold bg-[orange]
                            hover:scale-111 duration-200 active:scale-95 
                            ">
                            Get Started
                        </div>
                    </div>

                    <div className={`${state.resize ? 'block' : 'hidden'} `}>
                        <div 
                            onClick={()=>{dispatch({type : 'hadlerDropMenu'})}}
                            className="text-white text-[1.5rem] cursor-pointer">
                            <i className={`${state.dropMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}`}></i>
                        </div>
                    </div>
                    <div 
                        className= {`absolute ${state.resize ? "right-20" : "right-10"} top-4 ${state.search ? "hidden" : "block"}  ` }
                        onClick={() => {dispatch({type : "handlerSearch", payload : {flag : true}})}}
                    >
                        <i className="bi bi-search hover:text-blue-500 duration-200 cursor-pointer!  bg--400"></i>
                    </div>
                </div>
            </BrowserRouter>
            
            <div className={` absolute  left-10! right-10 bg-transparent ${state.search ? "flex" : "hidden"}   `}>
                <SearchInput state = {state} dispatch = {dispatch}/>
            </div>

           

          
      
   
        </div>
    )
}

export default Navbar
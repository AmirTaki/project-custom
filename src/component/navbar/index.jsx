import { useContext, useEffect, useReducer, useState } from "react"
import { BrowserRouter, Link } from "react-router-dom"
import SearchInput from "../search"
// import { searchContext } from "../navbarPage.jsx"

const Navbar = () => {
    const [dropMenu, setDrompMenu] =  useState(false)
    const [resize, setResize] = useState(false)

    // const {stateSearch, dispathSearch} =  useContext(searchContext)

    const handlerNavbar = () => {
        setDrompMenu(false)
        setResize(window.innerWidth <= 1024 ? true : false)
    }
  
    

    const reducer =(state, action) => {
        switch(action.type){
            case "handlerResize":
                return {...state, resize : action.payload.size}
        }
    }
    const [state, dispatch] =  useReducer(reducer, {
        resize : false,

    })

    const handlerResize = () => {
         dispatch({type : 'handlerResize', payload : {size : window.innerWidth <= 1024 ? true : false  }})  
     } 
    useEffect(() => {
        console.log(state.resize)
        window.addEventListener("resize", handlerResize)
        return()=> {
             window.removeEventListener('resize', handlerResize)
        }
    }, )
    useEffect(() => {handlerResize()},[])


    return(
        <div className="flex justify-between items-center  px-[5rem]! max-lg:px-[2rem]! text-white
        w-[100%]! fixed! top-0 bg-[rgba(0,0,0,.7)] h-[60px] z-[2000]! 
        ">
            <BrowserRouter>
                <div className={`items-center justify-center flex `}>
                    {/* logo */}
                    <div className="">
                        <a className="text-[1.5rem] font-bold  cursor-pointer duration-300 hover:text-[orange]" href="">Web developer </a>
                    </div>
                </div>
                <ul className={`${state.resize ? "bg-blue-500 overflow-hidden  flex! flex-col items-center justify-center fixed right-[2rem] max-md:right-[5%] max-md:left-[5%]  max-md:w-[90%]! w-[300px] rounded-2xl top-[60px]" : "bg-red-500 flex justify-center items-center gap-10 "}`}>
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

                <div className={`${state.resize ? 'block' : 'hidden'}`}>
                       <div 
                        onClick={()=>{setDrompMenu((prevDropMenu) => (!prevDropMenu))}}
                        className="text-white text-[1.5rem] cursor-pointer">
                        <i className={`${state.resize ? "fa-solid fa-xmark" : "fa-solid fa-bars"}`}></i>
                    </div>
                </div>
                   
          
            </BrowserRouter>
      
   
        </div>
    )
}

export default Navbar
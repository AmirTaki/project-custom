import { useContext, useEffect, useState } from "react"
import { BrowserRouter, Link } from "react-router-dom"
import SearchInput from "../search"
import { searchContext } from "../navbarPage.jsx"

const Navbar = () => {
    const [dropMenu, setDrompMenu] =  useState(false)
    const [resize, setResize] = useState(false)
    const {stateSearch, dispathSearch} =  useContext(searchContext)

    const handlerNavbar = () => {
        setDrompMenu(false)
        setResize(window.innerWidth <= 1024 ? true : false)
    }
  

    useEffect(() => {
        handlerNavbar()     
        return() => {
            window.addEventListener('resize', handlerNavbar)           
      }
    },[])



    return(
        <div className="flex justify-between items-center  px-[5rem] max-lg:px-[2rem] text-white
        w-[100%] fixed! top-0 bg-[rgba(0,0,0,.2)] h-[60px] z-[2000]! 
        ">
      
            <BrowserRouter >
                <div className={`items-center justify-center ${stateSearch.active ? "flex" : "hidden"}`}>
                    {/* logo */}
                    <div className="">
                        <a className="text-[1.5rem] font-bold  cursor-pointer duration-300 hover:text-[orange]" href="">Web developer </a>
                    </div>
                </div>
    
                <ul  className={`
                    ${stateSearch.active ? "flex" : "hidden"}
                    ${dropMenu ? "hidden" : "flex "} 
                    ${resize ? " h-0 overflow-hidden  flex! flex-col items-center justify-center fixed right-[2rem] max-md:right-[5%] max-md:left-[5%]  max-md:w-[90%] w-[300px] rounded-2xl top-[60px] " : "flex flex-row justify-center items-center gap-10"}
                    ${dropMenu && resize ? " transition-[height]! duration-500! ease-[cubic-bezier(.175,.885,.32,1.275)]! h-[260px]!  bg-[rgba(0,0,0,.2)]  overflow-hidden" 
                    : "h-0! duration-500 "}` 
                }>
                    <li  className={`${dropMenu ? " p-[.7rem] text-md" : "text-md"} cursor-pointer duration-300 hover:text-[orange] `} ><Link to = '/'>Home</Link></li>
                    <li  className={`${dropMenu ? " p-[.7rem] text-md" : "text-md"} cursor-pointer duration-300 hover:text-[orange] `} ><Link to = '/'>About</Link></li>
                    <li  className={`${dropMenu ? " p-[.7rem] text-md" : "text-md"} cursor-pointer duration-300 hover:text-[orange] `} ><Link to = '/'>Services</Link></li>
                    <li  className={`${dropMenu ? " p-[.7rem] text-md" : "text-md"} cursor-pointer duration-300 hover:text-[orange] `} ><Link to = '/'>Contact</Link></li>
                    <div className="border-0 w-[80%] text-center oumdine-0 px-[1rem] py-[.5rem] rounded-[20px] cursor-pointer text-[.8rem] font-bold bg-[orange] hover:scale-111 duration-200 active:scale-95 lg:hidden!">
                        Get Started
                    </div>
                </ul>
         
                    
                <div 
                    className={`flex items-center justify-center  max-lg:hidden ${stateSearch.active ? "flex" : "hidden"} `}
                >
                    <div className="border-0 outline-0 px-[1rem] py-[.5rem]
                        rounded-[20px] cursor-pointer text-[.8rem] font-bold bg-[orange]
                        hover:scale-111 duration-200 active:scale-95
                        ">
                        Get Started
                    </div>
                </div>

       
                <div  className={` lg:hidden! ${stateSearch.active ? "flex" : "hidden"}`}  >
                    <div 
                        onClick={()=>{setDrompMenu((prevDropMenu) => (!prevDropMenu))}}
                        className="text-white text-[1.5rem] cursor-pointer">
                        <i className={`${dropMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}`}></i>
                    </div>
                </div>
                <div onClick = {() => {dispathSearch({type : 'openSearch', payload : {flag : false}})}} className={`absolute  ${resize ? "right-20" : "right-10"} ${stateSearch.active ? "flex" : "hidden"} hover:scale-125! duration-300 `}>
                    <i className="bi bi-search hover:text-blue-500 duration-200 cursor-pointer "></i>
                </div>
                <div className={`${stateSearch.active ? "hidden!" : "absolute  left-10! right-10 bg-transparent "} `}>
                    <SearchInput  />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Navbar
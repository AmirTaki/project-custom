
import { useEffect, useState } from "react"
import { BrowserRouter, Link } from "react-router-dom"


const Navbar = () => {
    const [dropMenu, setDrompMenu] =  useState(false)
    const [resize, setResize] = useState(false)
    
    const handlerNavbar = () => {
        setDrompMenu(false)
    }

    const handerResize = () => {
        
    }
  

    useEffect(() => {
        window.addEventListener('resize', handlerNavbar)           

        return() => {
            window.addEventListener('resize', handlerNavbar)           
      }
    },[] )

    useEffect(() => {
        setResize (window.innerWidth <= 1024 ? true : false);
        return() => {
            setResize (window.innerWidth <= 1024 ? true : false);
        }
    },)

        //  "lg:flex flex-col items-center justify-center absolute right-[2rem]  top-[60px] transition-[height] duration-200 ease-[cubic-bezier(.175,.885,.32,1.275)] h-[280px]! w-[300px] bg-[rgba(0,0,0,.2)]  overflow-hidden"
        //                 : 'flex justify-center items-center gap-10 text-lg h-0 transition-[height] duration-200 ease-[cubic-bezier(.175,.885,.32,1.275)]  lg:justify-between lg:items-center lg:flex lg:gap-10 max-lg:hidden'

    return(
        <div className="flex justify-between items-center  px-[4rem] text-white
            w-[100%] fixed bg-[rgba(0,0,0,.2)] h-[60px]
        ">
            <BrowserRouter >
                <div className="flex items-center justify-center  ">
                    {/* logo */}
                    <div className="">
                        <a className="text-[1.5rem] font-bold  cursor-pointer duration-300 hover:text-[orange]" href="">Web developer </a>
                    </div>
                </div>
                               
       
                <ul  className={`${resize ? "hidden" : "flex flex-row justify-center items-center gap-12"}`}>
                    <li  className={`${dropMenu ? " p-[.7rem] text-md" : "text-md"} cursor-pointer duration-300 hover:text-[orange] `} ><Link to = '/'>Home</Link></li>
                    <li  className={`${dropMenu ? " p-[.7rem] text-md" : "text-md"} cursor-pointer duration-300 hover:text-[orange] `} ><Link to = '/'>About</Link></li>
                    <li  className={`${dropMenu ? " p-[.7rem] text-md" : "text-md"} cursor-pointer duration-300 hover:text-[orange] `} ><Link to = '/'>Services</Link></li>
                    <li  className={`${dropMenu ? " p-[.7rem] text-md" : "text-md"} cursor-pointer duration-300 hover:text-[orange] `} ><Link to = '/'>Contact</Link></li>
                    <div className="border-0 w-[80%] text-center oumdine-0 px-[1rem] py-[.5rem] rounded-[20px] cursor-pointer text-[.8rem] font-bold bg-[orange] hover:scale-111 duration-200 active:scale-95 lg:hidden!">
                        Get Started
                    </div>
                </ul>
         
                <div className="flex items-center justify-center  max-lg:hidden ">
                    <div className="border-0 outline-0 px-[1rem] py-[.5rem]
                        rounded-[20px] cursor-pointer text-[.8rem] font-bold bg-[orange]
                        hover:scale-111 duration-200 active:scale-95
                    ">
                        Get Started
                    </div>
                </div>
                <div className="lg:hidden">
                    <div 
                        onClick={()=>{setDrompMenu((prevDropMenu) => (!prevDropMenu))}}
                        className="text-white text-[1.5rem] cursor-pointer">
                        <i className={`${dropMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}`}></i>
                    </div>
                </div>
                
            </BrowserRouter>
        </div>
    )
}

export default Navbar
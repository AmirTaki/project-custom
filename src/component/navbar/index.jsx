
import { useEffect, useState } from "react"
import { BrowserRouter, Link } from "react-router-dom"


const Navbar = () => {
    const [dropMenu, setDrompMenu] =  useState(false)
    
    useEffect(() => {
      
      return() => {
        window.addEventListener('resize', setDrompMenu((prev) => (prev = false)))
      }
    },[] )

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
                <div className="  
                  justify-between items-center flex gap-10 max-lg:hidden
                ">
                    <ul className="  flex justify-center items-center gap-10 text-lg">
                        <li  className="cursor-pointer duration-300 hover:text-[orange]"><Link to = '/'>Home</Link></li>
                        <li  className="cursor-pointer duration-300 hover:text-[orange]"><Link to = '/'>About</Link></li>
                        <li  className="cursor-pointer duration-300 hover:text-[orange]"><Link to = '/'>Services</Link></li>
                        <li  className="cursor-pointer duration-300 hover:text-[orange]"><Link to = '/'>Contact</Link></li>
                    </ul>
                </div>
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
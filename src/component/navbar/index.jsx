import { useContext, useEffect, useReducer, useState } from "react"
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
  
    const initalNavbar = () => {

    }

    const reducer =(state, action) => {
        switch(action.type){
            case "":
                return {...state}
        }
    }
    const [state, dispatch] =  useReducer(reducer, initalNavbar)

    useEffect(() => {
        handlerNavbar()     
        return() => {
            window.addEventListener('resize', handlerNavbar)           
      }
    },[])



    return(
        <div className="flex justify-between items-center  px-[5rem]! max-lg:px-[2rem]! text-white
        w-[100%]! fixed! top-0 bg-[rgba(0,0,0,.7)] h-[60px] z-[2000]! 
        ">
            <BrowserRouter>
                <div className={`items-center justify-center `}>
                    {/* logo */}
                    <div className="">
                        <a className="text-[1.5rem] font-bold  cursor-pointer duration-300 hover:text-[orange]" href="">Web developer </a>
                    </div>
                </div>
            </BrowserRouter>
      
   
        </div>
    )
}

export default Navbar
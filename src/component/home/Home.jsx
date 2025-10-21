import {  createContext, useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react"
import AnimatedOnScroll from "../animatedOnScroll/index.jsx"
import Card from "../card3D/index.jsx"
import ComponentNavigation from "../componentNavigation"
import DigitalClock from "../digitalClock/index.jsx"
import DownloadButton from "../downloadButton/index.jsx"
import LayerdHoverEffect from "../layerdHoverEffect"
import NavbarPaeg from "../navbarPage.jsx"
import AnimationEffect from "../animationEffect/index.jsx"
import AnimateEffect from "../animateEffect/index.jsx"
import CardHoverEffect from "../cardHoverEffect/index.jsx"
import LoadingAnimation from "../loadingAnimation/index.jsx"
import CustomRightClick from "../customRightClick/index.jsx"
import SelectMenu from "../selectMenu/index.jsx"

// 
import MouseDragComponent from "../drag/index.jsx"
// create context
export const navigationContext = createContext ()

const Home =  ()  => {

    const NavigationRef =  useRef(null)
    const DotsMenuRef =  useRef(null)
 
    const reducerDrag = useCallback( (state, action) => {
        switch(action.type){
            case 'onMouseUp': 
            return {...state, flagDrag : action.payload.drag}
            
            // navigation
            case "onMouseMove" :          
                if(!state.flagDrag) return {...state}      

                return {...state, position : {
                    x : action.payload.event.clientX - state.drag.x,
                    y : action.payload.event.clientY - state.drag.y
                } }

            case 'onMouseDown' :
                const rect =  NavigationRef.current.getBoundingClientRect();
                action.payload.event.preventDefault()
        
                return {...state, flagDrag : action.payload.flag  ,drag : {
                    x : action.payload.event.clientX - rect.left,
                    y : action.payload.event.clientY - rect.top
                }}
        
            // Dots
            case "onMouseUpDots" :
                return {...state, dragLocatoin : action.payload.drag }

            case "onMouseMoveDots" :
                if(!state.dragLocatoin) return {...state}      

                return {...state, location : {
                    x : action.payload.event.clientX - state.dragLocation.x,
                    y : action.payload.event.clientY - state.dragLocation.y
                } }
        
            case "onMouseDownDocts" :
                const rectDots =  DotsMenuRef.current.getBoundingClientRect();
                action.payload.event.preventDefault()

                return {...state, dragLocatoin : action.payload.flag, dragLocation : {
                    x : action.payload.event.clientX - rectDots.left,
                    y : action.payload.event.clientY - rectDots.top
                }}
        }
    } ,[NavigationRef, DotsMenuRef])
    

    const initaionDragStae = useMemo( () => ({
        // navigation
        drag : {x : 0, y : 0},
        position :  {x : 120, y : 500},
        flagDrag : false, 
        // dots
        dragLocation : {x : 0, y:0},
        location : {x : 122, y : 200},
        dragLocatoin : false
        }),[NavigationRef, DotsMenuRef])

    const [dragState, dispatchDrag] = useReducer(reducerDrag,initaionDragStae )

    const handlerMouseUp = useMemo( () => (event) => {
        dispatchDrag({type : "onMouseUp", payload : { drag :  false}}),
        dispatchDrag({type : "onMouseUpDots", payload : { drag :  false}}) 
    }, [DotsMenuRef, NavigationRef])

    const handlerMouseLeave = useMemo(() => (event) => {
        dispatchDrag({type : "onMouseUp", payload : { drag :  false}}),
        dispatchDrag({type : "onMouseUpDots", payload : { drag :  false}})
    }, [DotsMenuRef, NavigationRef])

    const handlerMouseMove = useMemo( () => (event) => {
        dispatchDrag({type : "onMouseMove", payload : {event : event}}),
        dispatchDrag({type : "onMouseMoveDots", payload : {event : event}})
    }, [DotsMenuRef, NavigationRef])

    // veiw projects 
    const  [view, setView] =   useState(true)   
    return(
        <div 
            className={`bg-[blue] min-h-[100vh] ${view ? "" : "flex justify-center items-center"}`} 
        >
            <div 
                onMouseUp={handlerMouseUp}
                onMouseLeave={handlerMouseLeave}  
                onMouseMove={handlerMouseMove} 
                className={` ${view ? "flex" : 'hidden'} bg-[#10131c] min-h-[100vh]  flex-col justify-center items-center gap-35 `}
            >        
                <navigationContext.Provider value = {{dragState, dispatchDrag, NavigationRef, DotsMenuRef}} >
                    {/* component navigation */}
                    <ComponentNavigation />
                </navigationContext.Provider>

                {/* Navbar */}
                <NavbarPaeg />

                {/* animation on Scroll */}
                <AnimatedOnScroll />
                
                {/* Digital Clock */}
                <DigitalClock />

                {/* Download Button */}
                <DownloadButton />

                {/* LayerdHoverEffect */}
                <LayerdHoverEffect />

                {/* card 3d */}
                <Card />

                {/* animation effects */}
                <AnimationEffect />

                {/* animate effects */}
                <AnimateEffect />

                {/* card hover effect */}
                <CardHoverEffect />

                {/* loading animation */}
                <LoadingAnimation />

                {/* custom right click */}
                <CustomRightClick />
                
                {/* select menu */}
                <SelectMenu />
            </div>

            {/* <MouseDragComponent /> */}
            <div className="h-100 w-100 text-white"></div>
        </div>   
    )
}

export default Home
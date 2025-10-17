import { useReducer } from "react";
import SectionScroll from "./sectionScroll";
import SectionOne  from "./sectionOne";
import { DataSection } from "./dataSection";

const AnimatedOnScroll = () => {
    const reducer = (state, action) => {
        switch(action.type){
            case "scroll":
                const {bool} = action.payload;
                const {index} = action.payload;
            return {...state, [index] : bool };
        }
    }
    const [showAnimate, dispatch] =  useReducer(reducer, {})
    
    return(
        <>
            {DataSection.map((section) => {
                return(
                    <SectionScroll  dispatch= {dispatch} index = {0}>
                        <SectionOne 
                            showAnimate = {showAnimate[0]} h = {"Hi, I'm Codehal"} p = {"Animation on Scroll using React js and tailwind and hook"}  
                            
                            />   
                    </SectionScroll>      
                )
            })}
        </>
    )
       
}

export default AnimatedOnScroll;
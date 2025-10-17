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
                    <SectionScroll key = {section.id}  dispatch= {dispatch} >
                        <SectionOne 
                            showAnimate = {showAnimate[section.id]}
                            h = {section.h1}     
                            p = {section.p}
                            showSection = {section.showSection}
                            hideSection = {section.hideSection}
                            showStyles = {section.showStyles}
                            hideStyles = {section.hideStyles}    
                        />   
                    </SectionScroll>      
                )
            })}
        </>
    )
       
}

export default AnimatedOnScroll;
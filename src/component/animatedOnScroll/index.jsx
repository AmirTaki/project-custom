import { act, useReducer } from "react";
import SectionScroll from "./sectionScroll";
import Section  from "./section";
import { DataSection } from "./dataSection";

const AnimatedOnScroll = () => {
    const reducer = (state, action) => {
        switch(action.type){
            case "scroll":
                const {index} = action.payload
                const {bool} = action.payload

                state.map((item) => {
                    if (item.id === index){
                        return {...item, status : bool}
                    }
                    return item
                })
                return state
          
        }
    }
    const [showAnimate, dispatch] =  useReducer(reducer, DataSection)
    
    return(
        <>
            {showAnimate.map((section) => {
                return(
                    <div key = {section.id} className="overflow-x-hidden">
                        <SectionScroll index = {section.id}  dispatch= {dispatch} >
                            <Section 
                                showAnimate = {section.status}
                                h = {section.h1}     
                                p = {section.p}
                                showSection = {section.showSection}
                                hideSection = {section.hideSection}
                                showStyles = {section.showStyles}
                                hideStyles = {section.hideStyles}    
                            />   
                        </SectionScroll>      
                    </div>
                )
            })}
        </>
    )
       
}

export default AnimatedOnScroll;
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

                return state.map((item) => (
                    {...item,  status : item.id == index ? bool : item.status}
                ))
              
          
        }
    }
    const [showAnimate, dispatch] =  useReducer(reducer, DataSection)
    
    return(
        <>
            {showAnimate.map((section) => {
                return(
                    <div key = {section.id} className="overflow-x-hidden ">
                        <SectionScroll index = {section.id}  dispatch= {dispatch} >
                            <Section   section = {section} />   
                        </SectionScroll>      
                    </div>
                )
            })}
        </>
    )
       
}

export default AnimatedOnScroll;
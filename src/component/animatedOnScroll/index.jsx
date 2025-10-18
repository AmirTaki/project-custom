import { useReducer } from "react";
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
                <SectionScroll index = {section.id}  dispatch= {dispatch} >  
                    <div key = {section.id} className="overflow-x-hidden ">
                        <Section   section = {section} />   
                    </div>
                </SectionScroll>
            )
        })} 
        </>
    )
       
}

export default AnimatedOnScroll;
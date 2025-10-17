import { useReducer } from "react";
import SectionScroll from "./sectionScroll";
import SectionOne  from "./sectionOne";

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
            <SectionScroll  dispatch= {dispatch} index = {0}>
                <SectionOne showAnimate = {showAnimate[0]} />   
        
            </SectionScroll>
      
         

         
        </>
    )
       
}

export default AnimatedOnScroll;
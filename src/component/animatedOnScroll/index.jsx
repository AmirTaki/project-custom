import { useRef, useState } from "react";
import SectionScroll from "./sectionScroll";

const AnimatedOnScroll = () => {

    const [showAnimate, setShowAnimate] = useState(false)
    const sectionRef = useRef()
    return(
        <>

            <SectionScroll >
            {   
            // section
            <section
                ref = {sectionRef}
                // sec-1 show-animate
                className={`
                    ${showAnimate ? "translate-x-0" : "translate-x-[-100%]"}
                    flex justify-center items-center flex-col min-h-[100vh] overflow-hidden
                `}
                >
            {/* animate */}
            <h1 className={`
                ${showAnimate ? "opacity-100 blur-[0]" : "opacity-0 blur-[5px]"}  duration-1000
                relative text-[90px] text-[#fff]
            `}    
            >
                Hi, I'm Codehal
            </h1>
            
            <p  className={`
                    ${showAnimate ? "opacity-100 blur-[0]" : "opacity-0 blur-[5px]"}    duration-1000
                relative text-[35px]  text-[#0ef] font-[600]`}
            >Animation on Scroll using React js and tailwind and hock</p>
            </section>
            }
            </SectionScroll>

         
        </>
    )
       
}

export default AnimatedOnScroll;
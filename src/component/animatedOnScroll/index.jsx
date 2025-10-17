import { useEffect, useRef, useState } from "react";

const AnimatedOnScroll = () => {
    const [showAnimate, setShowAnimate] = useState(false)
    const sectionRef = useRef()
    const animatedScroll = () => {

    }

    useEffect(() => {
        window.addEventListener('scroll', animatedScroll )
        return() => {
            window.removeEventListener('scroll', animatedScroll )
        }
    }, [])

    return(
        <div className="">
            {/* section */}
            <section
                ref = {sectionRef}
                // sec-1 show-animate
                className={`
                    ${showAnimate ? "translate-x-0" : "translate-x-[-100%]"}
                    flex justify-center items-center flex-col min-h-[100vh] bg-[#1f242d] overflow-hidden
                    `}
            >
                {/* animate */}
                <h1 className={`
                    ${showAnimate ? "opacity-100 blur-[0]" : "opacity-0 blur-[5px]"}  duration-1000
                    relative text-[90px] text-[#fff]
                `}
               
                    
                >Hi, I'm Codehal</h1>
                
                <p  className={`
                     ${showAnimate ? "opacity-100 blur-[0]" : "opacity-0 blur-[5px]"}    duration-1000
                    relative text-[35px]  text-[#0ef] font-[600]`}
                >Animation on Scroll using React js and tailwind and hock</p>
            </section>

        </div>
    )
}

export default AnimatedOnScroll;
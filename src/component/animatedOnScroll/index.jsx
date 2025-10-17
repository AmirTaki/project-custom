import { useState } from "react";

const [showAnimate, setShowAnimate] = useState(false)
const AnimatedOnScroll = () => {
    return(
        <div className="">
            {/* section */}
            <section
                // sec-1 show-animate
                className="flex justify-center items-center flex-col min-h-[100vh] bg-[#1f242d] overflow-hidden"
            >
                {/* animate */}
                <h1 className="
                    opacity-0 blur-[5px] duration-1000
                    relative text-[90px] text-[#fff]
                    "
                >Hi, I'm Codehal</h1>
                
                <p  className="
                    opacity-0 blur-[5px] duration-1000
                    relative text-[35px]  text-[#0ef] font-[600]
                "
                >Animation on Scroll using React js and tailwind and hock</p>
            </section>

        </div>
    )
}

export default AnimatedOnScroll;
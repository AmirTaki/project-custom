import { useRef, useState } from "react"

const GlowingCorner = () => {
    const [state, setState] = useState({top : "20px", left : "20px"})

    const cardRef =  useRef(null)
    const handlerMouseMove = (e) => {
        const x =  e.pageX - cardRef.current.offsetLeft;
        const y =  e.pageY - cardRef.current.offsetTop;   
        

        console.log(x)
        console.log(y)

        cardRef.current.style.setProperty('--x', x + 'px')
        cardRef.current.style.setProperty('--y', y + 'px')
    } 

    return( 
        // container
        <div className="relative flex items-center justify-center min-h-[100vh] gap-[50px] bg-[#222] flex-wrap">
            {/* card */}
            <div 
                ref = {cardRef}
                onMouseMove={handlerMouseMove}
                style={{'--left-position' : "20px", '--top-position' : '50px', "--color-bg" : "#0f0"}}
                className="relative w-[320px] h-[400px] bg-[rgba(45,45,45,1)] rounded-[20px] overflow-hidden
                before:content-[''] before:absolute before:-translate-x-1/2 before:-translate-y-1/2
                before:left-[var(--left-position)] before:top-[var(--top-position)] before:bg-[linear-gradient(var(--color-bg),blue,red)]
                before:w-[360px] before:h-[360px] before:rounded-[102%] before:opacity-0 before:transition-[left 0s_top 0s] duration-500
                after:content-[''] after:absolute after:inset-[2px] after:bg-[rgba(45,45,45,.9)] after:rounded-[18px]
                hover:before:opacity-100!
            "></div>
        </div>
    )
}

export default GlowingCorner;
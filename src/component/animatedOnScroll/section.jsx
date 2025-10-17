const Section = ({showAnimate, h, p, showSection, hideSection, showStyles, hideStyles}) => {
    return(
        // section
        <section
            // sec- show-animate
            className={`
                ${showAnimate ? showSection : hideSection}
                flex justify-center items-center flex-col min-h-[100vh] overflow-hidden
            `}
            >
        {/* animate */}
        <h1 className={`
            ${showAnimate ? showStyles : hideStyles}  duration-1000
            relative text-[90px] text-[#fff]
        `}    
        >
            {h}  
        </h1>
        {/* animate */}
        <p  className={`
            ${showAnimate ? showStyles : hideStyles}    duration-1000
            relative text-[35px]  text-[#0ef] font-[600]`}
        >{p}</p>
        </section>
            
    )
}

export default Section
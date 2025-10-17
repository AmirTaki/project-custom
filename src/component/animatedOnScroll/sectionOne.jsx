const SectionOne = ({showAnimate, h, p}) => {
    return(
        // section
        <section
            // sec- show-animate
            className={`
                ${showAnimate ? "" : ""}
                flex justify-center items-center flex-col min-h-[100vh] overflow-hidden
            `}
            >
        {/* animate */}
        <h1 className={`
            ${showAnimate ? "opacity-100 blur-[0]" : "opacity-0 blur-[5px]"}  duration-1000
            relative text-[90px] text-[#fff]
        `}    
        >
            {h}  
        </h1>
        {/* animate */}
        <p  className={`
            ${showAnimate ? "opacity-100 blur-[0]" : "opacity-0 blur-[5px]"}    duration-1000
            relative text-[35px]  text-[#0ef] font-[600]`}
        >{p}</p>
        </section>
            
    )
}

export default SectionOne
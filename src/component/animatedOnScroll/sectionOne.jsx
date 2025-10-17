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
            ${showAnimate ? "" : ""}  duration-1000
            relative text-[90px] text-[#fff]
        `}    
        >
            {h}  
        </h1>
        {/* animate */}
        <p  className={`
            ${showAnimate ? "" : ""}    duration-1000
            relative text-[35px]  text-[#0ef] font-[600]`}
        >{p}</p>
        </section>
            
    )
}

export default SectionOne
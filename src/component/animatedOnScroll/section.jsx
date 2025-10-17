const Section = ({section}) => {
    return(
        // section
        <section
            // sec- show-animate
            className={`
                ${section.status ? section.showSection : section.hideSection}
                flex justify-center items-center flex-col min-h-[100vh]  overflow-x-hidden! duration-1000
            `}
            >
        {/* animate */}
        <h1 className={`
            ${section.status ? section.showStyles : section.hideStyles}  
            relative text-[90px] text-[#fff]
        `}    
        >
            {section.h1}  
        </h1>
        {/* animate */}
        <p  className={`
            ${section.status ? section.showStyles : section.hideStyles}    
            relative text-[35px]  text-[#0ef] font-[600]`}
        >{section.p}</p>
        </section>
            
    )
}

export default Section
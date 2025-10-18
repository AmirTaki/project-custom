const Section = ({section}) => {

    return (
   // section
        <section
        // sec- show-animate
        className={`
            ${section.status ? section.showSection : section.hideSection}
            flex justify-center items-center flex-col min-h-[100vh]   duration-1000 
        `}
        >
            {/* animate */}
            <h1 className={`
                ${section.status ? section.showStyles : section.hideStyles}  
                relative text-[90px] text-[#fff]  duration-800
            `}    
            >
                {section.h1}<span className= {`${section.spanClass &&
                    section.status ?  section.spanShow : "w-[100%]"    
                }absolute top-0 right-0 h-[100%] bg-[#1f242d] duration-1000 delay[.2s]`}></span>
            </h1>
            {/* animate */}
            <p  className={`
                ${section.status ? section.showStyles : section.hideStyles}    
                relative text-[35px]  text-[#0ef] font-[600]  duration-800`}
            >
                {section.p}<span className= {`${section.span&section.span}`}></span>
            </p>
    </section>  
          
)
         

        
    
}

export default Section
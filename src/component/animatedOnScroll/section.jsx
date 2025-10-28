const Section = ({section}) => {

    return (
   // section
        <section
        // sec- show-animate
        className={`
            ${section.status ? section.showSection : section.hideSection}
            flex justify-center  flex-wrap items-center flex-col min-h-[100vh] overflow-x-hidden   duration-1000 
        `}
        >
            {/* animate */}
            <h1 className={`
                ${section.status ? section.showStyles : section.hideStyles}  
                relative text-[90px] text-[#fff]  duration-800 max-w-[100%]
            `}    
            >
                {section.h1}<span className= {`
                absolute top-0 right-0 h-[100%] bg-[#10131c] duration-1000 delay[.2s] 
                ${section.status ?  section.spanShow : section.spanHide } `}></span>
            </h1>
            {/* animate */}
            <p  className={`
                ${section.status ? section.showStyles : section.hideStyles}    
                relative text-[35px]  text-[#0ef] font-[600]  duration-800  max-w-[100%]`}
            >
                {section.p}<span className= {`
                absolute top-0 right-0 h-[100%] bg-[#10131c] duration-1000 delay[.5s]
                ${section.status ?  section.spanShow : section.spanHide } `}></span>
            </p>
            {/* images */}
            <div className="flex gap-5 flex-wrap">
                <img className={`${section.status ? "translate-x-0 opacity-100 blur-[0]" : "translate-x-[-100%] opacity-0 blur-3xl" } max-w-[400px] mx-0 my-[30px] delay-[0s] duration-500`} src={`${section.src1}`} alt="" />
                <img className={`${section.status ? "translate-x-0 opacity-100 blur-[0]" : "translate-x-[-100%] opacity-0 blur-3xl" } max-w-[400px] mx-0 my-[30px] delay-[.2s] duration-500`} src={`${section.src2}`} alt="" />
                <img className={`${section.status ? "translate-x-0 opacity-100 blur-[0]" : "translate-x-[-100%] opacity-0 blur-3xl" } max-w-[400px] mx-0 my-[30px] delay-[.4s] duration-500`} src={`${section.src3}`} alt="" />
            </div>
    </section>  
          
)
         

        
    
}

export default Section
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
                {section.h1}<span className= {`
                absolute top-0 right-0 h-[100%] bg-[#10131c] duration-1000 delay[.2s]
                ${section.status ?  section.spanShow : section.spanHide } `}></span>
            </h1>
            {/* animate */}
            <p  className={`
                ${section.status ? section.showStyles : section.hideStyles}    
                relative text-[35px]  text-[#0ef] font-[600]  duration-800`}
            >
                {section.p}<span className= {`
                absolute top-0 right-0 h-[100%] bg-[#10131c] duration-1000 delay[.5s]
                ${section.status ?  section.spanShow : section.spanHide } `}></span>
            </p>
            {/* images */}
            <div className="">
                <img src={`${section.src1}`} alt="" />
                <img src={`${section.src2}`} alt="" />
                <img src={`${section.src3}`} alt="" />
            </div>
    </section>  
          
)
         

        
    
}

export default Section
const SectionDelay = ({section}) => {
    return (
    // section
        <section
        // sec- show-animate
        className={`
            flex justify-center items-center flex-col min-h-[100vh]   duration-1000 
        `}
        >
            {/* animate */}
            <h1 className={`
                relative text-[90px] text-[#fff]  duration-800
            `}    
            >
               Very Good <span className={` absolute top-0 right-0 h-[100%] duration-1000 delay-200 ${section ? "w-0" : "w-[100%]"}`} ></span>
            </h1>
            {/* animate */}
            <p  className={`
                relative text-[35px]  text-[#0ef] font-[600]  duration-800`}
            >
                Animation on Scroll using HTML CSS and Javascript <span className={`absolute top-0 right-0 h-[100%] duration-1000 delay-600 ${section ? "w-0" : "w-[100%]"}`}  ></span>
            </p>
        </section>    
    )
}

export default SectionDelay;
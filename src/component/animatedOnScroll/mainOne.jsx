const MainOne = () => {
    return (
    // section
        <section
        // sec- show-animate
        className={`
            ${section.status ? 'translate-x-0 ': 'translate-x-[-100%]'}
            flex justify-center items-center flex-col min-h-[100vh]   duration-1000 
        `}
        >
            {/* animate */}
            <h1 className={`
                ${section.status ? 'opacity-100 blur-[0]' : 'opacity-0 blur-3xl'}  
                relative text-[90px] text-[#fff]  duration-800
            `}    
            >
                Hi, I'm Codehal
            </h1>
            {/* animate */}
            <p  className={`
                ${section.status ? 'opacity-100 blur-[0]' : 'opacity-0 blur-3xl'}    
                relative text-[35px]  text-[#0ef] font-[600]  duration-800`}
            >
              Animation on Scroll using HTML CSS and Javascript
            </p>
    </section>  
    )
}

export default MainOne;
const AnimatedOnScroll = () => {
    return(
        <div className="">
            {/* section */}
            <section
                // sec-1 show-animate
                className="flex justify-center items-center flex-col min-h-[100vh] bg-[#1f242d] overflow-hidden"
            >
                {/* animate */}
                <h1 className="
                    opacity-0 blur-[5px] duration-1000
                "
                >Hi, I'm Codehal</h1>
                
            </section>

        </div>
    )
}

export default AnimatedOnScroll;
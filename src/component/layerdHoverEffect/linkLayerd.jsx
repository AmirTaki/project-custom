const LinkLayerd = () => {
    return(
        <Link className="mx-[25px] my-[0] decoration-0 text-white block relative       group">
            <div className="w-[55px] h-[55px] transition-transform duration-300
                hover:transform hover:rotate-[-35deg] hover:skew-x-[20deg]
            
            ">
                {/* span */}
                <span className="custom-span-layerd"></span>
                <span className="custom-span-layerd"></span>
                <span className="custom-span-layerd"></span>
                {/* span icon */}
                <span 
                    className="fab fa-facebook-f 
                    custom-span-layerd text-[30px] text-center leading-[55px]!
                "></span>
            </div>
            {/* text */}
            <div className="
                absolute bottom-[-5%] left-[50%] translate-x-[-50%] 
                transition-[bottom_0.3s_ease,opacity_0.3s_ease] opacity-0 
                group-hover:opacity-100! group-hover:bottom-[-60%]!
            ">Facebook</div>
        </Link>
    )
}

export default LinkLayerd
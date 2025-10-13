import { BrowserRouter, Link } from "react-router-dom";


const LayerdHoverEffect = () => {
    return(
        <div className="inline-flex">
            <BrowserRouter>
                <Link className="mx-[25px] my-[0] decoration-0 text-white block relative       group">
                    <div className="w-[55px] h-[55px] transition-transform duration-300
                        hover:transform hover:rotate-[-35deg] hover:skew-x-[20deg]
                  
                    ">
                        <span className="custom-span-layerd"></span>
                        <span className="custom-span-layerd"></span>
                        <span className="custom-span-layerd"></span>
                        <span 
                            className="fab fa-facebook-f 
                            custom-span-layerd text-[30px] text-center leading-[55px]!
                        "></span>
                    </div>
                    <div className="
                        absolute bottom-[-5%] left-[50%] translate-x-[-50%] 
                        transition-[bottom_0.3s_ease,opacity_0.3s_ease] opacity-0 
                        group-hover:opacity-100! group-hover:bottom-[-60%]!
                    ">Facebook</div>
                </Link>
            </BrowserRouter>
        </div>
    )
}
export default LayerdHoverEffect;
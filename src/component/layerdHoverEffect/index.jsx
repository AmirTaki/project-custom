import { BrowserRouter, Link } from "react-router-dom";


const LayerdHoverEffect = () => {
    return(
        <div className="inline-flex">
            <BrowserRouter>
                <Link className="mx-[25px] my-[0] decoration-0 text-white block relative">
                    <div className="w-[55px] h-[55px] transition-transform duration-300">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fab fa-facebook-f"></span>
                    </div>
                    <div className="">Facebook</div>
                </Link>
            </BrowserRouter>
        </div>
    )
}
export default LayerdHoverEffect;
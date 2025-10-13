import { BrowserRouter, Link } from "react-router-dom";


const LayerdHoverEffect = () => {
    return(
        <div className="text-white">
            <BrowserRouter>
                <Link>
                    <div className="">
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
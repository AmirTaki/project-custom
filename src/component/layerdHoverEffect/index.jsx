import { BrowserRouter, Link } from "react-router-dom";


const LayerdHoverEffect = () => {
    return(
        <div className="">
            <BrowserRouter>
                <Link>
                    <div className="">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Link>
            </BrowserRouter>
        </div>
    )
}
export default LayerdHoverEffect;
import { BrowserRouter, Link, Route } from "react-router-dom";

const MagicNavigationMenu = () => {
    return(
        // navigation
        <div className="
            flex justify-center items-center   w-[400px] h-[70px] bg-white relative rounded-[10px]"
            >
                <BrowserRouter>
                    <ul>
                        <li>
                            <Link to = '/' >
                                <span></span>
                                <span></span>
                            </Link>
                        </li>
                    </ul>
                </BrowserRouter>
        </div>
    )
}

export default MagicNavigationMenu;
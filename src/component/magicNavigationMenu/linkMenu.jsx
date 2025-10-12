import { Link } from "react-router-dom";

Link
const LinkMenu = () => {
    return(
        <li>
            <Link to = '/' >
                <span className=""><i className="bi bi-house-door"></i></span>
                <span className="">Home</span>
            </Link>
        </li>
    )
}

export default LinkMenu;
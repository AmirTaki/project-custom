import { Link } from "react-router-dom";

const LinkMenu = ({item, toggle}) => {
    return(
        <Link to = "/">
            <span
                className=""
            >
                <i className={item.icon}></i>
            </span>
        </Link>
    )
}

export default LinkMenu;
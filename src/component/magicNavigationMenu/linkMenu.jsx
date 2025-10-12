import { Link } from "react-router-dom";

Link
const LinkMenu = ({item}) => {
    return(
        <li>
            <Link to = '/' >
                <span className=""><i className={`${item.icon}`}></i></span>
                <span className="">{item.name}</span>
            </Link>
        </li>
    )
}

export default LinkMenu;
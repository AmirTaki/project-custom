import { Link } from "react-router-dom";

const LinkMenu = ({item, toggle}) => {
    return(
        <Link to = "/">
            <span
                className={`absolute w-[7px] h-[7px] flex items-center justify-center`}
            >
                <i className={item.icon}></i>
            </span>
        </Link>
    )
}

export default LinkMenu;
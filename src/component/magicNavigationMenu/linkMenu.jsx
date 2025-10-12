import { Link } from "react-router-dom";

Link
const LinkMenu = ({item}) => {
    return(
        <li className={`relative list-none w-[70px] h-[70px] z-10`}>
            <Link to = '/' >
                <span className=""><i className={`${item.icon}`}></i></span>
                <span className="">{item.name}</span>
            </Link>
        </li>
    )
}

export default LinkMenu;
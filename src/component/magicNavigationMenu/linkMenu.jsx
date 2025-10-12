import { Link } from "react-router-dom";

Link
const LinkMenu = ({item}) => {
    return(
        <li className={`relative list-none w-[70px] h-[70px] z-10`}>
            <Link to = '/' 
                className={`relative flex justify-center items-center flex-col w-[100%] text-center font-[500]`}
            >
                <span className=""><i className={`${item.icon}`}></i></span>
                <span className="">{item.name}</span>
            </Link>
        </li>
    )
}

export default LinkMenu;
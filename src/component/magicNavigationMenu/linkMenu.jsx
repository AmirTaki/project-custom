import { Link } from "react-router-dom";

Link
const LinkMenu = ({item}) => {
    return(
        <li className={`relative list-none w-[70px] h-[70px] z-10`}>
            <Link to = '/' 
                className={`relative flex justify-center items-center flex-col w-[100%] text-center font-[500]`}
            >
                <span 
                    className={`relative block line-[75px] text-[1.5em] text-center duration-500 text-[#222327]`}
                >
                    <i className={`${item.icon}`}></i>
                </span>
                
                <span 
                    className={`absolute text-[#222327] font-[400] text-[.75em] duration-500`}
                >
                    {item.name}
                </span>
            </Link>
        </li>
    )
}

export default LinkMenu;
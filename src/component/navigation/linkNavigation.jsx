import { Link } from "react-router-dom";


const LinkNavigation = ({icon}) => {
    return (
        <li className="absolute left-0  [transform-origin:100px] transform duration-500 delay-200">
            <Link to="/" className="flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full text-[#111] shadow-[0_3px_4px_rgba(0,0,0,0.15)]  ">
                <i className={icon}></i>
            </Link>
        </li>
    )
}

export default LinkNavigation;
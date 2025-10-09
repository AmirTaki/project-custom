import { Link } from "react-router-dom";


const LinkNavigation = ({icon, conter}) => {
    return (

        <li className={`
            absolute left-0 origin-[100px] transition-all duration-500 delay-[clac(.1s*${conter})] transform-[rotate(-deg)_translateX(80px)]`}
            >
            <Link 
                to="/" 
                className={`flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full text-[#111] shadow-[0_3px_4px_rgba(0,0,0,0.15)]  
                transform-rotate-[calc(360deg/-8*${conter})]
                `}>
                <i className={icon}></i>
            </Link>
        </li>
        //            

    )
}

export default LinkNavigation;
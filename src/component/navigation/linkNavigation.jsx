import { Link } from "react-router-dom";


const LinkNavigation = ({icon, conter}) => {
    return (

        <li 
            style={{transitionDelay: `calc(.1s * ${conter})` }}
            className={`
                absolute  origin-[100px] transition-all duration-500  transform-[rotate(0deg)_translateX(0px)]`}
            >
            <Link 
                style={{transform : `rotate(calc(360deg / -8 * ${conter}))`}}
                to="/" 
                className={`flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full text-[#111] shadow-[0_3px_4px_rgba(0,0,0,0.15)]  
                 [transform-origin:100px_center]
                `}>
                <i className={icon}></i>
            </Link>
        </li>
        //            

    )
}

export default LinkNavigation;
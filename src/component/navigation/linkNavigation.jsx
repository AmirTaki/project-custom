import { Link } from "react-router-dom";


const LinkNavigation = ({icon, index, toggle}) => {
    return (

        <li 
            style={{"--i":index}}
            className={`
                ${toggle ? "" : "transform-rotate-[calc(360deg/8*var(50))]"}
                absolute left-0 list-none origin-[100px] transition-all duration-500 delay-[calc(0.1s*var(20))] transform-[rotate(0deg)_translateX(80px)]`
            }
            >
            <Link 
                style={{transform : `rotate(calc(360deg / -8 * ${index}))`}}
                to="/" 
                className={`flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full text-[#111] shadow-[0_3px_4px_rgba(0,0,0,0.15)]  
                 [transform-origin:100px_center] duration-500!
                `}>
                <i className={icon}>{index}</i>
            </Link>
        </li>
        //            

    )
}

export default LinkNavigation;
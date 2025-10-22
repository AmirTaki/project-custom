import { Link } from "react-router-dom";

const LinkNavigation = ({icon, index, toggle,}) => {
    return (

        <li 
            style={{ 
                // transitionDelay : `${toggle ? `calc(.1s * ${index}` : `calc(.1s * ${index}`}` ,
                transitionDelay : `calc(.1s * ${index}` ,
                transform : `${toggle ? `rotate(0deg) translateX(80px)` : `rotate(calc(360deg / 8 * ${index})`}`,
                // left : `(${NavigationRef.current.x} px` , top : `${NavigationRef.current.y - 40 }px`
            }}
            className={`absolute -left-17 top-2  list-none origin-[100px] transition-transform duration-[500ms]!  `}
        >
            <Link 
                // style={{transform : `${toggle ? `` : `rotate(calc(360deg / -8 * ${index}))`} `}}
                style={{transform : `rotate(calc(360deg / -8 * ${index}))` }}
                to="/" 
                className={`flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full text-[#111] shadow-[0_3px_4px_rgba(0,0,0,0.15)]  
                duration-[500ms]!  hover:text-red-500
                `}>
                <i className={icon}></i>
            </Link>
        </li>      
    )
}

export default LinkNavigation;
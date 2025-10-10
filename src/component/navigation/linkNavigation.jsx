import { Link } from "react-router-dom";


const LinkNavigation = ({icon, index, toggle}) => {
    return (

        <li 
            style={{ transitionDelay : `${toggle ? `` : `calc(.1s * ${index}`}` ,
                transform : `${toggle ? `` : `rotate(0deg) translateX(80px)`}` 
         }}
            className={`
               
                absolute   list-none origin-[100px] transition-all duration-500 
                `
            }
            >
            <Link 
                style={{transform : `${toggle ? `` : `rotate(calc(360deg / -8 * ${index}))`} `}}
                to="/" 
                className={`flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full text-[#111] shadow-[0_3px_4px_rgba(0,0,0,0.15)]  
                 [transform-origin:100px] duration-500!
                `}>
                <i className={icon}>{index}</i>
            </Link>
        </li>
        //            

    )
}

export default LinkNavigation;
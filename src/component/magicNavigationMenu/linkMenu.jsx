import { Link } from "react-router-dom";


const LinkMenu = ({item}) => {
    return(
        <li 
            className={`relative list-none w-[70px] h-[70px] z-10`}
            onClick={() => {}}
        >
            <Link to = '/' 
                className={`relative flex justify-self-center items-center flex-col w-[100%] text-center font-[500] ` }
            >
                <span 
                    className={`
                        relative block leading-[75px] text-[1.5em] text-center duration-500 text-[#222327]
                        ${item.status ? "translate-y-[-32px]" : "translate-y-0"}
                        `}
                >
                    <i className={`${item.icon}`}></i>
                </span>
                
                <span 
                    className={`
                        absolute text-[#222327] font-[400] text-[.75em] duration-500 tracking-[.2em]!
                        ${item.status ? "translate-y-[35px] opacity-100" : "translate-y-[20px] opacity-0"}
                        `
                    }
                >
                    {item.name}
                </span>
            </Link>
        </li>
    )
}

export default LinkMenu;
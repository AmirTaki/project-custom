import { Link } from "react-router-dom";

const LinkMenu = ({item, toggle, index}) => {
    return(
        <Link to = "/">
            <span
                style={{
                    transform : `translate(calc(12px * ${item.x}), calc(12px * ${item.y}))`,
                    transitionDelay : `calc(.1s * ${index})`
                        
                }}
                className={`
                    ${toggle ? "w-[45px] h-[45px]" : "w-[7px] h-[7px]"}
                    absolute  flex items-center justify-centerbg-white rounded-[50%] 
                    transition-all duration-500!
                    `}
            >
                <i className={item.icon}></i>
            </span>
        </Link>
    )
}

export default LinkMenu;
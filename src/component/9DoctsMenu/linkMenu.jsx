import { Link } from "react-router-dom";

const LinkMenu = ({item, toggle, index}) => {
    return(
        <Link to = "/">
            <span
                style={{
                    transform : `translate(clac(12px * ${item.x}), clac(12px * ${item.y}))`,
                    transitionDelay : `calc(.1 * ${index})`
                        
                }}
                className={`
                    absolute w-[7px] h-[7px] flex items-center justify-centerbg-white rounded-[50%] 
                    
                    `}
            >
                <i className={item.icon}></i>
            </span>
        </Link>
    )
}

export default LinkMenu;
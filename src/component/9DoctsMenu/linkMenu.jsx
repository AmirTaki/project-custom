import { Link } from "react-router-dom";

const LinkMenu = ({item, toggle, index}) => {
    return(
        <Link to = "/">
            <span
                style={{
                    transform : `${toggle ? `translate(calc(60px * ${item.x}), calc(60px * ${item.y}))` : `translate(calc(12px * ${item.x}), calc(12px * ${item.y}))`}`,
                    transitionDelay : `calc(.1s * ${index})`
                }}
                className={`
                    ${toggle ? "w-[45px] h-[45px] bg-[#333849]" : "w-[7px] h-[7px] bg-white"}
                    flex  justify-center items-center   rounded-[50%] absolute -translate-x-1/2 -translate-y-1/2
                    `}
            >
                <i 
                    className={`
                        ${item.icon} 
                        ${toggle && "hover:text-[#2dfc52]! glow-green duration-300" }
                        ${toggle ? "text-[1.35em] text-white" : "text-[0em] duration-500! " } 
                    `}
                ></i>
            </span>
        </Link>
    )
}

export default LinkMenu;
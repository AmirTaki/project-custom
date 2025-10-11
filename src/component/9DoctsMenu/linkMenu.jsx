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
                        flex  justify-center items-center   rounded-[50%] absolute
                    `}
            >
                <i 
                    className={`${item.icon} ${toggle ? "text-[1.35em] text-white" : "text-[0em] duration-500! " } `}
                ></i>
            </span>
        </Link>
    )
}

export default LinkMenu;
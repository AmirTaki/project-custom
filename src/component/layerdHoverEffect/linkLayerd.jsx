import { Link } from "react-router-dom"


const LinkLayerd = ({item}) => {
    return(
        // a => link
        <Link className="mx-[25px] my-[0] decoration-0 text-white block relative  group">
            <div className="w-[55px] h-[55px] transition-transform duration-300
                hover:transform hover:rotate-[-35deg] hover:skew-x-[20deg]
            
            ">
                {/* span  text-[#] border-[#]*/}
                <span className="custom-span-layerd group-hover:opacity-[.2]  "></span>
                
                <span className="custom-span-layerd group-hover:opacity-[.4] group-hover:translate-x-[5px] group-hover:translate-y-[-5px] "></span>
                
                <span 
                    style={{color : `${item.color}`, borderColor : `${item.color}`}}
                    className="custom-span-layerd group-hover:opacity-[.6] group-hover:translate-x-[10px] group-hover:translate-y-[-10px]"
                    >
                </span>
                
                <span 
                    style={{color : `${item.color}`, borderColor : `${item.color}`}}
                    className={`custom-span-layerd group-hover:opacity-[.8] group-hover:translate-x-[15px] group-hover:translate-y-[-15px] `}
                    >
                </span>
                
                {/* span icon */}
                <span 
                    style={{color : `${item.color}`, borderColor : `${item.color}`}}
                    className={`${item.icon}
                    custom-span-layerd text-[30px] text-center leading-[55px]!
                    group-hover:opacity-[1] group-hover:translate-x-[20px] group-hover:translate-y-[-20px]
                `}></span>
            </div>
            {/* text */}
            <div className="
                absolute bottom-[-5%] left-[50%] translate-x-[-50%] 
                transition-[bottom_0.3s_ease,opacity_0.3s_ease] opacity-0 
                group-hover:opacity-100! group-hover:bottom-[-60%]!
            ">{item.name}</div>
        </Link>
    )
}

export default LinkLayerd
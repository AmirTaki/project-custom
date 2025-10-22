import { useState } from "react";

const DropDrownMenu = () => {
    const [active, setActive] = useState(false)
    return(
        // navigation
        <div
            className={` ${active ? "w-[300px] h-[400px]" : "w-[120px] h-[60px]"}
                bg-white shadow-[10px_25px_35px_rgba(0,0,0,.1)] flex justify-between 
                transition-[width .5s_height .5s]   
            `}
            >


        </div>
    )
}

export default DropDrownMenu;
import { BrowserRouter } from "react-router-dom";
import { iconsList } from "./iconList";
import LinkMenu from "./linkMenu";

const DoctsMenu = () => {

    return(
        // navigation
        <div className="
            relative w-[70px] h-[70px] bg-[#212532] rounded-[10px] cursor-pointer
            flex items-center justify-center duration-[500ms] delay-[800ms]
        ">

            <BrowserRouter>
                {iconsList.map((item, index) => {
                    return(
                        <LinkMenu key = {index} item = {item} />
                    )
                })}
            </BrowserRouter>

        </div>
    )
}

export default DoctsMenu;
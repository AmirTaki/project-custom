import { BrowserRouter } from "react-router-dom";
import { iconsList } from "./iconList";
import LinkMenu from "./linkMenu";

const DoctsMenu = () => {

    return(
        // navigation
        <div className="">

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
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
                        <div className=""></div>
                    )
                })}
            </BrowserRouter>

        </div>
    )
}

export default DoctsMenu;
import { BrowserRouter } from "react-router-dom";
import LinkLayerd from "./linkLayerd";
import { iconList } from "./iconList";


const LayerdHoverEffect = () => {
    return(
        <div className="flex flex-row gap-12 flex-wrap">
            <BrowserRouter>
                {iconList.map((item) => {
                    return(
                        <LinkLayerd key = {item.id}  item = {item} />
                    )
                })}
              
            </BrowserRouter>
        </div>
    )
}
export default LayerdHoverEffect;
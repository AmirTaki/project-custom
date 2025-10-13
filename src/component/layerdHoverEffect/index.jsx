import { BrowserRouter, Link } from "react-router-dom";
import LinkLayerd from "./linkLayerd";


const LayerdHoverEffect = () => {
    return(
        <div className="inline-flex">
            <BrowserRouter>
                <LinkLayerd />
                {/* a => link */}
              
            </BrowserRouter>
        </div>
    )
}
export default LayerdHoverEffect;
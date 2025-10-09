import { BrowserRouter, Link } from "react-router-dom"


const Navigation = () => {
    return (
        <div
            className="absolute left-[50%] top-[50%]"
            >
            <div 
                className="[transform-origin:100px] transform transition-[.5s] "
            >
                <i className="bi bi-plus-lg"></i>
            </div>
            <BrowserRouter >
            
                <li>
                    <Link to = "/">
                        <i className="bi bi-house-door"></i>
                    </Link>
                </li>
          
            </BrowserRouter>
        </div>
    )
}

export default Navigation
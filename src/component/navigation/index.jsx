import { BrowserRouter, Link } from "react-router-dom"


const Navigation = () => {
    return (
        <div
            className="absolute left-[50%] top-[50%] list-none"
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
            
                <li>
                    <Link to = "/">
                        <i className="bi bi-person"></i>
                    </Link>
                </li>

                <li>
                    <Link to = "/">
                        <i className="bi bi-gear"></i>
                    </Link>
                </li>
                <li>
                    <Link to = "/">
                        <i className="bi bi-envelope"></i>
                    </Link>
                </li>
          
            </BrowserRouter>
        </div>
    )
}

export default Navigation
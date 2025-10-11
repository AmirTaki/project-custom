import { BrowserRouter, Link } from "react-router-dom"


const Navbar = () => {
    return(
        <div className="flex justify-between items-center bg-blue-500">
            <BrowserRouter >
                <div className="  h-20 bg-red-500 flex items-center justify-center">
                    {/* logo */}
                    <div className="">
                        <a href="">Web developer programming</a>
                    </div>
                </div>
                <div className="  h-20 bg-green-500 
                  justify-between items-center flex gap-10
                ">
                    <ul className="  flex justify-center items-center gap-5">
                        <li><Link to = '/'>Home</Link></li>
                        <li><Link to = '/'>About</Link></li>
                        <li><Link to = '/'>Services</Link></li>
                        <li><Link to = '/'>Contact</Link></li>
                    </ul>
                </div>
                <div className=""></div>
                
            </BrowserRouter>
        </div>
    )
}

export default Navbar
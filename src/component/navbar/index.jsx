import { BrowserRouter, Link } from "react-router-dom"


const Navbar = () => {
    return(
        <div className="flex justify-between items-center bg-transparent px-30 text-white">
            <BrowserRouter >
                <div className="  h-20 flex items-center justify-center ">
                    {/* logo */}
                    <div className="">
                        <a href="">Web developer </a>
                    </div>
                </div>
                <div className="  h-20 
                  justify-between items-center flex gap-10
                ">
                    <ul className="  flex justify-center items-center gap-10">
                        <li><Link to = '/'>Home</Link></li>
                        <li><Link to = '/'>About</Link></li>
                        <li><Link to = '/'>Services</Link></li>
                        <li><Link to = '/'>Contact</Link></li>
                    </ul>
                </div>
                <div className="flex items-center justify-center  h-20">
                    <div className="border-0 outline-0 px-[.5rem] py-[1rem]
                        rounded-[20px] cursor-pointer text-[.8rem] font-bold bg-orange-400
                    ">
                        Get Start
                    </div>
                </div>
                
            </BrowserRouter>
        </div>
    )
}

export default Navbar
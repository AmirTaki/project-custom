import { Link, Routes } from "react-router-dom";


const ItemsIcon = () => {
    return(
            <li>
                <Link to = "/" className="flex items-center my-[20px] mx-0 text-[1em] gap-[10px] decoration-0 text-[#555] hover:text-[#4e65ff]">
                    <i className="bi bi-person text-[1.5em] "></i>
                    My Profile
                </Link>
            </li>
    )
}
export default ItemsIcon;
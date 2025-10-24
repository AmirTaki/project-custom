import { Link } from "react-router-dom";


const ListColumn = ({link}) => {
    return (
        <li className="list-none mb-[12px]">
            <Link to = '/' className="decoration-0 cursor-pointer text-whtie">{link}</Link>
        </li> 
    )
}

export default ListColumn;
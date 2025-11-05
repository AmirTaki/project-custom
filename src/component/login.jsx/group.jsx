import { Link } from "react-router-dom"

const GroupForm = () => {
    return(
        <div className="relative w-full mt-[50px] flex justify-between">
            <Link to = "/" className = "text-[#222] bg-white py-2 px-5 decoration-0 leading-[.5em] rounded-[4px] pointer-events-auto">
                Forget Password
            </Link>
        </div>
    )
}
export default GroupForm
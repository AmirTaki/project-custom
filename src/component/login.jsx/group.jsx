import { Link } from "react-router-dom"

const GroupForm = () => {
    return(
        <div className="relative w-full mt-[50px] flex justify-between">
            <Link to = "/" className = "text-[#222] bg-white py-[2px] px-[5px] decoration-0 tracking-[.05em] rounded-[4px] pointer-events-auto">
                Forget Password
            </Link>
            <Link to = "/" className = "text-white bg-[#f0f] font-[500] py-[2px] px-[5px] decoration-0 tracking-[.05em] rounded-[4px] pointer-events-auto">
                Sign up
            </Link>
        </div>
    )
}
export default GroupForm
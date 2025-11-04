import { BoxItem } from "./boxItem"
import "./styles.css"

const LoginForm = () => {
    return(
        // container
        <div className="grid grid-cols-[repeat(3,150px)] gap-[4px]">
            {/* box */}
            {BoxItem.box.map((box) => {
                return(
                    <div className="boxContainer"></div>
                )
            })}
        </div>
    )
}

export default LoginForm
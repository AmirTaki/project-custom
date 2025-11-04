import { BoxItem } from "./boxItem"
import "./styles.css"

const LoginForm = () => {
    return(
        // container
        <div className="grid grid-cols-[repeat(3,150px)] gap-[4px] mt-5">
            {/* box */}
            {BoxItem.box.map((box) => {
                return(
                    <div 
                        style = {{"--clr" : box.color}}
                        key = {box.id} 
                        className="boxContainer"
                    ></div>
                )
            })}
        </div>
    )
}

export default LoginForm
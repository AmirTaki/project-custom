import { useCallback, useRef } from "react"
import { BoxItem } from "./boxItem"
import "./styles.css"
import Box from "./box"


const LoginForm = () => {
  
    return(
        // container
        <div className="grid grid-cols-[repeat(3,150px)] gap-[4px] mt-5">
            {/* box */}
            {BoxItem.box.map((box) => {
                return(
                    <Box />
                )
            })}
        </div>
    )
}

export default LoginForm
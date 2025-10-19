import { useState } from 'react';
import './style.css'
import Box from './box';

const AnimateEffect = () => {
    const [boxes, setBox] = useState([1, 2, 3, 4])
    return(
        // container
        <div
            style = {{WebkitBoxReflect : 'below 2px linear-gradient(transparent, #10131c)' }}
            className="relative flex justify-center items-center w-[100%] gap-[40px] "
        >
            {/* box  */}
            {boxes.map((box) => {
                return(
                    <Box  key = {box} index = {box} />
                )
            })}    
        </div>
    )
}

export default AnimateEffect;
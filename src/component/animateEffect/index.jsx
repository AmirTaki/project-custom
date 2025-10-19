import { useState } from 'react';
import './style.css'
import Box from './box';

const AnimateEffect = () => {
    const [box, setBox] = useState([1, 2, 3, 4])
    return(
        // container
        <div
            style = {{WebkitBoxReflect : 'below 2px linear-gradient(transparent, #0004)' }}
            className="relative flex justify-center items-center w-[100%] gap-[40px] "
        >
            {/* box  */}
            {}
            <Box index = {1}/>
            <Box index = {2}/>

    
        </div>
    )
}

export default AnimateEffect;
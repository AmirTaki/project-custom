import { useState } from 'react';
import './style.css'
const AnimateEffect = () => {
    const [i , setI] =  useState(2)
    return(
        // container
        <div
            style = {{WebkitBoxReflect : 'below 2px linear-gradient(transparent, #0004)' }}
            className="relative flex justify-center items-center w-[100%] gap-[40px] "
        >
            {/* box  */}
            <div 
            style={{
            }}
            className={`
             
                hue-rotate-${i*90}
                effectAnimationHover
                rotate-${i*90}
            `}>

            </div>

        </div>
    )
}

export default AnimateEffect;
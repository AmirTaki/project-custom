import { useEffect, useRef } from "react";

const FlashLight = () => {
    const flashRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const flash = flashRef.current
        if(!false) return;
        

        const onMove = (e) => {

        }

        const supportsPointer =  typeof window !== "undefined" && "onpointermove" in window;
        if (supportsPointer){
            window.addEventListener("pointermove", onMove, {passive : true})
        }
        else {
            window.addEventListener("mousemove", onMove, {passive : true})
            window.addEventListener("touchmove", onMove, {passive : true})
        }
        return () => {
            if(supportsPointer){
                window.removeEventListener ('pointermove', onMove)
            }
            else {
                window.removeEventListener('mousemove', onMove)
                window.removeEventListener('touchmove', onMove)
            }
        }
    },[])

    return(
        <>
            {/* flash light */}
            <div  
                className={` before:content-[''] before:block before:w-[100%] before:h-[100%] before:top-0 before:absolute before:pointer-events-none 
                    before:bg-[radial-gradient(circle_9em_at_var(--Xpos)_var(--Ypos),rgba(0,0,0,.1),rgba(0,0,0,1))]`
                }
                ref = {flashRef}
            ></div>

            <div className="">
                <p
                    className="text-[1em] text-justify leading-[1.8em] p-[.2em] text-gray-100"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam est sequi quo voluptates molestiae? Blanditiis recusandae voluptatem nam officiis optio sint distinctio cupiditate dolorem, officia fuga rerum doloremque iure quaerat voluptate quas consequatur porro. Et quaerat tempore dicta deleniti perferendis distinctio dolore alias non dolor necessitatibus. Dolores eum at sit eos quasi numquam, odio, delectus voluptatum, quibusdam non nesciunt itaque! Quam ratione aliquid dolores! Aspernatur impedit dolorum tempore possimus odit eos, nemo nesciunt ipsum blanditiis excepturi soluta veritatis eveniet quisquam ad est dicta accusantium unde tempora commodi ea rem expedita omnis. Ex sed sunt nihil at, dolorum in quam numquam.</p>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam est sequi quo voluptates molestiae? Blanditiis recusandae voluptatem nam officiis optio sint distinctio cupiditate dolorem, officia fuga rerum doloremque iure quaerat voluptate quas consequatur porro. Et quaerat tempore dicta deleniti perferendis distinctio dolore alias non dolor necessitatibus. Dolores eum at sit eos quasi numquam, odio, delectus voluptatum, quibusdam non nesciunt itaque! Quam ratione aliquid dolores! Aspernatur impedit dolorum tempore possimus odit eos, nemo nesciunt ipsum blanditiis excepturi soluta veritatis eveniet quisquam ad est dicta accusantium unde tempora commodi ea rem expedita omnis. Ex sed sunt nihil at, dolorum in quam numquam.</p> */}
            </div>
        </>
    )
}
export default FlashLight;
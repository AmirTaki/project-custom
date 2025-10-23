import { useRef } from "react";

const FlashLight = () => {
    const mouseRef = useRef({x : 0, y : 0})
    return(
        <>
            {/* flash light */}
            <div  
                ref = {mouseRef}
                className="before:content-[''] before:block before:w-[100%] before:h-[100%] before:absolute before:pointer-events-none before:bg-[]"
            ></div>

            <div className="bg-amber-200">
                <p
                    className="text-[1em] text-justify leading-[1.8em] p-[.2em]"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam est sequi quo voluptates molestiae? Blanditiis recusandae voluptatem nam officiis optio sint distinctio cupiditate dolorem, officia fuga rerum doloremque iure quaerat voluptate quas consequatur porro. Et quaerat tempore dicta deleniti perferendis distinctio dolore alias non dolor necessitatibus. Dolores eum at sit eos quasi numquam, odio, delectus voluptatum, quibusdam non nesciunt itaque! Quam ratione aliquid dolores! Aspernatur impedit dolorum tempore possimus odit eos, nemo nesciunt ipsum blanditiis excepturi soluta veritatis eveniet quisquam ad est dicta accusantium unde tempora commodi ea rem expedita omnis. Ex sed sunt nihil at, dolorum in quam numquam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam est sequi quo voluptates molestiae? Blanditiis recusandae voluptatem nam officiis optio sint distinctio cupiditate dolorem, officia fuga rerum doloremque iure quaerat voluptate quas consequatur porro. Et quaerat tempore dicta deleniti perferendis distinctio dolore alias non dolor necessitatibus. Dolores eum at sit eos quasi numquam, odio, delectus voluptatum, quibusdam non nesciunt itaque! Quam ratione aliquid dolores! Aspernatur impedit dolorum tempore possimus odit eos, nemo nesciunt ipsum blanditiis excepturi soluta veritatis eveniet quisquam ad est dicta accusantium unde tempora commodi ea rem expedita omnis. Ex sed sunt nihil at, dolorum in quam numquam.</p>
            </div>
        </>
    )
}
export default FlashLight;
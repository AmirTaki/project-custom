const AnimationEffect = () => {
    return(
        // container
        <div className="relative w-[100%] flex justify-center items-center">
            {/* ring */}
          <div className="
            relative w-[150px] h-[150px] border-4 border-transparent border-t-4 border-t-[#24ecff] rounded-[50%] m-[-30px]
            glowSkyEffect 

            before:content-['\f135'] before:absolute before:font-[fontAwesome] before:text-[#24ecff] 
            before:top-[10px] before:-right-3 before:rotate-90 before:text-[2em]
          "></div>
        </div>
    )
}

export default AnimationEffect;
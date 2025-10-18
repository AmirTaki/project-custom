import Ring from "./ring";

const AnimationEffect = () => {
    return(
        // container
        <div className="relative w-[100%] flex justify-center items-center">
          {/* ring */}
          <Ring color = {"#24ecff"} icon = {`\f135`} animation = {'glowSkyBlueEffect'}/>
        </div>
    )
}

export default AnimationEffect;
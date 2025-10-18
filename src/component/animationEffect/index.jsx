import Ring from "./ring";

const AnimationEffect = () => {
    return(
        // container
        <div className="relative w-[100%] flex justify-center items-center">
          {/* ring */}
          <Ring color = {"24ecff"} icon = {"f135"} animation = {'glowSkyBlueEffect'} />
          <Ring color = {"93ff2d"} icon = {"f072"} animation = {'glowSkyGreenEffect'} />
        </div>
    )
}

export default AnimationEffect;
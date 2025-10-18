import Ring from "./ring";

const AnimationEffect = () => {
    return(
        // container
        <div className="relative w-[100%] flex justify-center items-center">
          {/* ring */}
          <Ring color = {"#24ecff"}  />
        </div>
    )
}

export default AnimationEffect;
import { Data } from "./data";
import Ring from "./ring";


const AnimationEffect = () => {
    return(
        // container
        <div className="relative w-[100%] flex justify-center items-center">
          {/* ring */}
          {Data.map((ring) => {
            return(
              <Ring key = {ring.id} />
            )
          } )}
        </div>
    )
}

export default AnimationEffect;
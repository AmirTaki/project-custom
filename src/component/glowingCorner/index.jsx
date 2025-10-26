import { DataCard } from "./dataCrard"
import './styles.css'

const GlowingCorner = () => {
 
    return( 
        // container
        <div className="relative flex items-center justify-center min-h-[100vh] gap-[50px] bg-[#222] flex-wrap">
            {/* card */}
            {DataCard.map((card) => {
                return(
                    <div 
                        key = {card.id}
                        ref = {cardRef}
                        onMouseMove={handlerMouseMove}
                        style={{ "--color-bg" : `${card.color}` }}
                        className=" cardGlowingCorner"
                    >
                    </div>
                )
            })}
        </div>
    )
}

export default GlowingCorner;
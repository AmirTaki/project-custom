import CardCorner from "./cardCorner"
import { DataCard } from "./dataCrard"

const GlowingCorner = () => {
 
    return( 
        // container
        <div className="relative flex items-center justify-center min-h-[100vh] gap-[50px] bg-[#222] flex-wrap">
            {/* card */}
            {DataCard.map((card) => {
                return(
                    <CardCorner key = {card.id} card = {card}/>
                 
                )
            })}
        </div>
    )
}

export default GlowingCorner;
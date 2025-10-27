import CardCorner from "./cardCorner"
import { DataCard } from "./dataCrard"

const GlowingCorner = () => {

    return( 
        // container
        <div className="relative flex items-center justify-center  gap-[50px]  flex-wrap">
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
import "./styles.css"
import img1 from "./Img/landscape-1.png"
import img2 from "./Img/landscape-2.png"
import img3 from "./Img/landscape-3.png"
import CardArticle from "./cardArticle"

const CardHoverEffect = () => {
    return(
        // container
        <div className="grid place-items-center mx-[1.5rem] py-[5rem] xl:h-[100vh] lg:h-[100vh] sm:mx-[1rem]">
            {/* card__conatiner */}
            <div className="grid gap-y-[3.5rem] xl:grid-cols-3 md:grid-cols-2 md:gap-x-[1.5rem] ">
                {/* card__article */}
                <CardArticle  img = {img1}/>
            </div>

        </div>
    )
}

export default CardHoverEffect;
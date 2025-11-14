import { createContext, useCallback, useEffect, useRef, useState} from "react"
import { handlerMouseLeave, handlerMouseMove, handlerMouseUp } from "./navigationFunctional.jsx"
import AnimatedOnScroll from "../animatedOnScroll/index.jsx"
import Card from "../card3D/index.jsx"
import ComponentNavigation from "../componentNavigation"
import DigitalClock from "../digitalClock/index.jsx"
import DownloadButton from "../downloadButton/index.jsx"
import LayerdHoverEffect from "../layerdHoverEffect"
import NavbarPaeg from "../navbarPage.jsx"
import AnimationEffect from "../animationEffect/index.jsx"
import AnimateEffect from "../animateEffect/index.jsx"
import CardHoverEffect from "../cardHoverEffect/index.jsx"
import LoadingAnimation from "../loadingAnimation/index.jsx"
import CustomRightClick from "../customRightClick/index.jsx"
import SelectMenu from "../selectMenu/index.jsx"
import DropDrownMenu from "../dropDrownMenu.jsx/index.jsx"
import EnergyButton from "../energyButton/index.jsx"
import EnglishDictionary from "../englishDictionary/index.jsx"
import FlashLight from "../flashLightEffect/index.jsx"
import FooterAnimated from "../footerAnimated/index.jsx"
import GenerateQrCode from "../generateQrCode/index.jsx"
import UserLocation from "../userLocation/index.jsx"
import GoogleLoader from "../googleLoader/index.jsx"
import NumberSpinner from "../numberSpinner/index.jsx"
import GlassMorphism from "../glassMorphismButton/index.jsx"
import GlowingCorner from "../glowingCorner/index.jsx"
import GradientGenerator from "../gradientGenerator/index.jsx"
import HorzinotalScrolling from "../imageHorzintalScrolling/index.jsx"
import ImageEditor from "../imageEditor/index.jsx"
import BackgroundChangeEffect from "../backgroundDrowing/index.jsx"
import ImageHoverOverlayEffects from "../hoverOverlayEffects/index.jsx"
import ImageSlider from "../imageSlider/index.jsx"
import ImageCardHover from "../cardComponent/index.jsx"
import GalleryImage from "../gallery/index.jsx"
import LoginForm from "../login.jsx/index.jsx"
import LoadingBorder from "../loadingBorder/index.jsx"
import PasswordGenerator from "../passwordGenerator/index.jsx"
import TextSpeech from "../speechConverter/index.jsx"
import ShareButton from "../shareButton/index.jsx"
import RotatingCard from "../rotatingCards/index.jsx"
import PureRadio from "../RadioButton/index.jsx"
import SliderClientSwiper from "../sliderClient/index.jsx"
import ImgSliderTime from "../imageSliderTime/index.jsx"
import ChangeSlider from "../changeSlider.jsx/index.jsx"
import PhotoCube from "../photoCube/index.jsx"
import CubeBoxSwiper from "../cubesSwiper.jsx/index.jsx"
import CubeSlider from "../cubeSlider/index.jsx"


// import SwiperTest from "../swiper/index.jsx"

// create context
export const navigationContext = createContext ()

const Home =  ()  => {
    
    // doctMenu
    const DoctsMenuRef = useRef(null)
    const dragLocationRef = useRef({x : 0, y : 0})
    const isDraggingDocts = useRef(false)
    
    // navigation
    const NavigationRef =  useRef(null)
    const dragPostionRef = useRef({x : 120, y : 120})
    const isDraggingNavigation = useRef(false)
    
    // veiw projects 
    const  [view, setView] =   useState(false)   
    return(
        <div 
        className={`bg-[#10131c]   min-h-[100vh] ${view ? "" : "flex! flex-col justify-center! items-center! "}`} 
        >
            <div 
                onMouseUp={() => {handlerMouseUp(isDraggingDocts, isDraggingNavigation)}}
                onMouseLeave={() => {handlerMouseLeave(isDraggingDocts, isDraggingNavigation)}}  
                onMouseMove={(e) => {handlerMouseMove(e, isDraggingDocts, dragLocationRef, DoctsMenuRef, isDraggingNavigation, dragPostionRef, NavigationRef)}} 
                
                className={` ${view ? "flex" : 'hidden'} bg-[#10131c] min-h-[100vh]  flex-col justify-center items-center gap-52 `}
                >        
                <navigationContext.Provider value = {{DoctsMenuRef, dragLocationRef, isDraggingDocts, NavigationRef, dragPostionRef, isDraggingNavigation}}>
                    {/* component navigation */}
                    <ComponentNavigation />
                </navigationContext.Provider>

                {/* Navbar */}
                <NavbarPaeg />

                {/* animation on Scroll */}
                <AnimatedOnScroll />
                
                {/* Digital Clock */}
                <DigitalClock />

                {/* Download Button */}
                <DownloadButton />

                {/* LayerdHoverEffect */}
                <LayerdHoverEffect />

                {/* card 3d */}
                <Card />

                {/* animation effects */}
                <AnimationEffect />

                {/* animate effects */}
                <AnimateEffect />

                {/* card hover effect */}
                <CardHoverEffect />

                {/* loading animation */}
                <LoadingAnimation />

                {/* custom right click */}
                <CustomRightClick />
                
                {/* select menu */}
                <SelectMenu />

                {/* drop drown menu */}
                <DropDrownMenu />
               
                {/* energy button */}
                <EnergyButton />
            
                {/* english dictionary */}
                <EnglishDictionary />
            
                {/* flash light effect */}
                {/* <FlashLight /> */}
            
                {/* Generate Qr Code */}
                <GenerateQrCode />

                {/* user location */}
                <UserLocation />

                {/* google loader */}
                <GoogleLoader />

                {/* number spinner */}
                <NumberSpinner />
               
                {/* glassMorphism Button */}
                <GlassMorphism />

                {/* Glowing Corner */}
                <GlowingCorner />

                {/* Gradient Generator */}
                <GradientGenerator />

                {/* HorzinotalScrolling */}
                <HorzinotalScrolling />
          
                {/* image editor */}
                <ImageEditor />

                {/* background drawing & change effect background */}
                <BackgroundChangeEffect />

                {/* image hover overlay effects */}
                <ImageHoverOverlayEffects />

                {/* image slider */}
                <ImageSlider />
            
                {/* image hover animation card postal */}
                <ImageCardHover/>

                {/* Gallery Image */}
                <GalleryImage />

                {/* modern login form */}
                <LoginForm />

                {/* loding border */}
                <LoadingBorder />
                
                {/* password Generator */}
                <PasswordGenerator />

                {/* text to speech coverter */}
                <TextSpeech />
      
                {/* share button */}
                <ShareButton />
     
                {/* ROTATING CARD */}
                <RotatingCard />
                
                {/* Pure Radio Button */}
                <PureRadio />

                {/* slider client swiper  */}
                <SliderClientSwiper />


                {/* slider image swiper practice source code */}
                <ImgSliderTime />

                {/* change slider swiper */}
                <ChangeSlider />

                {/* phonto cube 3D */}
                <PhotoCube />

                {/* cube box swiper */}
                <CubeBoxSwiper />

                {/* footer animated */}
                <FooterAnimated />

            </div>
      
            {/* cube slider */}
            <CubeSlider />
            <div className="h-100 w-100 text-white"></div>
        </div>   
    )
}

export default Home
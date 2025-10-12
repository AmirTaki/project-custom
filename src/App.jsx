// import background from "../public/background.avif"
import './App.css'
import DoctsMenu from './component/9DoctsMenu'
import MagicNavigationMenu from "./component/magicNavigationMenu"
import Navbar from './component/navbar'
import Navigation from './component/navigation'

function App() {
  
  return (
    <>
    {/*  */}
    <div 
      className={`h-[100vh] bg-[#10131c] flex justify-center items-center   `}
      >

      {/* NAVIGATION & DOCTS MENE 9  =>  bg-linear-[25deg,red_5%,yellow_60%,lime_90%,teal] ,bg-[#10131c]   */}
      {/* <Navigation /> */}
      {/* <DoctsMenu /> */}

      {/* NAVBAR  => bg-no-repeat bg-cover bg-center => style={{backgroundImage : `url(${background})`}} */}
      <Navbar />

      {/* magic navigation menu */}
      <MagicNavigationMenu />
      
  

    </div>
    </>
  )
}

export default App

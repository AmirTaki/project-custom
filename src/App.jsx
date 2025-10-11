import background from "../public/background.avif"
import './App.css'
import DoctsMenu from './component/9DoctsMenu'
import Navbar from './component/navbar'
import Navigation from './component/navigation'

function App() {
  
  return (
    <>
    {/*  */}
    <div 
      className={`h-[100vh] bg-no-repeat bg-cover`}
      style={{backgroundImage : `url(${background})`}}
      >

      {/* NAVIGATION & DOCTS MENE 9  =>  bg-linear-[25deg,red_5%,yellow_60%,lime_90%,teal] ,bg-[#10131c]   */}
      {/* <Navigation /> */}
      {/* <DoctsMenu /> */}

      {/* NAVBAR */}
      <Navbar />
  

    </div>
    </>
  )
}

export default App

import Carousel from "./Carousel";


const InfiniteLoopSlider = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center
      p-4 md:p-8 overflow-hidden"
    >
      <div className="h-100 w-100 text-white">
          <main className="w-full max-w-6xl mx-auto mb-12 relative z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[60%] bg-gradient-to-r from-blue-500/10 via-purple-500/10 
                  to-pink-500/10 blur-3xl rounded-full animate-pulse
              ">

              </div>

              <Carousel items = {} />
          </main>
      </div>
    </div>
  )
}

export default  InfiniteLoopSlider;
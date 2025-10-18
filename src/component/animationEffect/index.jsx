const AnimationEffect = () => {
    return(
        // container
        <div className="relative w-[100%] flex justify-center items-center">
            {/* ring */}
          <div className="
            relative w-[150px] h-[150px] border-4 border-transparent border-t-4 border-t-[#24ecff] rounded-[50%] m-[-30px]
            drop-shadow-[0_0_10px_#24ecff] ,drop-shadow-[0_0_30px_#24ecff] ,drop-shadow-[0_0_50px_#24ecff]

          "></div>
        </div>
    )
}

export default AnimationEffect;
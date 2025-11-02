import { useEffect, useReducer, useRef, useState } from "react";
// import "./styles.css"


const ImageSlider = () => {
    const slider = useRef(null)

    const reducer = (state, action) => {
        switch(action.type){
            case "next" :
                // const slide =  slider.current
                // if(slide){
                //     const slideNext  = slide.querySelectorAll('.item')
                //     slide.appendChild(slideNext[0])
                //     console.log(slideNext[0])
                // }  
                
                state.item.push(state.item.shift())
                // const newItem = state.item.map((item) => {
                //     return {...item}
                // })
                return {...state, move : true, }

            case "moveFalse" :
                return {...state, move : false}
        }
    }
    const [state, dispatch]  = useReducer(reducer, {
        move : false,
        item : [
            {id : 0, scale : false},
            {id : 1, scale : false},
            {id : 2, scale : false},
            {id : 3, scale : false},
        ]
    })  
  
    useEffect(() => {
       const time = setInterval(() => {
            dispatch({type : 'moveFalse'})
        
        }, 500);
        return() => [
            clearInterval(time)
        ]
    }, [state.item])


    return(
        <>
        {/* // slider */}
        <div className={`flex flex-row gap-2 duration-500 ${state.move ? "translate-x-10" : "translate-x-0"}`} ref = {slider}>
            {/* item */}
            {state.item.map((item) => (
                <div key = {item.id} className = {`bg-white w-30 h-30 flex justify-center items-center text-6xl item duration-500 ${item.scale ? "scale-200" : "scale-100"}` }>{item.id}</div>
            ))}
        </div>


        <button onClick = {() => {dispatch ({type : 'next'})}} className="bg-white mt-10 w-10 cursor-pointer">next</button>
        <button></button>
        </>


    )
}

export default ImageSlider;
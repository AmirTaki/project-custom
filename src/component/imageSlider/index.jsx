import { useEffect, useReducer, useRef, useState } from "react";
// import "./styles.css"


const ImageSlider = () => {
    const slider = useRef(null)

    const reducer = (state, action) => {
        switch(action.type){
            case "next" :
                // const shift = state.item.shift()
                state.item.push(state.item.shift())
                return {...state, moveNext : true, }

            case "prev":
                state.item.unshift(state.item.pop())
                return  {...state, movePrev : true}
            case "moveFalse" :
                return {...state, moveNext : false, movePrev:false }
        }
    }
    const [state, dispatch]  = useReducer(reducer, {
        moveNext : false,
        movePrev : false,
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
        <div className={`flex flex-row gap-2 duration-500 ${state.moveNext ? "translate-x-10" : "translate-x-0"} ${state.movePrev ?  '-translate-x-10!': 'translate-x-0' }`} ref = {slider}>
            {/* item */}
            {state.item.map((item) => (
                <div key = {item.id} className = {`bg-white w-30 h-30 flex justify-center items-center text-6xl item duration-500 ${item.scale ? "scale-200" : "scale-100"}` }>{item.id}</div>
            ))}
        </div>


        <button onClick = {() => {dispatch ({type : 'next'})}} className="bg-white mt-10 w-10 cursor-pointer">next</button>
        <button onClick = {() => {dispatch ({type : 'prev'})}} className="bg-white mt-10 w-10 cursor-pointer">prev</button>
        
        </>


    )
}

export default ImageSlider;
import { useEffect, useReducer, useRef, useState } from "react";
// import "./styles.css"


const ImageSlider = () => {
    const slider = useRef(null)

    const reducer = (state, action) => {
        switch(action.type){
            case "next" :
                
                const shift = state.item.shift()
                state.item.push(shift)

                const newItem = state.item.map((item) => {({...item, scale : item.id == shift.id ? true : false})})
                return {...state, move : true, item : newItem}

            case "moveFalse" :
                const newState =  state.item.map((item) => {({...item, scale : false})}) 
                return {...state, move : false, item : newState}
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
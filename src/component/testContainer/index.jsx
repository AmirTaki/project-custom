import { useState } from "react"

const TestContainer = () => {
    const [drag, setDrag] =   useState(false)
    const handlerMouseDown = (e) => {
        console.log(e.clientX)
        setDrag(true)
    }
    const handlerDrag = (e) => {
    }
    
    return(
        <div 
            onMouseDown={(e) => {handlerMouseDown(e)}}
            onDragStart={(e) => {handlerDrag(e)}}
        className="w-[600px] h-[400px] bg-red-700"></div>
    )
}

export default TestContainer;
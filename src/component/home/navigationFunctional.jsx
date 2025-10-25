import { useCallback } from "react"


export const handlerMouseUp = (isDraggingDocts, isDraggingNavigation) => {
    if(isDraggingDocts.current){
        isDraggingDocts.current = false
    }
    else if(isDraggingNavigation.current){
        isDraggingNavigation.current = false
    }
}

export const handlerMouseLeave = (isDraggingDocts, isDraggingNavigation) => {
    if(isDraggingDocts.current){
        isDraggingDocts.current = false
    }
    else if(isDraggingNavigation.current){
        isDraggingNavigation.current = false
    }
}

export const handlerMouseMove = (e, isDraggingDocts, dragLocationRef, DoctsMenuRef, isDraggingNavigation, dragPostionRef, NavigationRef) => {
    if(isDraggingDocts.current){
        const x =  e.clientX - dragLocationRef.current.x;
        const y =  e.clientY - dragLocationRef.current.y;
        DoctsMenuRef.current.style.left = `${x}px`;
        DoctsMenuRef.current.style.top = `${y}px`
    }
    if(isDraggingNavigation.current){
        const x = e.clientX - dragPostionRef.current.x;
        const y = e.clientY - dragPostionRef.current.y;
        NavigationRef.current.style.left = `${x}px`
        NavigationRef.current.style.top = `${y}px`
    }
    else {
        return
    }
}
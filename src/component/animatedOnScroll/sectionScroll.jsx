import { useCallback, useEffect,  useRef} from "react";
const SectionScroll = ( { dispatch, children, index}) => {
   
    const sectionRef = useRef() 
   
    const animatedScroll = useCallback (() => {
        const top = window.scrollY 
        const offset = sectionRef.current.scrollTop - 150
        const height = sectionRef.current.offsetHeight ;
        console.log('scroll', top)
        console.log('offset',offset)
        console.log('height',offset)
        dispatch({type : 'scroll', payload : { bool : (top >= offset && top < offset + height ? true : false) ,  index : index  }})
    })

    useEffect(() => {
        window.addEventListener('scroll', animatedScroll )
        return() => {
            window.removeEventListener('scroll', animatedScroll )
        }
    }, [animatedScroll])

    return(
        <div ref = {sectionRef} >
            {children}
        </div>
    )
}

export default SectionScroll;
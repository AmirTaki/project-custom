import { useEffect,  useRef} from "react";
const SectionScroll = ( { dispatch, children, key}) => {
    const sectionRef = useRef() 
    const animatedScroll = () => {
        const top = window.scrollY
        const offset = sectionRef.current.scrollTop - 150
        const height = sectionRef.current.offsetHeight;

        dispatch({type : 'scroll', payload : { bool : top >= offset && top < offset + height ? true : false,   index : key  }})
    }

    useEffect(() => {
        window.addEventListener('scroll', animatedScroll )
        return() => {
            window.removeEventListener('scroll', animatedScroll )
        }
    }, [])

    return(
        <div ref = {sectionRef} >
            {children}
        </div>
    )
}

export default SectionScroll;
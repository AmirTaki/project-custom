import { useEffect,  } from "react";
const SectionScroll = ( {sectionRef, dispatch, children, index}) => {
    
    const animatedScroll = () => {
        const top = window.scrollY
        const offset = sectionRef.current.scrollTop - 150
        const height = sectionRef.current.offsetHeight;

        dispatch({type : 'scroll', payload : { bool : top >= offset && top < offset + height ? true : false,   index : index  }})
    }

    useEffect(() => {
        window.addEventListener('scroll', animatedScroll )
        return() => {
            window.removeEventListener('scroll', animatedScroll )
        }
    }, [])

    return(
        <div className="">{children}</div>
    )
}

export default SectionScroll;
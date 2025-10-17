import { useCallback, useEffect,  useRef} from "react";
const SectionScroll = ( { dispatch, children, index}) => {
   
    const sectionRef = useRef() 
   
    const animatedScroll = useCallback (() => {
        if (!sectionRef.current) return ;

        const top = window.scrollY 
        const offset = sectionRef.current.offsetTop - 150
        const height = sectionRef.current.offsetHeight


        dispatch({type : 'scroll', payload : { bool : (top >= offset && top < offset + height ? true : false) ,  index : index  }})
    })

    useEffect(() => {
       
        let flag = false
        const handleScroll = () => {
            if(!flag){
                requestAnimationFrame(() => {
                    animatedScroll()
                    flag = false
                })
                flag = true
            }
        }
        window.addEventListener("scroll", handleScroll)
        animatedScroll()
        return()=> {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [animatedScroll])

    return(
        <div ref = {sectionRef} >
            {children}
        </div>
    )
}

export default SectionScroll;
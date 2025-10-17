import { useEffect, useRef, useState } from "react";
const SectionScroll = () => {

    const [showAnimate, setShowAnimate] = useState(false)
    const sectionRef = useRef()
    const animatedScroll = () => {

        const top = window.scrollY
        const offset = sectionRef.current.scrollTop - 150
        const height = sectionRef.current.offsetHeight;

        setShowAnimate(top >= offset && top < offset + height ? true : false)

    }

    useEffect(() => {
        window.addEventListener('scroll', animatedScroll )
        return() => {
            window.removeEventListener('scroll', animatedScroll )
        }
    }, [])


    return(
        <div className=""></div>
    )
}

export default SectionScroll;
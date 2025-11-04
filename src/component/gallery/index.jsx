import {useReducer, useRef } from 'react';
import { DataGallery, reducerGallery } from './dataImg';
import ImageWrapper from './imageWrapper';
import ImageGallery from './imageGallery';
import './styles.css'

const GalleryImage = () => {
    const wrapperImage =  useRef(null)
    const [state, disptach] = useReducer(reducerGallery, DataGallery)
    return(
        <>
            {/* imageWrpper */}
            <ImageWrapper state = {state} wrapperImage={wrapperImage} disptach={disptach} />
            {/* img-gallery */}
            <ImageGallery state = {state} wrapperImage={wrapperImage} disptach={disptach} />
        </>
        

    )
}

export default GalleryImage;
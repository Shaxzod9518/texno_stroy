import { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import * as Styled from './styled-components'

const Lightbox = ({ images }, ref) => {
    const imagesList = useRef()

    const [lightboxDisplay, setLightboxDisplay] = useState(false)
    const [imageToShow, setImageToShow] = useState('')
    const [startCordinateX, setStartCordinateX] = useState(0)

    useImperativeHandle(ref, () => ({
        showLightbox(image) {
            showImage(image)
        },
    }))

    const showImage = (image) => {
        setImageToShow(image)
        setLightboxDisplay(true)
    }

    const hideLightbox = () => {
        setLightboxDisplay(false)
    }

    const findIndex = () => {
        let i = 0,
            len = images.length
        for (i; i < len; i++) {
            if (images[i].image == imageToShow) return i
        }
    }

    const showNext = (e) => {
        e.stopPropagation()
        let currentIndex = findIndex()
        if (currentIndex >= images.length - 1) setLightboxDisplay(false)
        else {
            let nextImage = images[currentIndex + 1]
            setImageToShow(nextImage.image)
        }
    }

    const showPrev = (e) => {
        e.stopPropagation()
        let currentIndex = findIndex()
        if (currentIndex <= 0) setLightboxDisplay(false)
        else {
            let nextImage = images[currentIndex - 1]
            setImageToShow(nextImage.image)
        }
    }

    const handleChangeSlide = (image, e) => {
        e.stopPropagation()
        showImage(image)
    }

    const handleDefineCordinates = (e) => {
        setStartCordinateX(e.clientX)
    }

    const handleSlide = (e) => {
        let left = Number(getComputedStyle(imagesList.current).left)
        let change = e.clientX - startCordinateX
        console.log(left, change)
        imagesList.current.style.left = left + change + 'px'
    }

    return (
        <>
            {lightboxDisplay && (
                <Styled.Container onClick={hideLightbox}>
                    <Styled.Slider>
                        <Styled.CloseButton onClick={hideLightbox}>
                            <img src="/images/close.svg" alt="" />
                        </Styled.CloseButton>
                        <Styled.CopyButton>
                            <img src="/images/copy.svg" alt="" />
                        </Styled.CopyButton>
                        <Styled.DownloadButton
                            to={imageToShow}
                            target="_blank"
                            download
                        >
                            <img src="/images/download.svg" alt="" />
                        </Styled.DownloadButton>
                        <Styled.Header>
                            <Styled.Meta>
                                {`Images ${findIndex() + 1}/${images.length}`}
                            </Styled.Meta>
                            <Styled.Button onClick={showPrev}>
                                <img
                                    src="/images/caret-left.svg"
                                    alt="Show previous slide"
                                />
                            </Styled.Button>
                            <Styled.Image src={imageToShow} alt="" />
                            <Styled.Button onClick={showNext}>
                                <img
                                    src="/images/caret-right.svg"
                                    alt="Show next slide"
                                />
                            </Styled.Button>
                            <Styled.Caption>
                                Informational loading column, horizon -510 m.,
                                Geroyev Kosmosa mine, DTEK
                            </Styled.Caption>
                        </Styled.Header>
                        {images && (
                            <Styled.Footer>
                                <Styled.List
                                    ref={imagesList}
                                    onDragStart={handleDefineCordinates}
                                    onDrag={handleSlide}
                                >
                                    {images.map((item, index) => (
                                        <Styled.ListItem key={index.toString()}>
                                            <Styled.SlideImage
                                                onClick={(e) =>
                                                    handleChangeSlide(
                                                        item.image,
                                                        e
                                                    )
                                                }
                                                active={
                                                    item.image === imageToShow
                                                }
                                                src={item.image}
                                                alt=""
                                            />
                                        </Styled.ListItem>
                                    ))}
                                </Styled.List>
                            </Styled.Footer>
                        )}
                    </Styled.Slider>
                </Styled.Container>
            )}
        </>
    )
}

export default forwardRef(Lightbox)

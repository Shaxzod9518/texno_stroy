import { useEffect, useState, useRef } from 'react'
import ImageCard from '../../components/ImageCard'
import Container from '../../components/Container'
import Lightbox from '../../components/Lightbox'
import api from '../../configs/api'
import * as Styled from './styled-components'

const Copyright = () => {
    const lightbox = useRef()

    const [sertificates, setSertificates] = useState([])

    const handleLightboxToggle = (image) => lightbox.current.showLightbox(image)

    useEffect(() => {
        fetch(`${api.host}/sertificates`)
            .then((res) => res.json())
            .then((data) => setSertificates(data))
    }, [])

    return (
        <>
            <Lightbox ref={lightbox} images={sertificates}></Lightbox>
            <Styled.Container>
                <Container>
                    <Styled.List>
                        {sertificates &&
                            sertificates.map((item, index) => (
                                <Styled.ListItem
                                    key={index.toString()}
                                    onClick={() =>
                                        handleLightboxToggle(item.image)
                                    }
                                >
                                    <ImageCard image={item.image} padding />
                                </Styled.ListItem>
                            ))}
                    </Styled.List>
                </Container>
                <Styled.Shadow />
            </Styled.Container>
        </>
    )
}

export default Copyright

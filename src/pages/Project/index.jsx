import { useState, useEffect } from 'react'
import api from '../../configs/api'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LinkCard from '../../components/LinkCard'
import StageCard from '../../components/StageCard'
import ImageCard from '../../components/ImageCard'
import { Breadcrumb, BreadcrumbItem } from '../../components/Breadcrumb'
import * as Styled from './styled-components'

const Project = () => {
    const { slug } = useParams()
    const { t, i18n } = useTranslation();

    const [projects, setProjects] = useState([])
    const [currentProject, setCurrentProject] = useState([])
    const [firstProject, setFirstProject] = useState([])

    useEffect(() => {
        fetch(`${api.host}/projects`)
            .then((response) => response.json())
            .then((data) => setProjects(data))
    }, [])

    useEffect(() => {
        fetch(`${api.host}/projects/${slug}`)
            .then((response) => response.json())
            .then((data) => setCurrentProject(data))
    }, [slug])

    useEffect(() => {
        fetch(`${api.host}/get-first-project`)
            .then((res) => res.json())
            .then((data) => setFirstProject(data))
    }, [])

    const handleDateFormat = (date) => {
        const formattedDate = new Date(date)
        return `${formattedDate.getDate()}.${formattedDate.getMonth()}.${formattedDate.getFullYear()}`
    }

    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem path="/" icon>
                    { t('Home') }
                </BreadcrumbItem>
                <BreadcrumbItem path={`/projects/${firstProject.slug}`} icon>
                    { t('Projects') }
                </BreadcrumbItem>
                <BreadcrumbItem path={`/projects/${firstProject.slug}`} icon>
                    {firstProject[`title_${i18n.language}`]}
                </BreadcrumbItem>
                <BreadcrumbItem>{currentProject[`title_${i18n.language}`]}</BreadcrumbItem>
            </Breadcrumb>
            <Styled.Wrapper>
                <Styled.Navbar>
                    <Styled.List>
                        {projects &&
                            projects.map((project, index) => (
                                <Styled.ListItem>
                                    <LinkCard
                                        to={`/projects/${project.slug}`}
                                        key={index.toString()}
                                    >
                                        {project[`title_${i18n.language}`]}
                                    </LinkCard>
                                </Styled.ListItem>
                            ))}
                    </Styled.List>
                </Styled.Navbar>
                <Styled.Main>
                    <Styled.HeadingOne>
                        {currentProject[`title_${i18n.language}`]}
                    </Styled.HeadingOne>
                    {currentProject.items && (
                        <Styled.List>
                            {currentProject.items.map((item, index) => (
                                <Styled.ListItem key={index.toString()}>
                                    <StageCard
                                        date={`${handleDateFormat(
                                            item.started_at
                                        )} - ${handleDateFormat(
                                            item.ended_at
                                        )}`}
                                        text={item[`desc_${i18n.language}`]}
                                    />
                                </Styled.ListItem>
                            ))}
                        </Styled.List>
                    )}
                    {currentProject.images && (
                        <>
                            <Styled.HeadingTwo>Review</Styled.HeadingTwo>
                            <Styled.Gallery>
                                {currentProject.images.map((image, index) => (
                                    <Styled.GalleryItem key={index.toString()}>
                                        <ImageCard image={image.image} />
                                    </Styled.GalleryItem>
                                ))}
                            </Styled.Gallery>
                        </>
                    )}
                </Styled.Main>
            </Styled.Wrapper>
        </>
    )
}

export default Project

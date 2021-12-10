import { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import api from '../../configs/api'
import { Breadcrumb, BreadcrumbItem } from '../../components/Breadcrumb'
import { Dropdown, DropdownItem } from '../../components/Dropdown'
import ProductCardExtended from '../../components/ProductCardExtended'
import Card from '../../components/Card'
import Lightbox from '../../components/Lightbox'
import * as Styled from './styled-components'
import { useTranslation } from 'react-i18next'

const Product = () => {
    const { parentSlug, childSlug } = useParams()
    const slug = childSlug ? childSlug : parentSlug
    const lightbox = useRef()

    const { t, i18n } = useTranslation()

    const [products, setProducts] = useState([])
    const [currentProduct, setCurrentProduct] = useState([])

    const handleLightboxToggle = (image) => lightbox.current.showLightbox(image)

    useEffect(() => {
        fetch(`${api.host}/products/`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }, [])

    useEffect(() => {
        fetch(`${api.host}/products/${slug}`)
            .then((response) => response.json())
            .then((data) => setCurrentProduct(data))
    }, [slug])

    return (
        <>
            <Lightbox ref={lightbox} images={currentProduct.images}></Lightbox>
            <Breadcrumb>
                <BreadcrumbItem path="/" icon>
                    {t('Home')}
                </BreadcrumbItem>
                <BreadcrumbItem path="/products" icon>
                    {t('Products')}
                </BreadcrumbItem>
                <BreadcrumbItem>{currentProduct[`title_${i18n.language}`]}</BreadcrumbItem>
            </Breadcrumb>
            <Styled.Wrapper>
                {/* <Styled.Shadow /> */}
                <Styled.Navbar>
                    <Styled.List>
                        {products &&
                            products.map((product, index) => (
                                <Styled.ListItem
                                    paddingBottom={8}
                                    key={index.toString()}
                                >
                                    {product.children && (
                                        <Dropdown
                                            title={product[`caption_${i18n.language}`]}
                                            desc={product[`title_${i18n.language}`]}
                                            path={`/products/${product.slug}`}
                                        >
                                            {product.children.map(
                                                (child, index) => (
                                                    <DropdownItem
                                                        path={`/products/${product.slug}/${child.slug}`}
                                                        key={index.toString()}
                                                    >
                                                        {child[`title_${i18n.language}`]}
                                                    </DropdownItem>
                                                )
                                            )}
                                        </Dropdown>
                                    )}
                                </Styled.ListItem>
                            ))}
                    </Styled.List>
                </Styled.Navbar>
                <Styled.Main>
                    <Styled.HeadingOne>
                        {currentProduct[`title_${i18n.language}`]}
                    </Styled.HeadingOne>
                    <Styled.Paragraph
                        dangerouslySetInnerHTML={{
                            __html: currentProduct[`desc_${i18n.language}`],
                        }}
                    />
                    {currentProduct.images &&
                    currentProduct.images.length > 1 ? (
                        <Styled.ImageList>
                            {currentProduct.images.map((item, index) => (
                                <li
                                    key={index.toString()}
                                    onClick={() =>
                                        handleLightboxToggle(item.image)
                                    }
                                >
                                    <Card
                                        image={item.image}
                                        title={currentProduct[`caption_${i18n.language}`]}
                                    />
                                </li>
                            ))}
                        </Styled.ImageList>
                    ) : null}
                    <Styled.List>
                        {currentProduct.children &&
                            currentProduct.children.map((child, index) => (
                                <Styled.ListItem paddingBottom={16}>
                                    <Link
                                        to={`/products/${currentProduct.slug}/${child.slug}`}
                                    >
                                        <ProductCardExtended
                                            image={child.images[0].image}
                                            title={child[`title_${i18n.language}`]}
                                            desc={child[`excerpt_${i18n.language}`]}
                                            key={index.toString()}
                                        />
                                    </Link>
                                </Styled.ListItem>
                            ))}
                    </Styled.List>
                </Styled.Main>
            </Styled.Wrapper>
        </>
    )
}

export default Product

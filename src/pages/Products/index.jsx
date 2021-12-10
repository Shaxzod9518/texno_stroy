import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../configs/api'
import ParentProductCard from '../../components/ParentProductCard'
import Card from '../../components/Card'
import * as Styled from './styled-component'
import { useTranslation } from 'react-i18next'

const Products = () => {
    const [products, setProducts] = useState(null)
    const { t, i18n } = useTranslation()

    useEffect(() => {
        fetch(`${api.host}/products/`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])

    return (
        <Styled.Background>
            <Styled.Shadow />
            <Styled.CustomContainer>
                {products &&
                    products.map((product, index) => (
                        <div key={index.toString()}>
                            <Styled.Blog>
                                <ParentProductCard
                                    image={product.images[0] && product.images[0].image}
                                    title={product[`title_${i18n.language}`]}
                                    url={`/products/${product.slug}`}
                                />
                            </Styled.Blog>
                            <Styled.Wrapper>
                                {product.children &&
                                    product.children.map((child, index) => (
                                        <Link
                                            to={`/products/${product.slug}/${child.slug}`}
                                            key={index.toString()}
                                        >
                                            <Card
                                                image={child.images[0].image}
                                                title={child[`caption_${i18n.language}`]}
                                            />
                                        </Link>
                                    ))}
                            </Styled.Wrapper>
                        </div>
                    ))}
                {/* <Button
                    variant="large"
                    block
                    url={products && `/products/${products[0].slug}`}
                >
                    { t('Read more') }
                </Button> */}
            </Styled.CustomContainer>
        </Styled.Background>
    )
}

export default Products

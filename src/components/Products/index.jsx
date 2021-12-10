import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import api from '../../configs/api'
import * as Styled from './styled-components'
import Card from '../Card'
import Button from '../Button'

const Products = () => {
    const [products, setProducts] = useState([])

    const { t, i18n } = useTranslation()

    useEffect(() => {
        fetch(`${api.host}/products`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }, [])

    return (
        <Styled.Wrapper>
            <Styled.Heading>{t('products')}</Styled.Heading>
            <Styled.List>
                {products &&
                    products.map((product, index) => (
                        <li>
                            <Link
                                to={`/products/${product.slug}`}
                                key={index.toString()}
                            >
                                <Card
                                    image={product.images[0].image}
                                    title={product[`caption_${i18n.language}`]}
                                />
                            </Link>
                        </li>
                    ))}
            </Styled.List>
            {/* <Button variant="large" block url="/products">
                {t('Read more')}
            </Button> */}
        </Styled.Wrapper>
    )
}

export default Products

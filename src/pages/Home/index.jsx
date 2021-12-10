import Header from '../../components/Header'
import Statistics from '../../components/Statistics'
import Partners from '../../components/Partners'
import AboutUs from '../../components/AboutUs'
import Products from '../../components/Products'

const Home = () => {
    return (
        <>
            <Header />
            <Statistics
                partners="50"
                products="1000"
                projects="200"
                specialists="65"
            />
            <Partners />
            <AboutUs />
            <Products />
        </>
    )
}

export default Home

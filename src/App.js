import { Suspense } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Copyright from "./pages/Copyright";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import TopBar from "./components/TopBar";
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";
import BottomBar from "./components/BottomBar";
import Loader from "./components/Loader";


const App = () => (
    <Suspense fallback={<Loader />}>
        <Router>
            <TopBar />
            <TopHeader />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route path="/products/:parentSlug/:childSlug?">
                    <Product />
                </Route>
                <Route path="/projects/:slug">
                    <Project />
                </Route>
                <Route path="/copyright">
                    <Copyright />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
            <Footer />
            <BottomBar />
        </Router>
    </Suspense>
);

export default App;

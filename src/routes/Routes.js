import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
// import "../assets/css/bootstrap.min.css";
// import "../assets/scss/paper-kit.scss";

//components
// import Home from '../components/Views/Home';
import Contact from '../components/Views/Contact';
import AboutUs from '../components/Views/AboutUs';
import Services from '../components/Views/Services';
import Products from '../components/Views/Products';
import LandingPage from '../pages/LandingPage';
import NavigationBar from '../components/NavBar/NavigationBar';
import Footer from '../components/Footer/Footer';

const Routes = (props) => {
    return(
        <div>
           <NavigationBar />
           {props.children}
           <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/contacts" component={Contact} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/services" component={Services} />
                <Route path="/products" component={Products} />
                {/* <Redirect to="/landing-page" /> */}
            </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default Routes; 
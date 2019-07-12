import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

//components
import Contact from '../components/Views/Contact';
import AboutUs from '../components/Views/AboutUs';
import Services from '../components/Views/Services';
import Products from '../components/Views/Products';
import LandingPage from '../components/Views/LandingPage';

const Routes = () => {
    return(
        <div>
           <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/contact" component={Contact} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/services" component={Services} />
                <Route path="/products" component={Products} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes; 
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about-us" component={AboutUs} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/products" component={Products} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes; 
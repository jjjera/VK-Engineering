import React from 'react';
import NavigationHeader from '../components/NavBar/NavigationHeader';
import Footer from '../components/Footer/Footer';
import LandingPageCarousel from '../components/Headers/LandingPageCarousel';

const Layout = (props) => {
    return(
        <div>
            <NavigationHeader />
            <LandingPageCarousel/>
             {props.children }
            <Footer />
        </div>
    )
}

export default Layout;
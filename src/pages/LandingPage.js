import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
// import NavigationBar from "../components/NavBar/NavigationBar";
import LandingPageHeader from "../components/Headers/LandingPageHeader";
// import Footer from "../components/Footer/Footer";
// import SectionCarousel from '../index-sections/SectionCarousel';

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      {/* <NavigationBar /> */}
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default LandingPage;

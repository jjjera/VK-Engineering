import React from "react";
import Slider from "react-slick";

// core components
import Layout from '../../pages/Layout';

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear" 
  };
  
  return (
    <Layout>
      <div className="main">
        <div className="section text-center">
        <Slider {...settings}>
          <div>
            <h3>Logo</h3>
          </div>
          <div>
            <h3>Logo</h3>
          </div>
          <div>
            <h3>Logo</h3>
          </div>
          <div>
            <h3>Logo</h3>
          </div>
          <div>
            <h3>Logo</h3>
          </div>
          <div>
            <h3>Logo</h3>
          </div>
        </Slider>
        </div>
      </div>
    </Layout>
  );
}

export default LandingPage;

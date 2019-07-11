import React from "react";
import SectionCarousel from '../Views/SectionCarousel';


function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" /> 
        <SectionCarousel/>
      </div>
    </>
  );
}

export default LandingPageHeader;

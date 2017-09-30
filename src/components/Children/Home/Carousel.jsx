/**
|------------------------------------------------------
| Stateless Carousel component.
| Displays photos in carousel at the top of the site.
|-------------------------------------------------------
*/

import React from 'react';

const Carousel = (props) => {
  return (
<div>

    {/* Logo */}
    <div id="sticky-logo">
      <img src= "../../../images/small.png" />
    </div>

    {/* Carousel */}
    <div id="carouselExampleIndicators" className="carousel slide row" data-ride="carousel">

      {/* Indicators */}
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>

      {/* Images */}
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img className="d-block img-fluid" src="../../../images/FullSizeRender.jpg" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" src="https://drive.google.com/drive/u/0/folders/0B7qVHDNARLkba2NSZ25PYzRRNDg" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" src="../../../images/IMG_2571.jpg" alt="Third slide" />
        </div>
      </div>

      {/* Arrow Selectors */}
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>

    </div>
</div>
  );
}

export default Carousel;
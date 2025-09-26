import React from 'react';
// import Products from '../../components/products/Products';
import Products from '../../components/products/Products';
import './Home.css';


const Home = () => {
  return (
    <>
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active banner-img">
      <img src="/images/courasel-img1.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item banner-img">
      <img src="/images/courasel-img2.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item banner-img">
      <img src="/images/courasel-img3.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
<button
  className="carousel-control-prev"
  type="button"
  data-bs-target="#carouselExampleFade"
  data-bs-slide="prev"
  style={{ outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }}
>
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>

<button
  className="carousel-control-next"
  type="button"
  data-bs-target="#carouselExampleFade"
  data-bs-slide="next"
  style={{ outline: 'none', boxShadow: 'none', backgroundColor: 'transparent' }}
>
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>


</div>


<Products />
    </>
  );
};

export default Home;











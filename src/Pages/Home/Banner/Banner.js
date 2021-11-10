import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
              <Carousel>
  <Carousel.Item>
    <img style={{height: '650px', width: '1000px'}}
      className="d-block w-100"
      src="https://i.pinimg.com/originals/54/fa/7d/54fa7d52c91f0a7d20478201507d2d90.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="mb-5">
      <h3 style={{fontStyle:'italic',fontWeight:'400'}} className="display-5 text-danger">Largest Bicycle Manufacturers</h3> 
      <h4 className="mb-5">Check out our exclusive collection of mountain bikes, city bikes, girl cycles more</h4>
      <button className="btn btn-outline-primary">Shop now</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '650px', width: '1000px'}}
      className="d-block w-100"
      src="https://d1wa5qhtul915h.cloudfront.net/app/uploads/2021/10/Bike-Europe-VanMoof-V-1-560x373.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="mb-5">
      <h3 style={{fontStyle:'italic',fontWeight:'400'}} className="display-5 text-danger">Electric & City Bicycles</h3> 
      <h4 className="mb-5">Check out our exclusive collection of mountain bikes, city bikes, girl cycles more</h4>
      <button className="btn btn-outline-primary">Shop now</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '650px', width: '1000px'}}
      className="d-block w-100"
      src="https://www.designer-daily.com/wp-content/uploads/2009/12/inner-city-bike.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="mb-5">
      <h3 style={{fontStyle:'italic',fontWeight:'400'}} className="display-5 text-danger">Buy Best Bicycles Online For Man, Women & Children</h3> 
      <h4 className="mb-5">Check out our exclusive collection of mountain bikes, city bikes, girl cycles more</h4>
      <button className="btn btn-outline-primary">Shop now</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;
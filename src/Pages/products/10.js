import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img from "../../Components/carousel1/pics/car2.jpg"
import ServInfo from "./components/10"

function Service1() {
  return (
    <div>
      <title>Communication | PaladiumTechServiceLimited</title>
      <Carousel slide={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="First slide" />
          <Carousel.Caption className="abcap">
            <p className="abp">Communication</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ServInfo />
    </div>
  );
}

export default Service1;
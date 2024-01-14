import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img from "../../Components/carousel1/pics/IT.jpg"
import ServInfo from "./components/2"

function Service2() {
  return (
    <div>
      <title>Our goals | ProslyLimited</title>
      <Carousel slide={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="First slide" />
          <Carousel.Caption className="abcap">
            <p className="abp">Our goals</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ServInfo />
    </div>
  );
}

export default Service2;

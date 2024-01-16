import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img from "../../Components/carousel1/pics/Training.jpg";
import ServInfo from "./components/6";

function Service6() {
  return (
    <div>
      <title>IT related training | ProslyLimited</title>
      <Carousel slide={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="First slide" />
          <Carousel.Caption className="abcap">
            <p className="abp">IT related training</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ServInfo />
    </div>
  );
}

export default Service6;

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img from "../../Components/carousel1/pics/Training.jpg";
import ServInfo from "./components/5";

function Service5() {
  return (
    <div>
      <title>IT project management | ProslyLimited</title>
      <Carousel slide={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="First slide" />
          <Carousel.Caption className="abcap">
            <p className="abp">IT Project Management</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ServInfo />
    </div>
  );
}

export default Service5;

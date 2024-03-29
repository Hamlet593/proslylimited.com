import Carousel from "react-bootstrap/Carousel";
import "./style.css";
import car1 from "./pics/home.jpg";
import { Link } from "react-router-dom"

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item >
        <img className="d-block w-100" src={car1} alt="First slide" />
        <Carousel.Caption className="caption">
          <div>
            <Link to="/works" className="link"></Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;

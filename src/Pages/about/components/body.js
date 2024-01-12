import { NavLink } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import OurMission from "../../../assets/images/mission.jpg";
import OurValues from "../../../assets/images/values.jpg";
import OurGoals from "../../../assets/images/goals.jpg";
import "./body.css";

function GridExample() {
  return (
    <div className="aboutus1">
      <div className="abb1">
        <span>
          At Prosly Limited, we stand at the forefront of versatile business
          solutions, seamlessly integrating general trading, maintenance,
          IT-related maintenance services, and cutting-edge IT-related training
          programs. Our commitment to excellence is ingrained in our core
          values, driving us towards a future where innovation, customer
          satisfaction, and sustainable practices converge.
        </span>
      </div>
      <div className="abb2">
        <div className="servcardcont">
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <Card.Img variant="top" alt="AutoServices" src={OurMission} />
                <Card.Body>
                  <Card.Title>
                    <NavLink href="/mission">Our Mission</NavLink>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" alt="ITServices" src={OurGoals} />
                <Card.Body>
                  <Card.Title>
                    <NavLink href="/goals">Our Goals</NavLink>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" alt="ITServices" src={OurValues} />
                <Card.Body>
                  <Card.Title>
                    <NavLink href="/goals">Our Values</NavLink>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default GridExample;

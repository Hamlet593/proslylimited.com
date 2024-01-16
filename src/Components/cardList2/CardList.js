import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NavLink } from "react-bootstrap";
import mission from "./pics/mission.svg";
import goals from "./pics/goals.svg";
import values from "./pics/values.svg";
import "./style3.css";

function GridExample() {
  return (
    <div className="prodcont1111">
      <Row xs={1} md={2} className="g-4">
        <Col className="col1">
          <Card>
            <Card.Img
              className="icon"
              variant="top"
              alt="AutoSpareParts"
              src={mission}
            />
            <Card.Body>
              <Card.Title>
                <NavLink href="/mission">Our Mission</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img className="icon" variant="top" alt="UAV" src={goals} />
            <Card.Body>
              <Card.Title>
                <NavLink href="/goals">Our Goals</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img
              className="icon"
              variant="top"
              alt="TrackedVehiclesSpareParts"
              src={values}
            />
            <Card.Body>
              <Card.Title>
                <NavLink href="/values">Our Values</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GridExample;

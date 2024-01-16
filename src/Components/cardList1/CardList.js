import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./style.css";
import serv1 from "./pics/management.svg";
import serv2 from "./pics/training.svg";
import serv3 from "./pics/trading.svg";
import serv4 from "./pics/maintenance.svg";
import { NavLink } from "react-bootstrap";

function GridExample() {
  return (
    <div className="servcont">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={serv1} alt="Project Management" />
            <Card.Body>
              <Card.Title>
                <NavLink href="/projectmanagement">Project Management</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={serv2} alt="ITServices" />
            <Card.Body>
              <Card.Title>
                <NavLink href="/trainings">IT related training</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={serv3} alt="trades" />
            <Card.Body className="card-body-list">
              <Card.Title>
                <NavLink href="/trades">General Trading services</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={serv4} alt="maintenance" />
            <Card.Body>
              <Card.Title>
                <NavLink href="/maintenance">Maintenance Services</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GridExample;

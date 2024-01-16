import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./ServCardList.css";
import serv1 from "../../../Components/carousel1/pics/Autoservice.jpg";
import serv2 from "../../../Components/carousel1/pics/IT.jpg";
import serv3 from "../../../Components/carousel1/pics/Communication.png";
import serv4 from "../../../Components/carousel1/pics/Training.jpg";
import { NavLink } from "react-bootstrap";

function GridExample() {
  return (
    <div className="servcardcont">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" alt="AutoServices" src={serv1} />
            <Card.Body>
              <Card.Title>
                <NavLink href="/projectmanagement">
                  IT Project Management
                </NavLink>
              </Card.Title>
              <Card.Text>
                At Prosly Limited, we provide comprehensive services spanning
                every stage of the project lifecycle – from initiation and
                planning to coordination and execution, aligning seamlessly with
                specific requirements and constraints.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" alt="ITServices" src={serv2} />
            <Card.Body>
              <Card.Title>
                <NavLink href="/trainings">IT related training</NavLink>
              </Card.Title>
              <Card.Text>
                Our company designs, develops, implements, manages and optimizes
                access to systems and information to answer your business
                processing and infrastructure needs. We can provide IT service
                you need to improve efficiency, add value and lower costs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" alt="Trades" src={serv3} />
            <Card.Body>
              <Card.Title>
                <NavLink href="/trades">General Trading services</NavLink>
              </Card.Title>
              <Card.Text>
                At Prosly Limited, our general trading services transcend
                traditional boundaries, positioning us as a dynamic link between
                contract parties in the ever-evolving marketplace. We specialize
                in facilitating seamless transactions and fostering mutually
                beneficial partnerships.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" alt="TrainingAndTesting" src={serv4} />
            <Card.Body>
              <Card.Title>
                <NavLink href="/maintenance">Maintenance Services</NavLink>
              </Card.Title>
              <Card.Text>
                We understand the critical role that communication equipment
                plays in the seamless operation of your business. Our
                Communication Equipment Maintenance Services are meticulously
                designed to ensure the optimal performance, reliability, and
                longevity of your communication infrastructure.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GridExample;

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import serv1 from "../../../Components/carousel1/pics/Autoservice.jpg";
import serv2 from "../../../Components/carousel1/pics/IT.jpg";
import serv3 from "../../../Components/carousel1/pics/Communication.png";
import serv4 from "../../../Components/carousel1/pics/Training.jpg";
import { Link } from "react-router-dom";

function GridExample() {
  return (
    <div className="servcardcont">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" alt="AutoServices" src={serv1} />
            <Card.Body>
              <Card.Title>
                <Link to="/projectmanagement">IT Project Management</Link>
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
                <Link to="/trainings">IT related training</Link>
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
                <Link to="/trades">General Trading services</Link>
              </Card.Title>
              <Card.Text>
                Our experts are specialized in the installing, sustaining,
                troubleshooting and repairing standard, voice, data, video
                networks and devices in order to minimize equipment downtime.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" alt="TrainingAndTesting" src={serv4} />
            <Card.Body>
              <Card.Title>
                <Link to="/maintenance">Maintenance Services</Link>
              </Card.Title>
              <Card.Text>
                We understand the critical role that communication equipment
                plays in the seamless operation of your business. Our
                Communication Equipment Maintenance Services are meticulously
                designed to ensure the optimal performance, reliability, and
                longevity of your communication infrastructure. Our approach is proactive, aiming to identify and address potential issues before they impact your communication systems.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GridExample;

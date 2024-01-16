import Col from "react-bootstrap/Col";
import "./serv.css";
import { Row } from "react-bootstrap";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
          <Col className="itinfo">
            <span>
              At Prosly Limited, we specialize in delivering comprehensive
              training and testing services, both online and offline, designed
              to yield a multitude of benefits. Our programs aim to elevate
              employee performance, enhance productivity, minimize turnover
              rates, and foster an improved company culture. Delve into the
              significance of employee training and its impact on both
              individuals and organizations by considering a career in human
              resources. Our commitment to providing the highest standard of
              professional training extends across the Auto Service, IT, and
              Communication fields. In the realm of IT, our training programs
              cover a diverse spectrum, including Cyber Security and Security
              Operations, Windows Servers Operations, Networking and Servers,
              Information Security, and customized training tailored to specific
              client requests. Furthermore, we prioritize the testing of our
              clients' purchased products, facilitating a comprehensive
              comparison between actual and expected results. This process not
              only ensures quality improvement but also reinforces our
              dedication to delivering reliable and high-performance solutions
              for our clients. Explore the transformative potential of our
              training and testing services, designed to empower individuals and
              organizations in today's dynamic and competitive landscape.
            </span>
          </Col>
        </div>
        {/* <div className="stimg">
        </div> */}
      </Row>
    </div>
  );
}

export default StaffInfo;

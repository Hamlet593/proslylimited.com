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
              At Prosly Limited, we provide comprehensive services spanning
              every stage of the project lifecycle – from initiation and
              planning to coordination and execution, aligning seamlessly with
              specific requirements and constraints. Our highly skilled team is
              dedicated to delivering exceptional projects, offering a spectrum
              of services, including technical expertise, project management,
              requirements gathering, third-party testing, and implementation
              support. In the realm of IT Project Management, our team adeptly
              utilizes Agile frameworks such as Scrum, Kanban, Scrumban and
              Crystal. This approach ensures the successful delivery of projects
              with a focus on timeliness and budget adherence, leveraging modern
              software solutions. Our professionals possess the versatility to
              handle an extensive array of tasks and responsibilities, including
              system and software integrations, website construction, database
              storage, and management. Moreover, at Prosly Limited, we
              continually strive to enhance our offerings. In addition to the
              mentioned services, we also specialize in advanced areas such as
              emerging technologies integration, cybersecurity measures, and
              ongoing support and maintenance. This commitment to staying at the
              forefront of industry trends allows us to provide holistic and
              cutting-edge solutions for your project needs.
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

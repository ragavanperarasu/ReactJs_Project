import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ragavan </span>
            from <span className="purple"> Tiruvannamalai, TamilNadu.</span>
            <br />
            I am currently studying in Government College of Technology, Coimbator.<br /> <span className="purple"> BE - Computer Engineering</span>
            <br />
            I have completed Diploma in Government PolyTechnic College, Thiruvannamalai.<br /><span className="purple"> Diploma Computer Engineering</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
{/*             <li className="about-activity">
              <ImPointRight /> Playing Games
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Yoga
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Programming is the art of Algorithm Design"{" "}
          </p>
          <footer className="blockquote-footer">Ragavan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

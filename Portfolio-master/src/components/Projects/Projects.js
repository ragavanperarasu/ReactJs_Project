import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import maths from "../../Assets/Projects/maths.jpg";
import todo from "../../Assets/Projects/todo.jpg";
import age from "../../Assets/Projects/age.jpg";

import bitsOfCode from "../../Assets/Projects/blog.JPG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
{/*         <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1> */}
        <h1 className="project-heading">
          MERN Stack<strong className="purple"> Project </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
{/*           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="VIP World"
              description="This is E-Commerce website. It's developed using technoloy are React Js, Node Js, MongoDb. This is MERN stack allication."
              ghLink="https://github.com/ragavanperarasu/vip-world.git"
              demoLink="https://youtu.be/PV3ELB3IjlA?si=ce8KUVg1Aa76Y_u8"
            />
          </Col>
          </Row>
          <h1 className="project-heading">
          React Native<strong className="purple"> Project </strong>
        </h1>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo List"
              description="This is React Native project for Mobile App. It used to manage daily life task."
              ghLink="https://github.com/ragavanperarasu/React_Native_Projects.git"
              demoLink="https://youtube.com/shorts/Z4zhW64-uHc?si=nPNoQ7y98odPHLIW"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maths}
              isBlog={false}
              title="Maths Game"
              description="This is React Native project for Mobile App. It used to increase your maths calculation speed."
              ghLink="https://github.com/ragavanperarasu/React_Native_Projects.git"
              demoLink="https://youtube.com/shorts/sGBjENiLsRs?si=oIyb7SHgGAnSfU7m"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={age}
              isBlog={false}
              title="Age Calculator"
              description="This is React Native project for Mobile App. It used to calculate your age. "
              ghLink="https://github.com/ragavanperarasu/React_Native_Projects.git"
              demoLink="https://youtube.com/shorts/-zIyuDLAwAQ?si=0tv6Q5fMHhFFMzOj" />
          </Col>

{/*           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

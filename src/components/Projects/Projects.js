import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import suicide from "../../Assets/Projects/suicide.png";
import doctor from "../../Assets/Projects/doctor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Chat-Bot"
              description="A Simple chat bot that we have Trained with some topics you can ask queries according to that topics.The Technologies I used for this froject are HTML,CSS,JavaScript for frontend development and python and flask framework for backend development"
              ghLink="https://github.com/chandrakanthreddybhumireddy?tab=repositories"
              demoLink="https://chatguru.pythonanywhere.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doctor}
              isBlog={false}
              title="Doctor-Search-Website"
              description="A Doctor Search website to search for a doctor.It has a features like Search by location,Search by Specialization and Provides the detail information About doctor with Image for easy identification.The Technologies I used in this project HTML,CSS,JavaScript for frontend development and for Backend development I used python and Django framework"
              ghLink="https://github.com/chandrakanthreddybhumireddy/doctorsearch"
              demoLink="https://onem.pythonanywhere.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blog-Website"
              description="This is a blog website where we create a new blogs through admis approval.The technologies I used in this project are HTML,CSS,JavaScript for frontend and python and Django for backend development"
              ghLink="https://github.com/chandrakanthreddybhumireddy/blog-website-using-django"
                          
            />
          </Col>

          

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
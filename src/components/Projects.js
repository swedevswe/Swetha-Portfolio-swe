import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Portfolio Website",
      description: "Created a personal portfolio website to showcase my software projects and technical skills. Employed advanced CSS for styling and React for dynamic content management.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/swedevswe/Swe-Portfolio.git"
    },
    {
      title: "Interactive Excel Dashboard: Coffee Sales",
      description: "An interactive dashboard providing insights into coffee sales data, utilizing advanced Excel features to facilitate data-driven decision-making.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/swedevswe/Interactive-Excel-Dashboard.git"
    },
    {
      title: "Weather App",
      description: "Developed a desktop application that provides real-time weather updates and forecasts, integrating graphical user interface components for enhanced user interactions.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/swedevswe/WeatherApp.git"
    },
    {
      title: "Movie Recommendation System",
      description: "Built a system using machine learning algorithms to recommend movies to users based on their viewing history and preferences, enhancing user engagement.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/swedevswe/Movie-Recommendation.git"
    },
    {
      title: "Deep-Learning Model: Diabetes or Not!",
      description: "A deep learning model that predicts diabetes likelihood based on patient data, showcasing my skills in using advanced machine learning frameworks and data science techniques.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/swedevswe/Deep-Learning-Model.git"
    },
    {
      title: "Hospital-Management-System",
      description: "Developed a Hospital Management with SQL Database for secure and persistant storage streamlining the operations by managing patient records, doctor schedules and appointment bookings.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/swedevswe/Hospital-Management-System.git"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore my portfolio of projects where I've applied cutting-edge technologies and innovative solutions to solve complex problems across various domains. Each project showcases my skills in software development, ranging from full-stack web applications to data-driven machine learning models. Through these projects, I demonstrate my ability to effectively combine programming expertise with critical thinking to deliver functional, user-centric software solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Work in Progress.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Work in Progress.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>

    )

};
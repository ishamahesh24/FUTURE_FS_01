import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Peripheral Arterial Disease Detection using Machine Learning.",
    description: `This project utilizes machine learning algorithms to detect Peripheral Arterial Disease (PAD) 
    using clinical gait data and Doppler waveform signals. `,
  },
  {
    title: "AI-Powered Preplacement Prep Platform",
    description: `This project is an AI-powered Preplacement Preparation platform designed to support students 
    with coding, aptitude, and interview readiness.`,
  },
  {
    title: "Object Detection with YOLO and openCV",
    description: `This project focuses on implementing object detection using Python by integrating deep learning-based 
    models such as YOLO,Leveraging OpenCV.`,
  },
];

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <h2 className="text-center mb-3">Projects</h2>

        {/* Project Summary */}
        <p className="project-summary text-center mb-5">
          A showcase of my recent work in Machine Learning, web development etc,each project reflecting innovation, problem-solving,
          and technical expertise.Designed and developed end-to-end applications combining intuitive front-end interfaces with robust back-end architecture. Implemented responsive UI using React, optimized server-side performance with Node.js, and integrated secure database solutions with MongoDB.Utilized version control and testing best practices to ensure scalability, maintainability, and high performance across all projects.
        </p>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="d-flex">
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

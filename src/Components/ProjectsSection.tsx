import React from "react";
import { styled } from "styled-components";
import { featuredProjects } from "../data/projects";
import { Container, Section } from "../Styles/StyledComponents";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

const CardStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 140px;
  margin-top: 80px;

  @media (max-width: 1024px) {
    gap: 90px;
    margin-top: 56px;
  }
`;

const ProjectsSection: React.FC = () => (
  <Section id="projects">
    <Container>
      <SectionHeader
        number="01"
        label="Featured Work"
        heading="Projects I've built and shipped systems for"
        intro="A closer look at the three projects I'm most proud of - what I built, the systems behind them, and the problems I had to solve along the way."
      />
      <CardStack>
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </CardStack>
    </Container>
  </Section>
);

export default ProjectsSection;

import React from 'react';
import Project from './Project';
import styled from 'styled-components';

const Projects = () => {
  const ProjectsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    background-color: #fbfbfb;
  `;

  const ProjectHeading = styled.section`
    padding: 2rem;
    font-size: 2rem;
    font-family: 'Work Sans', sans-serif;
  `;
  return (
    <ProjectsWrapper>
      <ProjectHeading>
        <h2>Projects</h2>
      </ProjectHeading>
      <section>
        <Project />
      </section>
    </ProjectsWrapper>
  );
};

export default Projects;

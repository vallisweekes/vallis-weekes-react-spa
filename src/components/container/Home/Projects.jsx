import React from 'react';
import Project from './Project';
import styled from 'styled-components';
import { results } from '../../../db/projects.json';

console.log(results);

const Projects = () => {
  const ProjectsContainer = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@100&display=swap');
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    background-color: #fbfbfb;
  `;

  const ProjectHeading = styled.section`
    padding: 2rem;
    font-size: 1.5rem;
    font-weight: lighter;
    font-family: 'Source Sans Pro', sans-serif;
  `;

  const ProjectsWrapper = styled.section`
    border-top: 1px solid rgb(234, 234, 234);
  `;
  return (
    <ProjectsContainer style={{ borderTop: '2px solid rgb(234, 234, 234)' }}>
      <ProjectHeading>
        <h2>Projects</h2>
      </ProjectHeading>
      <ProjectsWrapper>
        {results.map((p) => (
          <Project key={p._id} image={p.image} />
        ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;

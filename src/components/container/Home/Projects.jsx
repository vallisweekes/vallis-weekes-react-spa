import React from 'react';
import Project from './Project';
import styled from 'styled-components';
import { results } from '../../../db/projects.json';
import { ProjectsContainer, ProjectsWrapper } from '../../../utils/styles';
console.log(results);

const Projects = () => {
  const ProjectHeading = styled.section`
    padding: 2rem;
    font-size: 1.5rem;
    font-weight: lighter;
    font-family: 'Source Sans Pro', sans-serif;
  `;

  return (
    <section>
      <ProjectsContainer>
        <ProjectHeading>
          <h2>Projects</h2>
        </ProjectHeading>
        <ProjectsWrapper>
          {results.map((p) => (
            <Project key={p._id} image={p.image} />
          ))}
        </ProjectsWrapper>
      </ProjectsContainer>
    </section>
  );
};

export default Projects;

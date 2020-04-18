import React from 'react';
import Project from './Project';
import { results } from '../../../db/projects.json';
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectHeading,
} from '../../../utils/styles';

const Projects = () => {
  return (
    <section>
      <ProjectsContainer>
        <ProjectHeading>
          <h2>Projects</h2>
        </ProjectHeading>
        <p>View some of my work here</p>
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

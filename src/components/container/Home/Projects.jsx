import React from 'react';
import Project from './Project';
import { Link } from 'react-router-dom';
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
            <Link to={`/${p._id}`} key={p._id}>
              <Project image={p.image} />
            </Link>
          ))}
        </ProjectsWrapper>
      </ProjectsContainer>
    </section>
  );
};

export default Projects;

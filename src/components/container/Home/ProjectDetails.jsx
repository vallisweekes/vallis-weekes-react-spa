import React, { useEffect, useState } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {
  ProjectDetailWrapper,
  ProjectDetailInner,
  ProjectDetailHeader,
} from '../../../utils/styles';
import { results } from '../../../db/projects.json';
const ProjectDetails = ({ match, history }) => {
  const [project, setProjects] = useState({});
  useEffect(() => {
    const getProject = () => {
      if (match.params.id) {
        const project = results.filter(
          (p) => p._id.toString() === match.params.id
        );
        setProjects(...project);
      }
    };
    getProject();
  }, [match.params.id]);

  const handleBackButton = () => {
    history.push('/projects');
  };

  return (
    <ProjectDetailWrapper>
      <div style={{ marginLeft: 30, cursor: 'pointer', paddingTop: 10 }}>
        <KeyboardBackspaceIcon onClick={handleBackButton} />
      </div>
      <ProjectDetailInner>
        <ProjectDetailHeader>
          <h1>{project.title}</h1>
        </ProjectDetailHeader>
        <div>
          <img src={project.image} alt={project.title} />
        </div>
        <div style={{ marginTop: '10px' }}>
          <p>Built With: {project.stack}</p>
        </div>
        <div style={{ marginTop: '10px' }}>
          <p>
            Url:{' '}
            <a
              style={{ color: 'blue' }}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
          </p>
        </div>
      </ProjectDetailInner>
    </ProjectDetailWrapper>
  );
};

export default ProjectDetails;
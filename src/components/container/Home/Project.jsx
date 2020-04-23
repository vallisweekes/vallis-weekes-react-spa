import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContainer, ImageHolder } from '../../../utils/styles';

const Project = (props) => {
  const Image = ImageHolder(props);
  return (
    <CardContainer>
      <section className="c-content">
        <Card>
          <Image />
        </Card>
      </section>
    </CardContainer>
  );
};

Project.prototype = {
  image: PropTypes.string,
};
export default Project;

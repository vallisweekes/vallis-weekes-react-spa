import React from 'react';

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

export default Project;

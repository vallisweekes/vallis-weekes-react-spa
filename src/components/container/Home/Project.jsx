import React from 'react';
import styled from 'styled-components';
import { Card, CardContainer } from '../../../utils/styles';

const Project = (props) => {
  const ImageHolder = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 15px;
    -webkit-box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 15px 0px,
      rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 15px 0px,
      rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;
    cursor: zoom-in;
  `;

  return (
    <CardContainer>
      <Card>
        <ImageHolder />
      </Card>
    </CardContainer>
  );
};

export default Project;

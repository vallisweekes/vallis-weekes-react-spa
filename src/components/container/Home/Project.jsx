import React from 'react';
import styled from 'styled-components';

const Project = (props) => {
  const CardContainer = styled.section`
    position: relative;
    height: unset;
    background-color: rgb(250, 250, 250);
  `;

  const Card = styled.div`
    width: 400px;
    max-width: 400px;
    height: 240px;
    margin-bottom: 1rem;
  `;
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

  // const CardDetails = styled.div`
  //   padding: 0.5rem;
  //   height: 70px;
  //   background-color: white;
  // `;
  return (
    <CardContainer>
      <Card>
        <ImageHolder />
      </Card>
    </CardContainer>
  );
};

export default Project;

import styled from 'styled-components';
export const HeaderWrapper = styled.header`
  display: flex;
  width: 100px;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 50vh;
  border-bottom: 2px solid rgb(234, 234, 234);
`;

export const IntroWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@100&display=swap');
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Source Sans Pro', sans-serif;
  text-align: center;
`;

export const StackHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #fafafa;
`;

export const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const ProjectsContainer = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@100&display=swap');
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background-color: #fbfbfb;
`;

export const ProjectsWrapper = styled.section`
  @media only screen and (min-width: 600px) {
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: 30px;
  }
`;
export const CardContainer = styled.section`
  position: relative;
  height: unset;
  background-color: rgb(250, 250, 250);
  margin-top: 30px;
`;

export const Card = styled.div`
  width: 400px;
  max-width: 400px;
  height: 240px;
  margin-right: 4rem;
  margin-bottom: 4rem;
`;

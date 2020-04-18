import styled, { keyframes } from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100px;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 450px;
  border-bottom: 2px solid rgb(234, 234, 234);

  @media only screen and (min-width: 600px) {
    height: 60vh;
  }
`;

export const ProjectHeading = styled.section`
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: lighter;
  font-family: 'Source Sans Pro', sans-serif;
`;

export const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 1rem 0 0;
`;

export const BurgerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-left: 10px;
  transition: all 0.2s ease-in;

  :hover {
    background-color: #f3f5f7;
  }
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
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: #fafafa;
`;

export const ProjectsContainer = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@100&display=swap');
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

export const ProjectsWrapper = styled.section`
  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: space-evenly;
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

  margin-bottom: 4rem;
`;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

`;

export const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeInDown};
  width: 400px;
`;

export const SideBar = styled.div``;

export const ImageHolder = (props) => {
  return styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 15px;

    cursor: zoom-in;
  `;
};

export const SocialIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const IconHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  /* border: 1px solid #000000;*/
  border-radius: 50px;

  margin-right: 0.75rem;
  transition: all 0.2s ease-in;
  cursor: pointer;

  :hover {
    background-color: #f3f5f7;
  }
`;

//Sidebar

export const SideBarContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 60px;
  font-family: 'Nunito', sans-serif;
  color: #ffffff;
  transition: 1s;
`;

export const LinkItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
`;

export const CloseButton = styled.li`
  position: absolute;
  top: 0;
  right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  font-size: 25px;
  margin-left: 50px;
  :hover {
    background-color: grey;
  }
`;

//About Me Page

export const AboutWrapper = styled.div`
  height: 300px;
  margin-bottom: 5rem;
  background-image: url('https://portfolio-vw.s3.eu-west-2.amazonaws.com/about-me.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
`;

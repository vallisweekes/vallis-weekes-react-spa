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
    height: 50vh;
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
  margin: 1rem 0 0 0;
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
  transition: all 0.2s linear;

  :hover {
    background-color: #f3f5f7;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const HeaderLogo = styled.div`
  margin-left: 20px;
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

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  80% {
    opacity: 1;
    -webkit-transform: translate3d(0, -30%, 0);
    transform: translate3d(0, -30%, 0);
  }
  100%{
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

`;

// Intro Text
export const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeInDown} 1.5s ease-in both;
  width: 400px;
`;

export const HeaderIntro = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@900&display=swap');

  font-family: 'Raleway', sans-serif;
  letter-spacing: 3;
  font-size: 35px;
  @media only screen and (min-width: 600px) {
    font-size: 50px;
    letter-spacing: 6;
  }
`;

export const SubTextWrapper = styled.div`
  /* display: inline-block; */
  width: 300px;
  margin: 0 auto;
  font-size: 16px;
  padding: 2px;
  margin-top: 10px;
  color: #828282;
  border: 1px solid #828282;

  @media only screen and (min-width: 600px) {
    font-size: 25px;
    width: 425px;
  }
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
  @media only screen and (min-width: 768px) {
    width: 75%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: 30px;
  }
`;

export const ProjectDetailWrapper = styled.div`
  padding-top: 10px;
  width: 100%;
  margin-bottom: 40px;
`;

export const ProjectDetailInner = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
`;

export const ProjectDetailHeader = styled.div`
  margin-bottom: 1rem;
`;

export const ProjectDetailImage = styled.div`
  width: 100%;

  @media only screen and (min-width: 600px) {
    width: 500px;
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
    transition: all 0.5s;

    :hover {
      transform: scale(1.1);
      display: block;
    }

    ::before {
      content: '';
      display: none;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(52, 73, 94, 0.75);
    }
  `;
};

export const Nav = styled.ul`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
  display: none;
  justify-content: space-between;
  width: 400px;
  margin-left: 6rem;
  font-family: 'Nunito', sans-serif;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

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

export const sideBarControl = (showSideBar) => {
  return styled.div`
    height: 100vh;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;

    background-color: #111;
    overflow-x: hidden;
    padding-top: 60px;
    font-family: 'Kanit', sans-serif;

    color: #ffffff;
  `;
};

export const LinkUl = styled.ul`
  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@800&family=Kanit:wght@800&display=swap');
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-left: 2rem;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 2rem;
`;

export const LinkItem = styled.li`
  padding: 10px;
  margin-bottom: 5px;
  background-color: transparent;
  transition: all 1s linear;
  :hover {
    background-color: rgba(33, 33, 33, 0.77);
  }
`;

//Homepage About Me Section

export const AboutWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  height: 600px;
  margin-bottom: 5rem;

  padding-top: 2rem;
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (min-width: 768px) {
    height: 600px;
  }
`;

export const AboutMeRight = styled.div`
  background-image: url('http://www.vallisweekes.com/portfolio_assets/aboutme.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  /* margin-bottom: 10px; */
  object-fit: cover;
  @media only screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 55%;
  }
`;

export const AboutMeLeft = styled.div`
  width: 100%;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 3rem;
    width: 35%;
  }
`;

// Homepage about me section end

//Form
export const ContactContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 300px;
  height: 100%;
  margin-bottom: 10px;
`;
export const StyleForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactFormHeading = styled.div`
  padding: 3rem;
`;
export const Input = styled.input`
  height: 40px;
  width: 100%;
  ::placeholder {
    padding: 5px;
  }
`;
// const NameField = styled.div`
//   display: flex;
// `;

export const Label = styled.label`
  display: inline-block;
  padding-bottom: 5px;
`;

export const TextAreaWrapper = styled.div`
  height: 200px;
  margin-top: 10px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
`;

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Btn = styled.button`
  margin-top: 5px;
  height: 40px;
  width: 100px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const SendBtn = styled(Btn)`
  background-color: black;
  color: white;
`;

export const AboutMeBtn = styled(Btn)`
  background-color: #000000;
  color: #ffffff;
  font-size: 1rem;
`;

export const ThankYouBtn = styled(Btn)`
  background-color: #000000;
  color: #ffffff;
  font-size: 1rem;
`;

//Footer
export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;

  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid rgb(234, 234, 234);
  height: 60px;
  background-color: #fafafa;
`;

export const FooterContent = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const FooterContentWrapper = styled.div`
  margin-left: 20px;
  font-size: 8px;

  @media only screen and (min-width: 600px) {
    font-size: 16px;
  }
`;

export const FooterMenu = styled.ul`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
  display: flex;
  justify-content: space-evenly;
  width: 200px;
  margin-right: 2rem;
  font-family: 'Nunito', sans-serif;
  font-size: 7.5px;
  @media only screen and (min-width: 600px) {
    font-size: 1rem;
    width: 300px;
  }
`;

//About Me page

// About Me Main Page

export const AboutPageWrapper = styled.div`
  width: 100%;
`;

export const AboutPageInner = styled.div`
  width: 70%;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export const AboutMePageLeft = styled.div`
  padding-top: 10px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 300px;
  }
`;
export const AboutMePageRight = styled.div`
  width: 100%;
`;

export const AboutMeIntro = styled.div`
  padding: 2rem;
  background-color: #ffffff;
`;
export const AboutMeExpirience = styled.div`
  padding: 2rem;
`;
export const AboutMeSkills = styled.div`
  background-color: #ffffff;
  padding: 2rem;
`;
export const AboutMeEducation = styled.div`
  padding: 2rem;
  margin-bottom: 50px;
`;

const slideUp = keyframes`
0 {
  opacity: 0;
bottom: -15rem
}

50%{
  opacity: 0;
}
70%{
   opacity: 1;
  bottom: 22rem
}
80%{
   opacity: 1;
  bottom: 20rem
}

90%{
 opacity: 1;
  bottom: 21rem
}
100% {
  opacity: 1;
  bottom: 20rem
}
`;

const fadeOut = keyframes`
from {
  opacity: 1;

}
to {
  opacity: 0;
 
}
`;
export const ModalClass = (status) => {
  return styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 0;
    opacity: 0;
    justify-content: space-evenly;
    width: 300px;
    height: 140px;
    background-color: #ffffff;

    -webkit-box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 20px 0px,
      rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 20px 0px,
      rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;
    animation: ${status ? slideUp : fadeOut} 1s ease-in-out both;
  `;
};

export const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 30px;
  cursor: pointer;

  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 1s linear;

  :hover {
    background-color: #f3f5f7;
  }
`;

export const FlexFix = styled(AboutPageInner)`
  display: flex;
  padding-top: 20px;
`;

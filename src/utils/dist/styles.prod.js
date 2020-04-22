"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ModalClass=exports.AboutMeEducation=exports.AboutMeSkills=exports.AboutMeExpirience=exports.AboutMeIntro=exports.AboutMePageRight=exports.AboutMePageLeft=exports.AboutPageInner=exports.AboutPageWrapper=exports.FooterMenu=exports.FooterContentWrapper=exports.FooterContent=exports.FooterWrapper=exports.ThankYouBtn=exports.AboutMeBtn=exports.SendBtn=exports.Btn=exports.Button=exports.Textarea=exports.TextAreaWrapper=exports.Label=exports.Input=exports.ContactFormHeading=exports.StyleForm=exports.ContactContainer=exports.AboutMeLeft=exports.AboutMeRight=exports.AboutWrapper=exports.CloseButton=exports.LinkItem=exports.LinkUl=exports.sideBarControl=exports.IconHolder=exports.SocialIconWrapper=exports.ImageHolder=exports.SideBar=exports.Card=exports.CardContainer=exports.ProjectDetailImage=exports.ProjectDetailHeader=exports.ProjectDetailInner=exports.ProjectDetailWrapper=exports.ProjectsWrapper=exports.ProjectsContainer=exports.StackHolder=exports.SubTextWrapper=exports.HeaderIntro=exports.IntroText=exports.IntroWrapper=exports.BurgerMenu=exports.TopBarContainer=exports.ProjectHeading=exports.Nav=exports.HeaderWrapper=void 0;var _styledComponents=_interopRequireWildcard(require("styled-components"));function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}function _templateObject59(){var e=_taggedTemplateLiteral(["\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    bottom: 0;\n    opacity: 0;\n    justify-content: space-evenly;\n    width: 300px;\n    height: 140px;\n    background-color: #ffffff;\n\n    -webkit-box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 20px 0px,\n      rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;\n    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 20px 0px,\n      rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;\n    animation: "," 1s ease-in-out both;\n  "]);return _templateObject59=function(){return e},e}function _templateObject58(){var e=_taggedTemplateLiteral(["\nfrom {\n  opacity: 1;\n\n}\nto {\n  opacity: 0;\n \n}\n"]);return _templateObject58=function(){return e},e}function _templateObject57(){var e=_taggedTemplateLiteral(["\n0 {\n  opacity: 0;\nbottom: -15rem\n}\n\n50%{\n  opacity: 0;\n}\n70%{\n   opacity: 1;\n  bottom: 22rem\n}\n80%{\n   opacity: 1;\n  bottom: 20rem\n}\n\n90%{\n opacity: 1;\n  bottom: 21rem\n}\n100% {\n  opacity: 1;\n  bottom: 20rem\n}\n"]);return _templateObject57=function(){return e},e}function _templateObject56(){var e=_taggedTemplateLiteral(["\n  padding: 2rem;\n  margin-bottom: 50px;\n"]);return _templateObject56=function(){return e},e}function _templateObject55(){var e=_taggedTemplateLiteral(["\n  background-color: #ffffff;\n  padding: 2rem;\n"]);return _templateObject55=function(){return e},e}function _templateObject54(){var e=_taggedTemplateLiteral(["\n  padding: 2rem;\n"]);return _templateObject54=function(){return e},e}function _templateObject53(){var e=_taggedTemplateLiteral(["\n  padding: 2rem;\n  background-color: #ffffff;\n"]);return _templateObject53=function(){return e},e}function _templateObject52(){var e=_taggedTemplateLiteral(["\n  width: 100%;\n"]);return _templateObject52=function(){return e},e}function _templateObject51(){var e=_taggedTemplateLiteral(["\n  padding-top: 10px;\n  width: 100%;\n\n  @media only screen and (min-width: 768px) {\n    width: 300px;\n  }\n"]);return _templateObject51=function(){return e},e}function _templateObject50(){var e=_taggedTemplateLiteral(["\n  width: 70%;\n  margin: 0 auto;\n\n  @media only screen and (min-width: 768px) {\n    display: flex;\n  }\n"]);return _templateObject50=function(){return e},e}function _templateObject49(){var e=_taggedTemplateLiteral(["\n  width: 100%;\n"]);return _templateObject49=function(){return e},e}function _templateObject48(){var e=_taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');\n  display: flex;\n  justify-content: space-evenly;\n  width: 200px;\n  margin-right: 2rem;\n  font-family: 'Nunito', sans-serif;\n  font-size: 7px;\n  @media only screen and (min-width: 600px) {\n    font-size: 1rem;\n    width: 300px;\n  }\n"]);return _templateObject48=function(){return e},e}function _templateObject47(){var e=_taggedTemplateLiteral(["\n  margin-left: 20px;\n  font-size: 8px;\n\n  @media only screen and (min-width: 600px) {\n    font-size: 16px;\n  }\n"]);return _templateObject47=function(){return e},e}function _templateObject46(){var e=_taggedTemplateLiteral(["\n  width: 90%;\n  margin: 0 auto;\n"]);return _templateObject46=function(){return e},e}function _templateObject45(){var e=_taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  /* position: fixed; */\n  bottom: 0;\n  width: 100%;\n  border-top: 1px solid rgb(234, 234, 234);\n  height: 60px;\n  background-color: #fafafa;\n"]);return _templateObject45=function(){return e},e}function _templateObject44(){var e=_taggedTemplateLiteral(["\n  background-color: #000000;\n  color: #ffffff;\n  font-size: 1rem;\n"]);return _templateObject44=function(){return e},e}function _templateObject43(){var e=_taggedTemplateLiteral(["\n  background-color: #000000;\n  color: #ffffff;\n  font-size: 1rem;\n"]);return _templateObject43=function(){return e},e}function _templateObject42(){var e=_taggedTemplateLiteral(["\n  background-color: black;\n  color: white;\n"]);return _templateObject42=function(){return e},e}function _templateObject41(){var e=_taggedTemplateLiteral(["\n  margin-top: 5px;\n  height: 40px;\n  width: 100px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n"]);return _templateObject41=function(){return e},e}function _templateObject40(){var e=_taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n"]);return _templateObject40=function(){return e},e}function _templateObject39(){var e=_taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  resize: none;\n"]);return _templateObject39=function(){return e},e}function _templateObject38(){var e=_taggedTemplateLiteral(["\n  height: 200px;\n  margin-top: 10px;\n"]);return _templateObject38=function(){return e},e}function _templateObject37(){var e=_taggedTemplateLiteral(["\n  display: inline-block;\n  padding-bottom: 5px;\n"]);return _templateObject37=function(){return e},e}function _templateObject36(){var e=_taggedTemplateLiteral(["\n  height: 40px;\n  width: 100%;\n  ::placeholder {\n    padding: 5px;\n  }\n"]);return _templateObject36=function(){return e},e}function _templateObject35(){var e=_taggedTemplateLiteral(["\n  padding: 3rem;\n"]);return _templateObject35=function(){return e},e}function _templateObject34(){var e=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"]);return _templateObject34=function(){return e},e}function _templateObject33(){var e=_taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 80%;\n  height: 100%;\n  margin-bottom: 10px;\n  margin: 0 auto;\n"]);return _templateObject33=function(){return e},e}function _templateObject32(){var e=_taggedTemplateLiteral(["\n  width: 100%;\n\n  @media only screen and (min-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 3rem;\n    width: 35%;\n  }\n"]);return _templateObject32=function(){return e},e}function _templateObject31(){var e=_taggedTemplateLiteral(["\n  background-image: url('http://www.vallisweekes.com/portfolio_assets/aboutme.jpg');\n  width: 100%;\n  /* margin-bottom: 10px; */\n  object-fit: cover;\n  @media only screen and (min-width: 768px) {\n    margin-bottom: 0;\n    width: 55%;\n  }\n"]);return _templateObject31=function(){return e},e}function _templateObject30(){var e=_taggedTemplateLiteral(["\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  height: 600px;\n  margin-bottom: 5rem;\n\n  padding-top: 2rem;\n  background-size: cover;\n  background-repeat: no-repeat;\n  @media only screen and (min-width: 768px) {\n    height: 600px;\n  }\n"]);return _templateObject30=function(){return e},e}function _templateObject29(){var e=_taggedTemplateLiteral(["\n  position: absolute;\n  top: 5px;\n  left: 10rem;\n  z-index: 300;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  font-size: 25px;\n  margin-left: 50px;\n  color: #fff;\n\n  :hover {\n    background-color: rgba(59, 59, 59, 0.7);\n    cursor: pointer;\n  }\n"]);return _templateObject29=function(){return e},e}function _templateObject28(){var e=_taggedTemplateLiteral(["\n  background-color: transparent;\n  transition: all 1s linear;\n  :hover {\n    background-color: rgba(33, 33, 33, 0.77);\n  }\n"]);return _templateObject28=function(){return e},e}function _templateObject27(){var e=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-decoration: none;\n  font-size: 20px;\n"]);return _templateObject27=function(){return e},e}function _templateObject26(){var e=_taggedTemplateLiteral(["\n    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');\n    height: 100vh;\n    width: 250px;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n\n    background-color: #111;\n    overflow-x: hidden;\n    padding-top: 60px;\n    font-family: 'Nunito', sans-serif;\n    color: #ffffff;\n    animation: "," 0.5s linear both;\n  "]);return _templateObject26=function(){return e},e}function _templateObject25(){var e=_taggedTemplateLiteral(["\nfrom {\nleft: 0\n}\nto {\n  left: -250px;\n}\n"]);return _templateObject25=function(){return e},e}function _templateObject24(){var e=_taggedTemplateLiteral(["\nfrom {\n\nleft: -250px\n}\nto {\n  left:0\n  \n}\n"]);return _templateObject24=function(){return e},e}function _templateObject23(){var e=_taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  /* border: 1px solid #000000;*/\n  border-radius: 50px;\n\n  margin-right: 0.75rem;\n  transition: all 0.2s ease-in;\n  cursor: pointer;\n\n  :hover {\n    background-color: #f3f5f7;\n  }\n"]);return _templateObject23=function(){return e},e}function _templateObject22(){var e=_taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n"]);return _templateObject22=function(){return e},e}function _templateObject21(){var e=_taggedTemplateLiteral(["\n    height: 100%;\n    width: 100%;\n    background-image: url(",");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    border-radius: 15px;\n    cursor: zoom-in;\n    transition: all 0.5s;\n\n    :hover {\n      transform: scale(1.1);\n      display: block;\n    }\n\n    ::before {\n      content: '';\n      display: none;\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      background-color: rgba(52, 73, 94, 0.75);\n    }\n  "]);return _templateObject21=function(){return e},e}function _templateObject20(){var e=_taggedTemplateLiteral([""]);return _templateObject20=function(){return e},e}function _templateObject19(){var e=_taggedTemplateLiteral(["\n  width: 400px;\n  max-width: 400px;\n  height: 240px;\n  margin-bottom: 4rem;\n"]);return _templateObject19=function(){return e},e}function _templateObject18(){var e=_taggedTemplateLiteral(["\n  position: relative;\n  height: unset;\n  background-color: rgb(250, 250, 250);\n  margin-top: 30px;\n"]);return _templateObject18=function(){return e},e}function _templateObject17(){var e=_taggedTemplateLiteral(["\n  width: 100%;\n\n  @media only screen and (min-width: 600px) {\n    width: 500px;\n  }\n"]);return _templateObject17=function(){return e},e}function _templateObject16(){var e=_taggedTemplateLiteral(["\n  margin-bottom: 1rem;\n"]);return _templateObject16=function(){return e},e}function _templateObject15(){var e=_taggedTemplateLiteral(["\n  width: 80%;\n  margin: 0 auto;\n  padding: 2rem;\n"]);return _templateObject15=function(){return e},e}function _templateObject14(){var e=_taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 40px;\n"]);return _templateObject14=function(){return e},e}function _templateObject13(){var e=_taggedTemplateLiteral(["\n  @media only screen and (min-width: 600px) {\n    width: 80%;\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    flex-direction: row;\n    margin-bottom: 30px;\n  }\n"]);return _templateObject13=function(){return e},e}function _templateObject12(){var e=_taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@100&display=swap');\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: auto;\n"]);return _templateObject12=function(){return e},e}function _templateObject11(){var e=_taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 10px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  background-color: #fafafa;\n"]);return _templateObject11=function(){return e},e}function _templateObject10(){var e=_taggedTemplateLiteral(["\n  /* display: inline-block; */\n  width: 300px;\n  margin: 0 auto;\n  font-size: 16px;\n  padding: 2px;\n  margin-top: 10px;\n  color: #828282;\n  border: 1px solid #828282;\n\n  @media only screen and (min-width: 600px) {\n    font-size: 25px;\n    width: 425px;\n  }\n"]);return _templateObject10=function(){return e},e}function _templateObject9(){var e=_taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@900&display=swap');\n\n  font-family: 'Raleway', sans-serif;\n  letter-spacing: 3;\n  font-size: 35px;\n  @media only screen and (min-width: 600px) {\n    font-size: 50px;\n    letter-spacing: 6;\n  }\n"]);return _templateObject9=function(){return e},e}function _templateObject8(){var e=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  animation: "," 1.5s ease-in both;\n  width: 400px;\n"]);return _templateObject8=function(){return e},e}function _templateObject7(){var e=_taggedTemplateLiteral(["\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  80% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -30%, 0);\n    transform: translate3d(0, -30%, 0);\n  }\n  100%{\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n"]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@100&display=swap');\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Source Sans Pro', sans-serif;\n  text-align: center;\n"]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  border-radius: 50px;\n  margin-left: 10px;\n  transition: all 0.2s linear;\n\n  :hover {\n    background-color: #f3f5f7;\n  }\n"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1rem 0 0 0;\n"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral(["\n  padding: 2rem;\n  font-size: 1.5rem;\n  font-weight: lighter;\n  font-family: 'Source Sans Pro', sans-serif;\n"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');\n  display: flex;\n  justify-content: space-between;\n  width: 300px;\n  margin-right: 2rem;\n  font-family: 'Nunito', sans-serif;\n"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral(["\n  display: flex;\n  width: 100px;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 100%;\n  height: 450px;\n  border-bottom: 2px solid rgb(234, 234, 234);\n\n  @media only screen and (min-width: 600px) {\n    height: 50vh;\n  }\n"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t=t||e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var HeaderWrapper=_styledComponents.default.header(_templateObject());exports.HeaderWrapper=HeaderWrapper;var Nav=_styledComponents.default.ul(_templateObject2());exports.Nav=Nav;var ProjectHeading=_styledComponents.default.section(_templateObject3());exports.ProjectHeading=ProjectHeading;var TopBarContainer=_styledComponents.default.div(_templateObject4());exports.TopBarContainer=TopBarContainer;var BurgerMenu=_styledComponents.default.div(_templateObject5());exports.BurgerMenu=BurgerMenu;var IntroWrapper=_styledComponents.default.div(_templateObject6());exports.IntroWrapper=IntroWrapper;var fadeInDown=(0,_styledComponents.keyframes)(_templateObject7()),IntroText=_styledComponents.default.div(_templateObject8(),fadeInDown);exports.IntroText=IntroText;var HeaderIntro=_styledComponents.default.div(_templateObject9());exports.HeaderIntro=HeaderIntro;var SubTextWrapper=_styledComponents.default.div(_templateObject10());exports.SubTextWrapper=SubTextWrapper;var StackHolder=_styledComponents.default.div(_templateObject11());exports.StackHolder=StackHolder;var ProjectsContainer=_styledComponents.default.section(_templateObject12());exports.ProjectsContainer=ProjectsContainer;var ProjectsWrapper=_styledComponents.default.section(_templateObject13());exports.ProjectsWrapper=ProjectsWrapper;var ProjectDetailWrapper=_styledComponents.default.div(_templateObject14());exports.ProjectDetailWrapper=ProjectDetailWrapper;var ProjectDetailInner=_styledComponents.default.div(_templateObject15());exports.ProjectDetailInner=ProjectDetailInner;var ProjectDetailHeader=_styledComponents.default.div(_templateObject16());exports.ProjectDetailHeader=ProjectDetailHeader;var ProjectDetailImage=_styledComponents.default.div(_templateObject17());exports.ProjectDetailImage=ProjectDetailImage;var CardContainer=_styledComponents.default.section(_templateObject18());exports.CardContainer=CardContainer;var Card=_styledComponents.default.div(_templateObject19());exports.Card=Card;var SideBar=_styledComponents.default.div(_templateObject20());exports.SideBar=SideBar;var ImageHolder=function(e){return _styledComponents.default.div(_templateObject21(),e.image)};exports.ImageHolder=ImageHolder;var SocialIconWrapper=_styledComponents.default.div(_templateObject22());exports.SocialIconWrapper=SocialIconWrapper;var IconHolder=_styledComponents.default.div(_templateObject23());exports.IconHolder=IconHolder;var slideropen=(0,_styledComponents.keyframes)(_templateObject24()),sliderclose=(0,_styledComponents.keyframes)(_templateObject25()),sideBarControl=function(e){return _styledComponents.default.div(_templateObject26(),e?slideropen:sliderclose)};exports.sideBarControl=sideBarControl;var LinkUl=_styledComponents.default.ul(_templateObject27());exports.LinkUl=LinkUl;var LinkItem=_styledComponents.default.li(_templateObject28());exports.LinkItem=LinkItem;var CloseButton=_styledComponents.default.li(_templateObject29());exports.CloseButton=CloseButton;var AboutWrapper=_styledComponents.default.div(_templateObject30());exports.AboutWrapper=AboutWrapper;var AboutMeRight=_styledComponents.default.div(_templateObject31());exports.AboutMeRight=AboutMeRight;var AboutMeLeft=_styledComponents.default.div(_templateObject32());exports.AboutMeLeft=AboutMeLeft;var ContactContainer=_styledComponents.default.div(_templateObject33());exports.ContactContainer=ContactContainer;var StyleForm=_styledComponents.default.div(_templateObject34());exports.StyleForm=StyleForm;var ContactFormHeading=_styledComponents.default.div(_templateObject35());exports.ContactFormHeading=ContactFormHeading;var Input=_styledComponents.default.input(_templateObject36());exports.Input=Input;var Label=_styledComponents.default.label(_templateObject37());exports.Label=Label;var TextAreaWrapper=_styledComponents.default.div(_templateObject38());exports.TextAreaWrapper=TextAreaWrapper;var Textarea=_styledComponents.default.textarea(_templateObject39());exports.Textarea=Textarea;var Button=_styledComponents.default.div(_templateObject40());exports.Button=Button;var Btn=_styledComponents.default.button(_templateObject41());exports.Btn=Btn;var SendBtn=(0,_styledComponents.default)(Btn)(_templateObject42());exports.SendBtn=SendBtn;var AboutMeBtn=(0,_styledComponents.default)(Btn)(_templateObject43());exports.AboutMeBtn=AboutMeBtn;var ThankYouBtn=(0,_styledComponents.default)(Btn)(_templateObject44());exports.ThankYouBtn=ThankYouBtn;var FooterWrapper=_styledComponents.default.footer(_templateObject45());exports.FooterWrapper=FooterWrapper;var FooterContent=_styledComponents.default.div(_templateObject46());exports.FooterContent=FooterContent;var FooterContentWrapper=_styledComponents.default.div(_templateObject47());exports.FooterContentWrapper=FooterContentWrapper;var FooterMenu=_styledComponents.default.ul(_templateObject48());exports.FooterMenu=FooterMenu;var AboutPageWrapper=_styledComponents.default.div(_templateObject49());exports.AboutPageWrapper=AboutPageWrapper;var AboutPageInner=_styledComponents.default.div(_templateObject50());exports.AboutPageInner=AboutPageInner;var AboutMePageLeft=_styledComponents.default.div(_templateObject51());exports.AboutMePageLeft=AboutMePageLeft;var AboutMePageRight=_styledComponents.default.div(_templateObject52());exports.AboutMePageRight=AboutMePageRight;var AboutMeIntro=_styledComponents.default.div(_templateObject53());exports.AboutMeIntro=AboutMeIntro;var AboutMeExpirience=_styledComponents.default.div(_templateObject54());exports.AboutMeExpirience=AboutMeExpirience;var AboutMeSkills=_styledComponents.default.div(_templateObject55());exports.AboutMeSkills=AboutMeSkills;var AboutMeEducation=_styledComponents.default.div(_templateObject56());exports.AboutMeEducation=AboutMeEducation;var slideUp=(0,_styledComponents.keyframes)(_templateObject57()),fadeOut=(0,_styledComponents.keyframes)(_templateObject58()),ModalClass=function(e){return _styledComponents.default.div(_templateObject59(),e?slideUp:fadeOut)};exports.ModalClass=ModalClass;
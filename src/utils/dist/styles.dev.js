"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexFix = exports.BackButton = exports.ModalClass = exports.AboutMeEducation = exports.AboutMeSkills = exports.AboutMeExpirience = exports.AboutMeIntro = exports.AboutMePageRight = exports.AboutMePageLeft = exports.AboutPageInner = exports.AboutPageWrapper = exports.FooterMenu = exports.FooterContentWrapper = exports.FooterContent = exports.FooterWrapper = exports.ThankYouBtn = exports.AboutMeBtn = exports.SendBtn = exports.Btn = exports.Button = exports.Textarea = exports.TextAreaWrapper = exports.Label = exports.Input = exports.ContactFormHeading = exports.StyleForm = exports.ContactContainer = exports.AboutMeLeft = exports.AboutMeRight = exports.AboutWrapper = exports.CloseButton = exports.LinkItem = exports.LinkUl = exports.sideBarControl = exports.IconHolder = exports.SocialIconWrapper = exports.Nav = exports.ImageHolder = exports.SideBar = exports.Card = exports.CardContainer = exports.ProjectDetailImage = exports.ProjectDetailHeader = exports.ProjectDetailInner = exports.ProjectDetailWrapper = exports.ProjectsWrapper = exports.ProjectsContainer = exports.StackHolder = exports.SubTextWrapper = exports.HeaderIntro = exports.IntroText = exports.IntroWrapper = exports.HeaderLogo = exports.BurgerMenu = exports.TopBarContainer = exports.ProjectHeading = exports.HeaderWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject62() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding-top: 20px;\n"]);

  _templateObject62 = function _templateObject62() {
    return data;
  };

  return data;
}

function _templateObject61() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n  margin-left: 30px;\n  cursor: pointer;\n\n  width: 40px;\n  height: 40px;\n  border-radius: 50px;\n  transition: all 1s linear;\n\n  :hover {\n    background-color: #f3f5f7;\n  }\n"]);

  _templateObject61 = function _templateObject61() {
    return data;
  };

  return data;
}

function _templateObject60() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    bottom: 0;\n    opacity: 0;\n    justify-content: space-evenly;\n    width: 300px;\n    height: 140px;\n    background-color: #ffffff;\n\n    -webkit-box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 20px 0px,\n      rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;\n    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 20px 0px,\n      rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;\n    animation: ", " 1s ease-in-out both;\n  "]);

  _templateObject60 = function _templateObject60() {
    return data;
  };

  return data;
}

function _templateObject59() {
  var data = _taggedTemplateLiteral(["\nfrom {\n  opacity: 1;\n\n}\nto {\n  opacity: 0;\n \n}\n"]);

  _templateObject59 = function _templateObject59() {
    return data;
  };

  return data;
}

function _templateObject58() {
  var data = _taggedTemplateLiteral(["\n0 {\n  opacity: 0;\nbottom: -15rem\n}\n\n50%{\n  opacity: 0;\n}\n70%{\n   opacity: 1;\n  bottom: 22rem\n}\n80%{\n   opacity: 1;\n  bottom: 20rem\n}\n\n90%{\n opacity: 1;\n  bottom: 21rem\n}\n100% {\n  opacity: 1;\n  bottom: 20rem\n}\n"]);

  _templateObject58 = function _templateObject58() {
    return data;
  };

  return data;
}

function _templateObject57() {
  var data = _taggedTemplateLiteral(["\n  padding: 2rem;\n  margin-bottom: 50px;\n"]);

  _templateObject57 = function _templateObject57() {
    return data;
  };

  return data;
}

function _templateObject56() {
  var data = _taggedTemplateLiteral(["\n  background-color: #ffffff;\n  padding: 2rem;\n"]);

  _templateObject56 = function _templateObject56() {
    return data;
  };

  return data;
}

function _templateObject55() {
  var data = _taggedTemplateLiteral(["\n  padding: 2rem;\n"]);

  _templateObject55 = function _templateObject55() {
    return data;
  };

  return data;
}

function _templateObject54() {
  var data = _taggedTemplateLiteral(["\n  padding: 2rem;\n  background-color: #ffffff;\n"]);

  _templateObject54 = function _templateObject54() {
    return data;
  };

  return data;
}

function _templateObject53() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject53 = function _templateObject53() {
    return data;
  };

  return data;
}

function _templateObject52() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 10px;\n  width: 100%;\n\n  @media only screen and (min-width: 768px) {\n    width: 300px;\n  }\n"]);

  _templateObject52 = function _templateObject52() {
    return data;
  };

  return data;
}

function _templateObject51() {
  var data = _taggedTemplateLiteral(["\n  width: 70%;\n  margin: 0 auto;\n\n  @media only screen and (min-width: 768px) {\n    display: flex;\n  }\n"]);

  _templateObject51 = function _templateObject51() {
    return data;
  };

  return data;
}

function _templateObject50() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject50 = function _templateObject50() {
    return data;
  };

  return data;
}

function _templateObject49() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');\n  display: flex;\n  justify-content: space-evenly;\n  width: 200px;\n  margin-right: 2rem;\n  font-family: 'Nunito', sans-serif;\n  font-size: 7px;\n  @media only screen and (min-width: 600px) {\n    font-size: 1rem;\n    width: 300px;\n  }\n"]);

  _templateObject49 = function _templateObject49() {
    return data;
  };

  return data;
}

function _templateObject48() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 20px;\n  font-size: 8px;\n\n  @media only screen and (min-width: 600px) {\n    font-size: 16px;\n  }\n"]);

  _templateObject48 = function _templateObject48() {
    return data;
  };

  return data;
}

function _templateObject47() {
  var data = _taggedTemplateLiteral(["\n  width: 90%;\n  margin: 0 auto;\n"]);

  _templateObject47 = function _templateObject47() {
    return data;
  };

  return data;
}

function _templateObject46() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  border-top: 1px solid rgb(234, 234, 234);\n  height: 60px;\n  background-color: #fafafa;\n"]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = _taggedTemplateLiteral(["\n  background-color: #000000;\n  color: #ffffff;\n  font-size: 1rem;\n"]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = _taggedTemplateLiteral(["\n  background-color: #000000;\n  color: #ffffff;\n  font-size: 1rem;\n"]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = _taggedTemplateLiteral(["\n  background-color: black;\n  color: white;\n"]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 5px;\n  height: 40px;\n  width: 100px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  resize: none;\n"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteral(["\n  height: 200px;\n  margin-top: 10px;\n"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  padding-bottom: 5px;\n"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["\n  height: 40px;\n  width: 100%;\n  ::placeholder {\n    padding: 5px;\n  }\n"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n  padding: 3rem;\n"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 80%;\n  height: 100%;\n  margin-bottom: 10px;\n  margin: 0 auto;\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n\n  @media only screen and (min-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-left: 3rem;\n    width: 35%;\n  }\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n  background-image: url('http://www.vallisweekes.com/portfolio_assets/aboutme.jpg');\n  width: 100%;\n  /* margin-bottom: 10px; */\n  object-fit: cover;\n  @media only screen and (min-width: 768px) {\n    margin-bottom: 0;\n    width: 55%;\n  }\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  height: 600px;\n  margin-bottom: 5rem;\n\n  padding-top: 2rem;\n  background-size: cover;\n  background-repeat: no-repeat;\n  @media only screen and (min-width: 768px) {\n    height: 600px;\n  }\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 5px;\n  left: 10rem;\n  z-index: 300;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  font-size: 25px;\n  margin-left: 50px;\n  color: #fff;\n\n  :hover {\n    background-color: rgba(59, 59, 59, 0.7);\n    cursor: pointer;\n  }\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  margin-bottom: 5px;\n  background-color: transparent;\n  transition: all 1s linear;\n  :hover {\n    background-color: rgba(33, 33, 33, 0.77);\n  }\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@800&family=Kanit:wght@800&display=swap');\n  display: flex;\n  flex-direction: column;\n  /* align-items: center; */\n  margin-left: 2rem;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 2rem;\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n    height: 100vh;\n    width: 250px;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n\n    background-color: #111;\n    overflow-x: hidden;\n    padding-top: 60px;\n    font-family: 'Kanit', sans-serif;\n\n    color: #ffffff;\n    animation: ", " 0.5s linear both;\n  "]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\nfrom {\nleft: 0\n}\nto {\n  left: -250px;\n}\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\nfrom {\n\nleft: -250px\n}\nto {\n  left:0\n  \n}\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  /* border: 1px solid #000000;*/\n  border-radius: 50px;\n\n  margin-right: 0.75rem;\n  transition: all 0.2s ease-in;\n  cursor: pointer;\n\n  :hover {\n    background-color: #f3f5f7;\n  }\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');\n  display: none;\n  justify-content: space-between;\n  width: 350px;\n  margin-left: 6rem;\n  font-family: 'Nunito', sans-serif;\n\n  @media only screen and (min-width: 768px) {\n    display: flex;\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n    height: 100%;\n    width: 100%;\n    background-image: url(", ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    border-radius: 15px;\n    cursor: zoom-in;\n    transition: all 0.5s;\n\n    :hover {\n      transform: scale(1.1);\n      display: block;\n    }\n\n    ::before {\n      content: '';\n      display: none;\n      height: 100%;\n      width: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      background-color: rgba(52, 73, 94, 0.75);\n    }\n  "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  width: 400px;\n  max-width: 400px;\n  height: 240px;\n  margin-bottom: 4rem;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  height: unset;\n  background-color: rgb(250, 250, 250);\n  margin-top: 30px;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n\n  @media only screen and (min-width: 600px) {\n    width: 500px;\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 1rem;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 0 auto;\n  padding: 2rem;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 40px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  @media only screen and (min-width: 600px) {\n    width: 80%;\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    flex-direction: row;\n    margin-bottom: 30px;\n  }\n\n  @media only screen and (min-width: 1200px) {\n    width: 60%;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    flex-direction: row;\n    margin-bottom: 30px;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@100&display=swap');\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: auto;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 10px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  background-color: #fafafa;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  /* display: inline-block; */\n  width: 300px;\n  margin: 0 auto;\n  font-size: 16px;\n  padding: 2px;\n  margin-top: 10px;\n  color: #828282;\n  border: 1px solid #828282;\n\n  @media only screen and (min-width: 600px) {\n    font-size: 25px;\n    width: 425px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@900&display=swap');\n\n  font-family: 'Raleway', sans-serif;\n  letter-spacing: 3;\n  font-size: 35px;\n  @media only screen and (min-width: 600px) {\n    font-size: 50px;\n    letter-spacing: 6;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  animation: ", " 1.5s ease-in both;\n  width: 400px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n  80% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -30%, 0);\n    transform: translate3d(0, -30%, 0);\n  }\n  100%{\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@100&display=swap');\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Source Sans Pro', sans-serif;\n  text-align: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  border-radius: 50px;\n  margin-left: 10px;\n  transition: all 0.2s linear;\n\n  :hover {\n    background-color: #f3f5f7;\n  }\n\n  @media only screen and (min-width: 768px) {\n    display: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1rem 0 0 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 2rem;\n  font-size: 1.5rem;\n  font-weight: lighter;\n  font-family: 'Source Sans Pro', sans-serif;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100px;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 100%;\n  height: 450px;\n  border-bottom: 2px solid\xA0rgb(234, 234, 234);\n\n  @media only screen and (min-width: 600px) {\n    height: 50vh;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderWrapper = _styledComponents["default"].header(_templateObject());

exports.HeaderWrapper = HeaderWrapper;

var ProjectHeading = _styledComponents["default"].section(_templateObject2());

exports.ProjectHeading = ProjectHeading;

var TopBarContainer = _styledComponents["default"].div(_templateObject3());

exports.TopBarContainer = TopBarContainer;

var BurgerMenu = _styledComponents["default"].div(_templateObject4());

exports.BurgerMenu = BurgerMenu;

var HeaderLogo = _styledComponents["default"].div(_templateObject5());

exports.HeaderLogo = HeaderLogo;

var IntroWrapper = _styledComponents["default"].div(_templateObject6());

exports.IntroWrapper = IntroWrapper;
var fadeInDown = (0, _styledComponents.keyframes)(_templateObject7()); // Intro Text

var IntroText = _styledComponents["default"].div(_templateObject8(), fadeInDown);

exports.IntroText = IntroText;

var HeaderIntro = _styledComponents["default"].div(_templateObject9());

exports.HeaderIntro = HeaderIntro;

var SubTextWrapper = _styledComponents["default"].div(_templateObject10());

exports.SubTextWrapper = SubTextWrapper;

var StackHolder = _styledComponents["default"].div(_templateObject11());

exports.StackHolder = StackHolder;

var ProjectsContainer = _styledComponents["default"].section(_templateObject12());

exports.ProjectsContainer = ProjectsContainer;

var ProjectsWrapper = _styledComponents["default"].section(_templateObject13());

exports.ProjectsWrapper = ProjectsWrapper;

var ProjectDetailWrapper = _styledComponents["default"].div(_templateObject14());

exports.ProjectDetailWrapper = ProjectDetailWrapper;

var ProjectDetailInner = _styledComponents["default"].div(_templateObject15());

exports.ProjectDetailInner = ProjectDetailInner;

var ProjectDetailHeader = _styledComponents["default"].div(_templateObject16());

exports.ProjectDetailHeader = ProjectDetailHeader;

var ProjectDetailImage = _styledComponents["default"].div(_templateObject17());

exports.ProjectDetailImage = ProjectDetailImage;

var CardContainer = _styledComponents["default"].section(_templateObject18());

exports.CardContainer = CardContainer;

var Card = _styledComponents["default"].div(_templateObject19());

exports.Card = Card;

var SideBar = _styledComponents["default"].div(_templateObject20());

exports.SideBar = SideBar;

var ImageHolder = function ImageHolder(props) {
  return _styledComponents["default"].div(_templateObject21(), props.image);
};

exports.ImageHolder = ImageHolder;

var Nav = _styledComponents["default"].ul(_templateObject22());

exports.Nav = Nav;

var SocialIconWrapper = _styledComponents["default"].div(_templateObject23());

exports.SocialIconWrapper = SocialIconWrapper;

var IconHolder = _styledComponents["default"].div(_templateObject24()); //Slider Open Animation


exports.IconHolder = IconHolder;
var slideropen = (0, _styledComponents.keyframes)(_templateObject25());
var sliderclose = (0, _styledComponents.keyframes)(_templateObject26()); //Sidebar

var sideBarControl = function sideBarControl(showSideBar) {
  return _styledComponents["default"].div(_templateObject27(), showSideBar ? slideropen : sliderclose);
};

exports.sideBarControl = sideBarControl;

var LinkUl = _styledComponents["default"].ul(_templateObject28());

exports.LinkUl = LinkUl;

var LinkItem = _styledComponents["default"].li(_templateObject29());

exports.LinkItem = LinkItem;

var CloseButton = _styledComponents["default"].li(_templateObject30()); //Homepage About Me Section


exports.CloseButton = CloseButton;

var AboutWrapper = _styledComponents["default"].div(_templateObject31());

exports.AboutWrapper = AboutWrapper;

var AboutMeRight = _styledComponents["default"].div(_templateObject32());

exports.AboutMeRight = AboutMeRight;

var AboutMeLeft = _styledComponents["default"].div(_templateObject33()); // Homepage about me section end
//Form


exports.AboutMeLeft = AboutMeLeft;

var ContactContainer = _styledComponents["default"].div(_templateObject34());

exports.ContactContainer = ContactContainer;

var StyleForm = _styledComponents["default"].div(_templateObject35());

exports.StyleForm = StyleForm;

var ContactFormHeading = _styledComponents["default"].div(_templateObject36());

exports.ContactFormHeading = ContactFormHeading;

var Input = _styledComponents["default"].input(_templateObject37()); // const NameField = styled.div`
//   display: flex;
// `;


exports.Input = Input;

var Label = _styledComponents["default"].label(_templateObject38());

exports.Label = Label;

var TextAreaWrapper = _styledComponents["default"].div(_templateObject39());

exports.TextAreaWrapper = TextAreaWrapper;

var Textarea = _styledComponents["default"].textarea(_templateObject40());

exports.Textarea = Textarea;

var Button = _styledComponents["default"].div(_templateObject41());

exports.Button = Button;

var Btn = _styledComponents["default"].button(_templateObject42());

exports.Btn = Btn;
var SendBtn = (0, _styledComponents["default"])(Btn)(_templateObject43());
exports.SendBtn = SendBtn;
var AboutMeBtn = (0, _styledComponents["default"])(Btn)(_templateObject44());
exports.AboutMeBtn = AboutMeBtn;
var ThankYouBtn = (0, _styledComponents["default"])(Btn)(_templateObject45()); //Footer

exports.ThankYouBtn = ThankYouBtn;

var FooterWrapper = _styledComponents["default"].footer(_templateObject46());

exports.FooterWrapper = FooterWrapper;

var FooterContent = _styledComponents["default"].div(_templateObject47());

exports.FooterContent = FooterContent;

var FooterContentWrapper = _styledComponents["default"].div(_templateObject48());

exports.FooterContentWrapper = FooterContentWrapper;

var FooterMenu = _styledComponents["default"].ul(_templateObject49()); //About Me page
// About Me Main Page


exports.FooterMenu = FooterMenu;

var AboutPageWrapper = _styledComponents["default"].div(_templateObject50());

exports.AboutPageWrapper = AboutPageWrapper;

var AboutPageInner = _styledComponents["default"].div(_templateObject51());

exports.AboutPageInner = AboutPageInner;

var AboutMePageLeft = _styledComponents["default"].div(_templateObject52());

exports.AboutMePageLeft = AboutMePageLeft;

var AboutMePageRight = _styledComponents["default"].div(_templateObject53());

exports.AboutMePageRight = AboutMePageRight;

var AboutMeIntro = _styledComponents["default"].div(_templateObject54());

exports.AboutMeIntro = AboutMeIntro;

var AboutMeExpirience = _styledComponents["default"].div(_templateObject55());

exports.AboutMeExpirience = AboutMeExpirience;

var AboutMeSkills = _styledComponents["default"].div(_templateObject56());

exports.AboutMeSkills = AboutMeSkills;

var AboutMeEducation = _styledComponents["default"].div(_templateObject57());

exports.AboutMeEducation = AboutMeEducation;
var slideUp = (0, _styledComponents.keyframes)(_templateObject58());
var fadeOut = (0, _styledComponents.keyframes)(_templateObject59());

var ModalClass = function ModalClass(status) {
  return _styledComponents["default"].div(_templateObject60(), status ? slideUp : fadeOut);
};

exports.ModalClass = ModalClass;

var BackButton = _styledComponents["default"].div(_templateObject61());

exports.BackButton = BackButton;
var FlexFix = (0, _styledComponents["default"])(AboutPageInner)(_templateObject62());
exports.FlexFix = FlexFix;
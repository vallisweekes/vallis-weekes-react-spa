"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendBtn = exports.Btn = exports.Button = exports.Textarea = exports.TextAreaWrapper = exports.Label = exports.Input = exports.ContactFormHeading = exports.StyleForm = exports.ContactContainer = exports.AboutWrapper = exports.CloseButton = exports.LinkItems = exports.SideBarContainer = exports.IconHolder = exports.SocialIconWrapper = exports.ImageHolder = exports.SideBar = exports.Card = exports.CardContainer = exports.ProjectsWrapper = exports.ProjectsContainer = exports.StackHolder = exports.HeaderIntro = exports.IntroText = exports.IntroWrapper = exports.BurgerMenu = exports.TopBarContainer = exports.ProjectHeading = exports.HeaderWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n  background-color: black;\n  color: white;\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 5px;\n  height: 40px;\n  width: 100px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  resize: none;\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  height: 200px;\n  margin-top: 10px;\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  padding-bottom: 5px;\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  height: 40px;\n  width: 100%;\n  ::placeholder {\n    padding: 5px;\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  padding: 3rem;\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 80%;\n  margin: 0 auto;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  height: 300px;\n  margin-bottom: 5rem;\n  background-image: url('https://portfolio-vw.s3.eu-west-2.amazonaws.com/about-me.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  font-size: 25px;\n  margin-left: 50px;\n  :hover {\n    background-color: grey;\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-decoration: none;\n  font-size: 20px;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');\n  height: 100%;\n  width: 250px;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  padding-top: 60px;\n  font-family: 'Nunito', sans-serif;\n  color: #ffffff;\n  transition: 1s;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  /* border: 1px solid #000000;*/\n  border-radius: 50px;\n\n  margin-right: 0.75rem;\n  transition: all 0.2s ease-in;\n  cursor: pointer;\n\n  :hover {\n    background-color: #f3f5f7;\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    height: 100%;\n    width: 100%;\n    background-image: url(", ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    border-radius: 15px;\n\n    cursor: zoom-in;\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  width: 400px;\n  max-width: 400px;\n  height: 240px;\n\n  margin-bottom: 4rem;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  height: unset;\n  background-color: rgb(250, 250, 250);\n  margin-top: 30px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  @media only screen and (min-width: 600px) {\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    flex-direction: row;\n    margin-bottom: 30px;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@100&display=swap');\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: auto;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 10px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50px;\n  background-color: #fafafa;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@900&display=swap');\n\n  font-family: 'Raleway', sans-serif;\n  letter-spacing: 3;\n  font-size: 48px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  animation: ", ";\n  width: 400px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@100&display=swap');\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Source Sans Pro', sans-serif;\n  text-align: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  border-radius: 50px;\n  margin-left: 10px;\n  transition: all 0.2s ease-in;\n\n  :hover {\n    background-color: #f3f5f7;\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100px;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 100%;\n  height: 450px;\n  border-bottom: 2px solid\xA0rgb(234, 234, 234);\n\n  @media only screen and (min-width: 600px) {\n    height: 70vh;\n  }\n"]);

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

var IntroWrapper = _styledComponents["default"].div(_templateObject5());

exports.IntroWrapper = IntroWrapper;
var fadeInDown = (0, _styledComponents.keyframes)(_templateObject6()); // Intro Text

var IntroText = _styledComponents["default"].div(_templateObject7(), fadeInDown);

exports.IntroText = IntroText;

var HeaderIntro = _styledComponents["default"].h1(_templateObject8());

exports.HeaderIntro = HeaderIntro;

var StackHolder = _styledComponents["default"].div(_templateObject9());

exports.StackHolder = StackHolder;

var ProjectsContainer = _styledComponents["default"].section(_templateObject10());

exports.ProjectsContainer = ProjectsContainer;

var ProjectsWrapper = _styledComponents["default"].section(_templateObject11());

exports.ProjectsWrapper = ProjectsWrapper;

var CardContainer = _styledComponents["default"].section(_templateObject12());

exports.CardContainer = CardContainer;

var Card = _styledComponents["default"].div(_templateObject13());

exports.Card = Card;

var SideBar = _styledComponents["default"].div(_templateObject14());

exports.SideBar = SideBar;

var ImageHolder = function ImageHolder(props) {
  return _styledComponents["default"].div(_templateObject15(), props.image);
};

exports.ImageHolder = ImageHolder;

var SocialIconWrapper = _styledComponents["default"].div(_templateObject16());

exports.SocialIconWrapper = SocialIconWrapper;

var IconHolder = _styledComponents["default"].div(_templateObject17()); //Sidebar


exports.IconHolder = IconHolder;

var SideBarContainer = _styledComponents["default"].div(_templateObject18());

exports.SideBarContainer = SideBarContainer;

var LinkItems = _styledComponents["default"].ul(_templateObject19());

exports.LinkItems = LinkItems;

var CloseButton = _styledComponents["default"].li(_templateObject20()); //About Me Page


exports.CloseButton = CloseButton;

var AboutWrapper = _styledComponents["default"].div(_templateObject21()); //Form


exports.AboutWrapper = AboutWrapper;

var ContactContainer = _styledComponents["default"].div(_templateObject22());

exports.ContactContainer = ContactContainer;

var StyleForm = _styledComponents["default"].div(_templateObject23());

exports.StyleForm = StyleForm;

var ContactFormHeading = _styledComponents["default"].div(_templateObject24());

exports.ContactFormHeading = ContactFormHeading;

var Input = _styledComponents["default"].input(_templateObject25()); // const NameField = styled.div`
//   display: flex;
// `;


exports.Input = Input;

var Label = _styledComponents["default"].label(_templateObject26());

exports.Label = Label;

var TextAreaWrapper = _styledComponents["default"].div(_templateObject27());

exports.TextAreaWrapper = TextAreaWrapper;

var Textarea = _styledComponents["default"].textarea(_templateObject28());

exports.Textarea = Textarea;

var Button = _styledComponents["default"].div(_templateObject29());

exports.Button = Button;

var Btn = _styledComponents["default"].button(_templateObject30());

exports.Btn = Btn;
var SendBtn = (0, _styledComponents["default"])(Btn)(_templateObject31());
exports.SendBtn = SendBtn;
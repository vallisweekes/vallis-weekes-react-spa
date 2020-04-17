"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = exports.CardContainer = exports.ProjectsWrapper = exports.ProjectsContainer = exports.IntroText = exports.StackHolder = exports.IntroWrapper = exports.HeaderWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  width: 400px;\n  max-width: 400px;\n  height: 240px;\n  margin-right: 4rem;\n  margin-bottom: 4rem;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  height: unset;\n  background-color: rgb(250, 250, 250);\n  margin-top: 30px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  @media only screen and (min-width: 600px) {\n    width: 80%;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    flex-direction: row;\n    margin-bottom: 30px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@100&display=swap');\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: auto;\n  background-color: #fbfbfb;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 10px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  background-color: #fafafa;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@100&display=swap');\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Source Sans Pro', sans-serif;\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100px;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: 100%;\n  height: 50vh;\n  border-bottom: 2px solid\xA0rgb(234, 234, 234);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderWrapper = _styledComponents["default"].header(_templateObject());

exports.HeaderWrapper = HeaderWrapper;

var IntroWrapper = _styledComponents["default"].div(_templateObject2());

exports.IntroWrapper = IntroWrapper;

var StackHolder = _styledComponents["default"].div(_templateObject3());

exports.StackHolder = StackHolder;

var IntroText = _styledComponents["default"].div(_templateObject4());

exports.IntroText = IntroText;

var ProjectsContainer = _styledComponents["default"].section(_templateObject5());

exports.ProjectsContainer = ProjectsContainer;

var ProjectsWrapper = _styledComponents["default"].section(_templateObject6());

exports.ProjectsWrapper = ProjectsWrapper;

var CardContainer = _styledComponents["default"].section(_templateObject7());

exports.CardContainer = CardContainer;

var Card = _styledComponents["default"].div(_templateObject8());

exports.Card = Card;
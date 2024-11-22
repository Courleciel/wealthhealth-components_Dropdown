"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Dropdown.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/Dropdown.jsx

var Dropdown = function Dropdown(_ref) {
  var label = _ref.label,
    options = _ref.options,
    _onChange = _ref.onChange,
    value = _ref.value;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/_react["default"].createElement("label", null, label), /*#__PURE__*/_react["default"].createElement("select", {
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "",
    disabled: true
  }, "Select ", label), options.map(function (option, index) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: index,
      value: option
    }, option);
  })));
};
var _default = exports["default"] = Dropdown;
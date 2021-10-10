"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var chalk_1 = __importDefault(require("chalk"));
var ava_1 = __importDefault(require("ava"));
var ink_testing_library_1 = require("ink-testing-library");
var ui_1 = __importDefault(require("./ui"));
(0, ava_1["default"])('greet unknown user', function (t) {
    var lastFrame = (0, ink_testing_library_1.render)(react_1["default"].createElement(ui_1["default"], null)).lastFrame;
    t.is(lastFrame(), (0, chalk_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Hello, {green Stranger}"], ["Hello, {green Stranger}"]))));
});
(0, ava_1["default"])('greet user with a name', function (t) {
    var lastFrame = (0, ink_testing_library_1.render)(react_1["default"].createElement(ui_1["default"], { name: "Jane" })).lastFrame;
    t.is(lastFrame(), (0, chalk_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Hello, {green Jane}"], ["Hello, {green Jane}"]))));
});
var templateObject_1, templateObject_2;

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var ink_1 = require("ink");
var react_1 = __importStar(require("react"));
var generator_1 = require("./others/generator");
// @ts-ignore
var Row = function (props) {
    var setData = function () {
        var token = props.obj.getModifiedKey("test@ultron.io").token;
        var finalOtp = (0, generator_1.genetateFinal)(token);
        return finalOtp;
    };
    var _a = (0, react_1.useState)(props.account), account = _a[0], setaccount = _a[1];
    var _b = (0, react_1.useState)(0), counter = _b[0], setCounter = _b[1];
    var _c = (0, react_1.useState)(setData()), otp = _c[0], setotp = _c[1];
    (0, react_1.useEffect)(function () {
        var timer = setInterval(function () {
            var unixTime = Math.floor(Date.now() / 1000);
            setCounter(30 - (unixTime % 30));
            if (counter === 0) {
                setotp(setData());
            }
        }, 1000);
        return function () {
            clearInterval(timer);
        };
    }, []);
    return (react_1["default"].createElement(ink_1.Box, { borderStyle: "round", borderColor: "green", margin: 1, width: 60, padding: 1 },
        react_1["default"].createElement(ink_1.Text, null,
            "Account: ",
            account.user,
            " ",
            react_1["default"].createElement(ink_1.Newline, null),
            "Associate UserName: ",
            account.associateAccount,
            " ",
            react_1["default"].createElement(ink_1.Newline, null),
            "Token OTP: ",
            otp,
            " ",
            react_1["default"].createElement(ink_1.Newline, null),
            "Life:Span : ",
            counter)));
};
exports["default"] = Row;

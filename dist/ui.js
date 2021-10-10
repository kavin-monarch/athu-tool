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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var ink_1 = require("ink");
var data_1 = require("./others/data");
var helper_1 = require("./others/helper");
var Row_1 = __importDefault(require("./Row"));
var os_1 = __importDefault(require("os"));
var data = [];
var App = function (_a) {
    var _b = _a.name, name = _b === void 0 ? "Stnger" : _b;
    var userData = new data_1.ModifiedHolder();
    var userName = os_1["default"].userInfo().username;
    // key sync helper
    data_1.rawKeysList.forEach(function (key) {
        userData.pushModifiedKeys((0, helper_1.withOutSpacesUpper)(key));
    });
    userData.getModifiedKeys().forEach(function (account) {
        data.push(account);
    });
    var _c = (0, react_1.useState)(data), accountData = _c[0], setaccountData = _c[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(ink_1.Text, null,
            "Hello, ",
            react_1["default"].createElement(ink_1.Text, { color: "green" }, userName)),
        accountData.map(function (data, index) {
            return react_1["default"].createElement(Row_1["default"], { key: index, account: data, obj: userData });
        })));
};
module.exports = App;
exports["default"] = App;

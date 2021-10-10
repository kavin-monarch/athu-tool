"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ink_table_1 = __importDefault(require("ink-table"));
const react_1 = __importDefault(require("react"));
const data = [
    {
        name: 'Sosa Saunders',
        gender: 'male',
        age: 17,
        email: 'sosa.saunders@mail.com',
        phone: '+1 (809) 435-2786',
    }
];
// @ts-ignore
const TableData = ({ account }) => {
    console.log(account);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_table_1.default, { data: data })));
};
module.exports = TableData;
exports.default = TableData;

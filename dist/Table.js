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
Object.defineProperty(exports, "__esModule", { value: true });
const ink_table_1 = __importDefault(require("ink-table"));
const react_1 = __importStar(require("react"));
const data = [
    {
        refName: "auth",
        token: "2geo 4ayo dyy5 a4tf 7l6a 7xrv jeqr qrfy ",
        account: "test@ultron.io",
    }
];
// @ts-ignore
const TableRow = (props) => {
    const [account, setaccount] = (0, react_1.useState)(props.accounts);
    console.log(account);
    return (react_1.default.createElement(ink_table_1.default, { data: [] }));
};
exports.default = TableRow;

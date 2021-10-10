"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.genetateFinal = void 0;
var crypto_1 = __importDefault(require("crypto"));
var decode_1 = require("./decode");
var generateInitial = function (token, counter) {
    var decodedToken = decode_1.dc.caller(token);
    var buffer = Buffer.alloc(8);
    for (var i = 0; i < 8; i++) {
        buffer[8 - (i + 1)] = counter & 0xff;
        counter = counter >> 8;
    }
    var algoHash = crypto_1["default"].createHmac('sha1', Buffer.from(decodedToken));
    algoHash.update(buffer);
    var algoHashResult = algoHash.digest();
    var code = headTruncate(algoHashResult);
    /// Generate time based otp with recon-ng method of 10^6 time 
    // to get last 6 digit from the extracted 31 bytes
    return code % Math.pow(10, 6);
};
// @ts-ignore
var headTruncate = function (hmacValue) {
    var offset = hmacValue[hmacValue.length - 1] & 0xf;
    return (((hmacValue[offset] & 0x7f) << 24) |
        ((hmacValue[offset + 1] & 0xff) << 16) |
        ((hmacValue[offset + 2] & 0xff) << 8) |
        (hmacValue[offset + 3] & 0xff));
};
var genetateFinal = function (token) {
    var counter = Math.floor(Date.now() / 30000);
    return generateInitial(token, counter);
};
exports.genetateFinal = genetateFinal;

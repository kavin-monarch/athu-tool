"use strict";
exports.__esModule = true;
exports.withOutSpacesUpper = void 0;
var withOutSpacesUpper = function (key) {
    return {
        user: key.userName,
        token: key.token.replace(/\s/g, "").toUpperCase(),
        associateAccount: key.account
    };
};
exports.withOutSpacesUpper = withOutSpacesUpper;

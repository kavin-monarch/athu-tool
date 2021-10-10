"use strict";
exports.__esModule = true;
exports.rawKeysList = exports.ModifiedHolder = void 0;
var ModifiedHolder = /** @class */ (function () {
    function ModifiedHolder() {
        var _this = this;
        this.__pattern = {
            "common": /^[A-Z2-7=]+$/
        };
        this.__modifiedKeys = [];
        this.getModifiedKey = function (data) {
            var result = _this.__modifiedKeys.filter(function (value) {
                if (value.associateAccount === data) {
                    return value;
                }
                return;
            });
            return result[0];
        };
        this.pushModifiedKeys = function (toSetData) {
            _this.__modifiedKeys.push(toSetData);
        };
        this.getModifiedKeys = function () {
            return _this.__modifiedKeys;
        };
    }
    ModifiedHolder.prototype.getPattern = function (type) {
        return this.__pattern[type];
    };
    return ModifiedHolder;
}());
exports.ModifiedHolder = ModifiedHolder;
exports.rawKeysList = [
    {
        userName: "ultron",
        token: "qn5v nhbg pmrr bytj c3sm omsf purf ddjj",
        account: "test@ultron.io"
    },
];

"use strict";
exports.__esModule = true;
var formatClearData = function (obj, opt) {
    var spaceStrInit = false;
    var nullStrInit = false;
    if (opt) {
        var spaceStr = opt.spaceStr, nullStr = opt.nullStr;
        if (spaceStr)
            spaceStrInit = spaceStr;
        if (nullStr)
            nullStrInit = nullStr;
    }
    Object.keys(obj).forEach(function (key) {
        if (obj[key] === undefined)
            delete obj[key];
        if (spaceStrInit && obj[key] === '')
            delete obj[key];
        if (nullStrInit && obj[key] === null)
            delete obj[key];
    });
    return obj;
};
exports["default"] = formatClearData;
//# sourceMappingURL=formatCleanData.js.map
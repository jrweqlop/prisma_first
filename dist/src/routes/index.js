"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get('/', function (req, res) {
    res.render('index', { pageTitle: 'start home page' });
});
exports["default"] = router;
//# sourceMappingURL=index.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// @ts-ignore
var express_1 = __importDefault(require("express"));
// @ts-ignore
var body_parser_1 = __importDefault(require("body-parser"));
require("./db/table");
var path_1 = __importDefault(require("path"));
var index_1 = __importDefault(require("./routes/member/index"));
var librarian_1 = __importDefault(require("./routes/librarian"));
var book_1 = __importDefault(require("./routes/book"));
var borrow_book_1 = __importDefault(require("./routes/borrow_book"));
var borrow_detail_1 = __importDefault(require("./routes/borrow_detail"));
var return_book_1 = __importDefault(require("./routes/return_book"));
var morgan_1 = __importDefault(require("morgan"));
require('dotenv').config();
var base = '/book_system';
var app = (0, express_1["default"])();
app.use(body_parser_1["default"].json());
app.use(body_parser_1["default"].urlencoded({ extended: true }));
app.use((0, morgan_1["default"])("dev"));
app.use(express_1["default"].json());
app.use("".concat(base, "/api/v1/member"), index_1["default"]);
app.use("".concat(base, "/api/v1/librarian"), librarian_1["default"]);
app.use("".concat(base, "/api/v1/book"), book_1["default"]);
app.use("".concat(base, "/api/v1/borrow_book"), borrow_book_1["default"]);
app.use("".concat(base, "/api/v1/borrow_detail"), borrow_detail_1["default"]);
app.use("".concat(base, "/api/v1/return_book"), return_book_1["default"]);
//
app.get('/', function (req, res) {
    // res.send("SYSTEM LIBRARY");
    res.sendFile(path_1["default"].join(__dirname, 'main', 'index.html'));
});
app.get('/name/:name', function (req, res) {
    res.send(" Hello " + req.params.name);
});
var port = process.env.PORT_CONFIG || 8088;
var start = app.listen(port, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log("connect");
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=app.js.map
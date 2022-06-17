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
exports.__esModule = true;
exports.Insert_Return_book = exports.Search_Return_book = exports.Get_Return_book = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var Get_Return_book = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.return_book.findMany()];
            case 1:
                result = _a.sent();
                res.status(200).json({
                    code: 2000,
                    message: 'Success',
                    data: result
                });
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                return [2 /*return*/, res.status(500).json({
                        code: 5000,
                        message: e_1.message
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.Get_Return_book = Get_Return_book;
var Search_Return_book = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var BorrowDetail_ID, result, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                BorrowDetail_ID = req.params.BorrowDetail_ID;
                if (BorrowDetail_ID === null) {
                    return [2 /*return*/, res.status(400).json({
                            code: 400,
                            message: 'Bad Request'
                        })];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.return_book.findFirst({ where: { BorrowDetail_ID: BorrowDetail_ID } })];
            case 2:
                result = _a.sent();
                if (result === null) {
                    return [2 /*return*/, res.status(404).json({
                            code: 4040,
                            message: 'Not Found'
                        })];
                }
                else {
                    return [2 /*return*/, res.status(200).json({
                            code: 2000,
                            message: 'Success',
                            data: result
                        })];
                }
                return [3 /*break*/, 4];
            case 3:
                e_2 = _a.sent();
                return [2 /*return*/, res.status(500).json({
                        code: 5000,
                        message: e_2.message
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.Search_Return_book = Search_Return_book;
var Insert_Return_book = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, Return_Date, BorrowDetail_ID, Member_ID, Librarian_ID, values, insertReturnBook, e_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, Return_Date = _a.Return_Date, BorrowDetail_ID = _a.BorrowDetail_ID, Member_ID = _a.Member_ID, Librarian_ID = _a.Librarian_ID;
                if (Return_Date === null && BorrowDetail_ID == null && Member_ID === null && Librarian_ID === null) {
                    return [2 /*return*/, res.status(400).json({
                            code: 4000,
                            message: 'Bad Request'
                        })];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                values = { Return_Date: Return_Date, BorrowDetail_ID: BorrowDetail_ID, Member_ID: Member_ID, Librarian_ID: Librarian_ID };
                return [4 /*yield*/, prisma.return_book.create({
                        data: values
                    })];
            case 2:
                insertReturnBook = _b.sent();
                return [2 /*return*/, res.status(201).json({
                        code: 2010,
                        message: 'Create Success'
                    })];
            case 3:
                e_3 = _b.sent();
                return [2 /*return*/, res.status(500).json({
                        code: 5000,
                        message: e_3.message
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.Insert_Return_book = Insert_Return_book;
//# sourceMappingURL=return_book.js.map
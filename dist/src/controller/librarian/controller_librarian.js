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
exports.Delete_Librarian = exports.Edit_Librarian = exports.Insert_Librarian = exports.Search_Librarian = exports.Get_Librarian = void 0;
var formatCleanData_1 = __importDefault(require("../../utils/helper/format/formatCleanData"));
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var Get_Librarian = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.librarian.findMany()];
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
exports.Get_Librarian = Get_Librarian;
var Search_Librarian = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Librarian_ID, id, result, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                Librarian_ID = req.params.Librarian_ID;
                console.log(Librarian_ID);
                console.log(typeof (Librarian_ID));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                id = parseInt(String(Librarian_ID));
                return [4 /*yield*/, prisma.librarian.findFirst({ where: { Librarian_ID: id } })];
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
                        error: 'ใส่ข้อมูลไม่ได้สัส',
                        message: e_2.message
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.Search_Librarian = Search_Librarian;
var Insert_Librarian = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, Librarian_Name, Librarian_Phone, Librarian_Issue, Librarian_Expiry, insertLibrarian, e_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, Librarian_Name = _a.Librarian_Name, Librarian_Phone = _a.Librarian_Phone, Librarian_Issue = _a.Librarian_Issue, Librarian_Expiry = _a.Librarian_Expiry;
                if (Librarian_Name === null && Librarian_Phone === null && Librarian_Issue === null && Librarian_Expiry === null) {
                    return [2 /*return*/, res.status(400).json({
                            code: 4000,
                            message: 'Bad Request'
                        })];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.librarian.create({
                        data: {
                            Librarian_Name: Librarian_Name,
                            Librarian_Phone: Librarian_Phone,
                            Librarian_Issue: Librarian_Issue,
                            Librarian_Expiry: Librarian_Expiry
                        }
                    })];
            case 2:
                insertLibrarian = _b.sent();
                return [2 /*return*/, res.status(201).json({
                        code: 2010,
                        message: 'Create Success'
                    })];
            case 3:
                e_3 = _b.sent();
                return [2 /*return*/, res.status(500).json({
                        code: 5000,
                        error: 'ใส่ข้อมูลไม่ได้สัส',
                        message: e_3.message
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.Insert_Librarian = Insert_Librarian;
var Edit_Librarian = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Librarian_ID, _a, Librarian_Name, Librarian_Phone, Librarian_Issue, Librarian_Expiry, object_data, values, id, value, result, e_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                Librarian_ID = req.params.Librarian_ID;
                _a = req.body, Librarian_Name = _a.Librarian_Name, Librarian_Phone = _a.Librarian_Phone, Librarian_Issue = _a.Librarian_Issue, Librarian_Expiry = _a.Librarian_Expiry;
                object_data = { Librarian_Name: Librarian_Name, Librarian_Phone: Librarian_Phone, Librarian_Issue: Librarian_Issue, Librarian_Expiry: Librarian_Expiry };
                values = (0, formatCleanData_1["default"])(object_data);
                console.log(values);
                console.log(typeof Librarian_Name);
                if (Librarian_ID == null || Librarian_Name == null) {
                    return [2 /*return*/, res.status(400).json({
                            code: 4000,
                            message: 'Bad Request'
                        })];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                id = parseInt(String(Librarian_ID));
                return [4 /*yield*/, prisma.librarian.findFirst({ where: { Librarian_ID: id } })];
            case 2:
                value = _b.sent();
                if (value === null) {
                    return [2 /*return*/, res.status(404).json({
                            code: 4040,
                            message: 'Not Found'
                        })];
                }
                return [4 /*yield*/, prisma.librarian.update({
                        where: { Librarian_ID: id },
                        data: values
                    })];
            case 3:
                result = _b.sent();
                return [2 /*return*/, res.status(200).json({
                        code: 2000,
                        message: 'Update Success'
                    })];
            case 4:
                e_4 = _b.sent();
                return [2 /*return*/, res.status(500).json({
                        code: 5000,
                        message: e_4.message
                    })];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.Edit_Librarian = Edit_Librarian;
var Delete_Librarian = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Librarian_ID, id, value, result, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                Librarian_ID = req.params.Librarian_ID;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                id = parseInt(String(Librarian_ID));
                return [4 /*yield*/, prisma.librarian.findFirst({
                        where: {
                            Librarian_ID: id
                        }
                    })];
            case 2:
                value = _a.sent();
                if (!(value === null)) return [3 /*break*/, 3];
                return [2 /*return*/, res.status(404).json({
                        code: 4040,
                        message: 'Not Found'
                    })];
            case 3: return [4 /*yield*/, prisma.librarian["delete"]({
                    where: {
                        Librarian_ID: id
                    }
                })];
            case 4:
                result = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        code: 2000,
                        message: 'Delete Success'
                    })];
            case 5: return [3 /*break*/, 7];
            case 6:
                e_5 = _a.sent();
                return [2 /*return*/, res.status(500).json({
                        code: 5000,
                        message: e_5.message
                    })];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.Delete_Librarian = Delete_Librarian;
//# sourceMappingURL=controller_librarian.js.map
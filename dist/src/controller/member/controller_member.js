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
exports.Delete_Member = exports.Edit_Member = exports.Insert_Member = exports.Search_Member = exports.Get_Member = void 0;
var formatCleanData_1 = __importDefault(require("../../utils/helper/format/formatCleanData"));
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var Get_Member = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.member.findMany()];
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
exports.Get_Member = Get_Member;
var Search_Member = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Member_ID, id, result, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                Member_ID = req.params.Member_ID;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                id = parseInt(String(Member_ID));
                return [4 /*yield*/, prisma.member.findFirst({ where: { Member_ID: id } })];
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
exports.Search_Member = Search_Member;
var Insert_Member = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, Member_Student_ID, Member_Name, Member_Add, Member_Phone, Member_Issue, Member_Expiry, Member_Category, insert_Member, e_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, Member_Student_ID = _a.Member_Student_ID, Member_Name = _a.Member_Name, Member_Add = _a.Member_Add, Member_Phone = _a.Member_Phone, Member_Issue = _a.Member_Issue, Member_Expiry = _a.Member_Expiry, Member_Category = _a.Member_Category;
                if (Member_Student_ID === null && Member_Name === null && Member_Add === null && Member_Phone === null && Member_Issue === null && Member_Expiry === null && Member_Category === null) {
                    return [2 /*return*/, res.status(404).json({
                            code: 4040,
                            message: 'Not Found'
                        })];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.member.create({
                        data: {
                            Member_Student_ID: Member_Student_ID,
                            Member_Name: Member_Name,
                            Member_Add: Member_Add,
                            Member_Phone: Member_Phone,
                            Member_Issue: Member_Issue,
                            Member_Expiry: Member_Expiry,
                            Member_Category: Member_Category
                        }
                    })];
            case 2:
                insert_Member = _b.sent();
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
exports.Insert_Member = Insert_Member;
var Edit_Member = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Member_ID, _a, Member_Student_ID, Member_Name, Member_Add, Member_Phone, Member_Issue, Member_Expiry, Member_Category, object_data, values, id, value, result, e_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                Member_ID = req.params.Member_ID;
                _a = req.body, Member_Student_ID = _a.Member_Student_ID, Member_Name = _a.Member_Name, Member_Add = _a.Member_Add, Member_Phone = _a.Member_Phone, Member_Issue = _a.Member_Issue, Member_Expiry = _a.Member_Expiry, Member_Category = _a.Member_Category;
                console.log(typeof (Member_Student_ID));
                console.log(typeof (Member_Name));
                console.log(typeof (Member_Add));
                console.log(typeof (Member_Phone));
                console.log(typeof (Member_Issue));
                console.log(typeof (Member_Expiry));
                console.log(typeof (Member_Category));
                if (Member_ID === null) {
                    return [2 /*return*/, res.status(400).json({
                            code: 4000,
                            message: 'Bad Request'
                        })];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                object_data = {
                    Member_Student_ID: Member_Student_ID,
                    Member_Name: Member_Name,
                    Member_Add: Member_Add,
                    Member_Phone: Member_Phone,
                    Member_Issue: Member_Issue,
                    Member_Expiry: Member_Expiry,
                    Member_Category: Member_Category
                };
                values = (0, formatCleanData_1["default"])(object_data);
                console.log(values);
                id = parseInt(String(Member_ID));
                return [4 /*yield*/, prisma.member.findFirst({ where: { Member_ID: id } })];
            case 2:
                value = _b.sent();
                if (value === null) {
                    return [2 /*return*/, res.status(404).json({
                            code: 4040,
                            message: 'Not Found'
                        })];
                }
                return [4 /*yield*/, prisma.member.update({
                        where: { Member_ID: id },
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
exports.Edit_Member = Edit_Member;
var Delete_Member = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Member_ID, id, value, result, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                Member_ID = req.params.Member_ID;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                id = parseInt(String(Member_ID));
                return [4 /*yield*/, prisma.member.findFirst({ where: { Member_ID: id } })];
            case 2:
                value = _a.sent();
                if (!(value === null)) return [3 /*break*/, 3];
                return [2 /*return*/, res.status(404).json({
                        code: 4040,
                        message: 'Not Found'
                    })];
            case 3: return [4 /*yield*/, prisma.member["delete"]({ where: { Member_ID: id } })];
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
exports.Delete_Member = Delete_Member;
//# sourceMappingURL=controller_member.js.map
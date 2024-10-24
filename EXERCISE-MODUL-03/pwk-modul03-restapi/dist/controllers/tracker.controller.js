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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetExpenseList = GetExpenseList;
exports.GetExpenseDetail = GetExpenseDetail;
exports.CreateNewExpense = CreateNewExpense;
exports.UpdateExistingExpense = UpdateExistingExpense;
exports.DeleteExpense = DeleteExpense;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
function GetExpenseList(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { category } = req.query;
            let url = null;
            if (!category) {
                url = config_1.API_URL;
            }
            else {
                url = config_1.API_URL + `?category=${category}`;
            }
            const response = yield axios_1.default.get(`${url}`);
            res.status(200).send({
                message: "Get Expense List",
                data: response.data,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
function GetExpenseDetail(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const response = yield axios_1.default.get(`${config_1.API_URL}/${id}`);
            res.status(200).send({
                message: `Get Expense Detail id : ${id}`,
                data: response.data,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
function CreateNewExpense(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { title, nominal, type, category, date } = req.body;
            const payload = {
                title,
                nominal,
                type,
                category,
                date,
            };
            const response = yield axios_1.default.post(`${config_1.API_URL}`, payload);
            res.status(200).send({
                message: "Insert New Expense",
                data: response.data,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
function UpdateExistingExpense(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { title, nominal, type, category, date } = req.body;
            const payload = {
                title,
                nominal,
                type,
                category,
                date,
            };
            const response = yield axios_1.default.put(`${config_1.API_URL}/${id}`, payload);
            res.status(200).send({
                message: "Update Expense",
                data: response.data,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
function DeleteExpense(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const response = yield axios_1.default.delete(`${config_1.API_URL}/${id}`);
            res.status(200).send({
                message: `Delete Expense Detail id : ${id}`,
                data: response.data,
            });
        }
        catch (err) {
            next(err);
        }
    });
}

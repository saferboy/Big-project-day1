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
const client_1 = __importDefault(require("./client"));
function create(user) {
    return __awaiter(this, void 0, void 0, function* () {
        let sql = 'INSERT INTO users ( name, surname, email, password, gender) VALUES($1, $2, $3, $4, $5)';
        yield client_1.default.query(sql, [user.name, user.surname, user.email, user.password, user.gender]);
    });
}
function findAll() {
    return __awaiter(this, void 0, void 0, function* () {
        let sql = 'SELECT * FROM users; ';
        let users = yield client_1.default.query(sql);
        return users.rows;
    });
}
function findByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        let sql = 'SELECT * FROM users WHERE email=$1;';
        let users = yield client_1.default.query(sql, [email]);
        return users.rows[0];
    });
}
function update(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
function deleteOne(id) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.default = {
    create,
    findAll,
    findByEmail
};

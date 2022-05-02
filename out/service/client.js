"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
let olimtoyURL = 'postgres://postgres:1234@127.0.0.1:5432/olimtoy';
let client = new pg_1.Pool({
    connectionString: olimtoyURL
});
client.connect((err) => {
    console.log('DATABSE `olimtoy` is connected');
});
exports.default = client;

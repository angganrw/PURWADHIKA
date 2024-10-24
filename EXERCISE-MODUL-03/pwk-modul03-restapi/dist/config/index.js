"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_URL = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({
    path: ".env",
});
_a = process.env, exports.PORT = _a.PORT, exports.API_URL = _a.API_URL;

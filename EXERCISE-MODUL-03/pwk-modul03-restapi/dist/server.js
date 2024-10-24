"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const error_middleware_1 = __importDefault(require("./middleware/error.middleware"));
const tracker_route_1 = __importDefault(require("./routes/tracker.route"));
const PORT = Number(config_1.PORT) || 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", tracker_route_1.default);
app.use(error_middleware_1.default);
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import { orderRouter } from "./routes/order";
// import { depthRouter } from "./routes/depth";
// import { tradesRouter } from "./routes/trades";
// import { klineRouter } from "./routes/kline";
// import { tickersRouter } from "./routes/ticker";
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// app.use("/api/v1/order", orderRouter);
// app.use("/api/v1/depth", depthRouter);
// app.use("/api/v1/trades", tradesRouter);
// app.use("/api/v1/klines", klineRouter);
// app.use("/api/v1/tickers", tickersRouter);
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});

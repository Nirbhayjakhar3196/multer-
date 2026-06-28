const express = require("express");
const app = express();

app.use(express.json());

const uploadRoutes = require("./src/routes/uploadRoutes");
const errorMiddleware = require("./src/middleware/errorMiddleware")

app.use("/api", uploadRoutes);

app.use(errorMiddleware)

module.exports = app;
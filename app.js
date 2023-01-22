const express = require("express");
const { router } = require("./src/router/rootRouter");
const { notFoundAPI } = require("./src/middleware/errorHandler");
const { globalErrorHandler } = require("./src/middleware/globalErrorHandler");

const app = express();

app.use("/api", router);

app.use(notFoundAPI);

app.use(globalErrorHandler);

module.exports = { app };


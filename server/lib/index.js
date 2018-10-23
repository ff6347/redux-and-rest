"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use('/', routes);
app.listen(PORT, () => {
    console.log(`REST API is listening on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map
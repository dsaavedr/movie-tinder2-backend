const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const jwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

const userRoutes = require("./users/user.controller");

require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV === "production" ? "tiny" : "dev"));
app.use(jwt());

// Routes
app.use("/users", userRoutes);

app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

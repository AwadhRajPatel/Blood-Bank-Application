const express = require("express");
const { testController } = require("../controllers/testController");

// routes objects
const routes = express.Router();

// routes
routes.get("/", testController);

// export

module.exports = routes;

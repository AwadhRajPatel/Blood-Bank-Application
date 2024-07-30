const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../controllers/authController");
const authMiddelware = require("../middlewares/authMiddelware");
const routes = express.Router();

// router

// Register||Post
routes.post("/register", registerController);

// Login || Post
routes.post("/login", loginController);

// GET current user || Get
routes.get("/current-user", authMiddelware, currentUserController);

module.exports = routes;

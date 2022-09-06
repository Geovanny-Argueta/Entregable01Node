const express = require("express");

const {
  getRegistration,
  postRegistration,
  updateRegistration,
  deleteRegistration,
} = require("../Controllers/registration.control");

const registrationUsers = express.Router();
registrationUsers.get("/", getRegistration);
registrationUsers.post("/", postRegistration);
registrationUsers.patch("/:id", updateRegistration);
registrationUsers.delete("/:id", deleteRegistration);

module.exports = { registrationUsers };

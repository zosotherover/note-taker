//require express (router), and path:

const router = require("express").Router();
const express = require("express");
const path = require("path");

// GET notes route:
// use the sendFile() directory, filename
router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "notes.html");
  res.sendFile(filePath);
});

// GET * route:
// use the sendFile() directory, filename
router.get("*", (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  res.sendFile(filePath);
});

//export the Router:

module.exports = router;

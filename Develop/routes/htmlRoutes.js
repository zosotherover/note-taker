//require express (router), and path:

const router = require("express").Router();
const path = require("path");

// GET notes route:
// use the sendFile() directory, filename
router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "html", "notes.html");
  res.sendFile(filePath);
});

// GET * route:
// use the sendFile() directory, filename
router.get("*", (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "html", "index.html");
  res.sendFile(filePath);
});

//export the Router:

module.exports = router;

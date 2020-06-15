const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 8080;

// required paths to routes folder
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");

// required middleware to use POST data
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));

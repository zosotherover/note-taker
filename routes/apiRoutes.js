//require express
//require the class file so you can use the functions that you created
const express = require("express");
const router = require("express").Router();
const notebook = require("../db/Notebook");

// GET request for notes:

router.get("/notes", function (req, res) {
  notebook
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

// POST request for notes:

router.post("/notes", function (req, res) {
  notebook
    .addNotes(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

//DELETE request for notes:

router.delete("/notes/:id", function (req, res) {
  notebook
    .deleteNotes(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;

//Require express, router, and Notebook class:
const router = require("express").Router();
const notebook = require("../db/Notebook");

//GET route:

router.get("/notes", function (req, res) {
  notebook
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

//POST route:

router.post("/notes", function (req, res) {
  notebook
    .addNotes(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

//DELETE route:

router.delete("/notes/:id", function (req, res) {
  notebook
    .deleteNotes(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

//exposrt the router:

module.exports = router;

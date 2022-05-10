const router = require("express").Router();
const { getNotes, deleteNotes, createNotes } = require("../../lib/notes.js")

// Get current notes
router.get('/notes', (req, res) => {
    let results = getNotes();
    res.json(results);
})

// Save new note
router.post("/notes", (req, res) => {
    createNotes(req.body);
    res.json(getNotes());
});

// Delete note
router.delete("/notes/:id", (req, res) => {
    deleteNotes(req.params.id);
    res.json(getNotes());
})

module.exports = router;
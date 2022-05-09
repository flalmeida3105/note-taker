const router = require("express").Router();
const { getNotes, postNotes } = require("../../lib/notes.js")
const { notes } = require('../../db/db.json');

// router.get('/notes',(req, res) => {
//     let results = notes;
//     if (req.query) { 
//         results = getNotes(req.query, results);
//     }
//     console.log(results);
//     res.json(results);
// });

router.get('/notes', (req, res) => {
    let results = getNotes();
    res.json(results);
})

// router.post('/notes', (req, res) => {
//     let results = postNotes();
//     // req.body.id = notes.length.toString();
//     console.log(results)
//     // console.log(res)
//     // console.log("teste")
// })

module.exports = router;
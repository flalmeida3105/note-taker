const fs = require("fs");
const path = require("path");

const getNotes = () => {
    let dbFileRaw = fs.readFileSync("./db/db.json") || null;
    if (dbFileRaw) {
        let dbFileToJson = JSON.parse(dbFileRaw);
        return dbFileToJson;
    }
    return [];
};

const createNotes = (body) => {
    const notes = getNotes();
    const note = {
        ...body,
        id: notes.length + 1,
    };
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notes, null, 2)
    );
}

const deleteNotes = (id) => {
    const notes = getNotes();
    const result = notes.filter(note => note.id !== parseInt(id))
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(result, null, 2)
    );
}

module.exports = {
    getNotes,
    deleteNotes,
    createNotes,
}
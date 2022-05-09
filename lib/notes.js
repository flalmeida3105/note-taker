const fs = require("fs");

function getNotes() {
    let dbFileRaw = fs.readFileSync("./db/db.json") ;
    let dbFileToJson = JSON.parse(dbFileRaw);

    console.log(dbFileToJson);

    return dbFileToJson;
};

function postNotes(dbFileToJson) {
    let notes = dbFileToJson;
    console.log("this",notes)
}




module.exports = {
    getNotes,
    postNotes,
}
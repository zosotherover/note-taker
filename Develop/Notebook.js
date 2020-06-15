const fs = require("fs");
//require uuidv⁴ package to generate an id
// { id : uuidv4() (id, title, text) }

const { uuid } = require("uuidv4");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notebook {
  getNotes() {
    //inside of this fuction READ from the db.json file.
    //The contents of the json file will be displayed on the page.
    //To read the file = readFile() which is a part of the fs package.
    return readFileAsync("db/db.json").then((notes) => {
      let parseNotes = [];
      try {
        parseNotes = [].concat(JSON.parse(notes));
      } catch (error) {
        parseNotes = [];
      }
      return parseNotes;
    });
  }

  addNotes(note) {
    //inside of this function you want to write to the file using the writeFile() from the fs module.
    const { title, text } = note;
    const newNote = { title, text, id: uuidv1() };
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) =>
        writeFileAsync("db/db.json", JSON.stringify(updatedNotes))
      )
      .then(() => newNote);
  }

  deleteNotes(id) {
    //check against all of the notes to see which one has the id you're looking to delete.
    //call getNotes() then filter the results to find the id you're looking for and return the ones that don't match
    return true;
  }
}

module.exports = new Notebook();

const fs = require("fs");

const FILE = "notes.json";

function loadNotes() {
    try {
        if (!fs.existsSync(FILE)) {
            fs.writeFileSync(FILE, "[]");
        }

        const data = fs.readFileSync(FILE, "utf8");

        return JSON.parse(data);
    } catch (error) {
        console.log("Error reading notes:", error.message);
        return [];
    }
}

function saveNotes(notes) {
    try {
        fs.writeFileSync(FILE, JSON.stringify(notes, null, 2));
        return true;
    } catch (error) {
        console.log("Error saving notes:", error.message);
        return false;
    }
}

function addNote(text) {
    const notes = loadNotes();

    const note = {
        id: Date.now(),
        text: text
    };

    notes.push(note);

    if (saveNotes(notes)) {
        console.log("Note added successfully!");
    }
}

function listNotes() {
    const notes = loadNotes();

    if (notes.length === 0) {
        console.log("No notes found.");
        return;
    }

    notes.forEach((note) => {
        console.log(`${note.id}: ${note.text}`);
    });
}

function updateNote(id, newText) {
    const notes = loadNotes();

    const note = notes.find((note) => note.id === Number(id));

    if (!note) {
        console.log("Note not found.");
        return;
    }

    note.text = newText;

    if (saveNotes(notes)) {
        console.log("Note updated successfully!");
    }
}

function deleteNote(id) {
    const notes = loadNotes();

    const index = notes.findIndex(
        (note) => note.id === Number(id)
    );

    if (index === -1) {
        console.log("Note not found.");
        return;
    }

    notes.splice(index, 1);

    if (saveNotes(notes)) {
        console.log("Note deleted successfully!");
    }
}

const command = process.argv[2];

switch (command) {
    case "add": {
        const text = process.argv.slice(3).join(" ");

        if (!text) {
            console.log("Please provide a note.");
            break;
        }

        addNote(text);
        break;
    }

    case "list":
        listNotes();
        break;

    case "update": {
        const id = process.argv[3];
        const newText = process.argv.slice(4).join(" ");

        if (!id || !newText) {
            console.log("Usage: node app.js update <id> <new text>");
            break;
        }

        updateNote(id, newText);
        break;
    }

    case "delete": {
        const id = process.argv[3];

        if (!id) {
            console.log("Usage: node app.js delete <id>");
            break;
        }

        deleteNote(id);
        break;
    }

    default:
        console.log(`
Notes Manager

Commands:

  Add:
    node app.js add Learn Node.js

  List:
    node app.js list

  Update:
    node app.js update <id> Updated note

  Delete:
    node app.js delete <id>
        `);
}

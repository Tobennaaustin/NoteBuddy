
const noteForm = document.getElementById('note-form');
const noteInput = document.getElementById('note-input');
const noteTitle = document.getElementById('note-title');
const notesList = document.getElementById('notes-list');
const searchInput = document.getElementById('search-input');

function getNotes() {
    return JSON.parse(localStorage.getItem('notes')) || [];
}

function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function displayNotes(notes) {
    notesList.innerHTML = '';
    notes.forEach((note, index) => {
        const noteElement = document.createElement('li');
        noteElement.textContent = note.title;
        noteElement.addEventListener('click', () => {
            noteTitle.value = note.title;
            noteInput.value = note.content;
            noteForm.setAttribute('data-id', index);
        });
        notesList.appendChild(noteElement);
    });
}

function addOrUpdateNote() {
    const notes = getNotes();
    const noteContent = noteInput.value.trim();
    const noteTitleText = noteTitle.value.trim();
    const noteId = noteForm.getAttribute('data-id');

    if (noteContent && noteTitleText) {
        if (noteId !== null) {
            // Update existing note
            notes[noteId] = { title: noteTitleText, content: noteContent };
            noteForm.removeAttribute('data-id');
        } else {
            // Add new note
            notes.push({ title: noteTitleText, content: noteContent });
        }
        saveNotes(notes);
        displayNotes(notes);
        noteInput.value = '';
        noteTitle.value = '';
    }
}

noteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addOrUpdateNote();
});

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const notes = getNotes();
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(query));
    displayNotes(filteredNotes);
});

// Initial load of notes
displayNotes(getNotes());

// Functions for text and background color change
function changeTextColor(color) {
    document.execCommand('foreColor', false, color);
}

function changeBgColor(color) {
    document.execCommand('hiliteColor', false, color);
}
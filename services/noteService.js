var notes = [
    {
        id: 101,
        title: 'passwords' ,
        text: 'bank: 123456 \ncreditcard: 123456 \ngmail: 123456' , 
        image: '',
        color: '#ff0000' ,
        priority: 1 ,
        timeCreated: 1512374580000
    },
    {
        id: 102,
        title: 'packs in mail',
        text: 'usb charger from ebay \nbook from amazon \nflashlight from dx' ,
        image: '' ,
        color: '#FF8000' ,
        priority: 2 ,
        timeCreated: 1512131953000
    },
    {
        id: 103,
        title: 'escape rooms',
        text: 'flight 301 \ncamp 23 \ncube \ndistrict 13 \nalenbi 28 \noz' ,
        image: '' ,
        color: '#00FF00' ,
        priority: 4,
        timeCreated: 1510513598000
    },
    {
        id: 104,
        title: 'login to wifi',
        text: 'misterbit: codingacademy \nwebsem: guest' ,
        image: '' ,
        color: '#000000' ,
        priority: 3 ,
        timeCreated: 1511967788000
    },
    {
        id: 105,
        title: 'funny image',
        text: '' ,
        // image: '../img/105.jpg' ,
        image: '105.jpg' ,
        color: '#0000FF' ,
        priority: 4 ,
        timeCreated: 1470029518000
    },
]

function createNote() {
    var newNote = _emptyNote();
    notes.push(newNote);
    return newNote.id + '/new';
}


function _emptyNote() {
    return {
        id: _getNextId(),
        title: '' ,
        text: '' ,
        image: '' ,
        color: '#ffff00' ,
        priority: '' ,
        timeCreated: Date.now()
        }
}

function _getNextId() {
    var maxId = notes.reduce((acc, note)=>{
        return (note.id > acc)? note.id : acc
    }, 0);
    return maxId + 1;
} 


function getNotes() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(notes)}, 500)
    });
    // return Promise.reject();
    return Promise.resolve(notes);
}

function saveNote(note) {
    return new Promise((resolve, reject)=>{
        var noteToUpdateIdx = notes.findIndex(currNote => currNote.id === note.id)
        notes.splice(noteToUpdateIdx, 1, note);
        resolve(note);
    });
}

function deleteNote(noteId) {
    return new Promise((resolve, reject)=>{
        var noteIdx = notes.findIndex(note => note.id === noteId)
        notes.splice(noteIdx, 1);
        resolve()
    });
}


function getNoteById(noteId) {
    return new Promise((resolve, reject)=>{
        var foundNote = notes.find(note => note.id === noteId)
        if (foundNote) resolve(foundNote)
        else reject();
    }) 
}


export default {
    getNotes,
    saveNote,
    deleteNote,
    createNote,
    getNoteById,
}
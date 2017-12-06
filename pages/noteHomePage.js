import noteService from '../services/noteService.js'

export default {
    template: `
        <section>
        <button @click="addNote">Add New Note</button>
        <button @click="sort('date')">Sort By Date</button>
        <button @click="sort('priority')">Sort By Priority</button>
            <section class="containor">
                <div v-for="note in notes" class="note-outer">
                    <router-link :to="'/note/' + note.id"><div class="note">
                        <div class="note-header">
                            <span class="title"> {{note.title}} </span>
                            <span :style="{color: note.color}">Priority: {{note.priority}} </span>
                        </div>
                        <div class="note-main">
                            {{note.text}}
                            <img v-if="note.image" :src="'../img/' + note.image" />
                        </div>
                        <div class="note-footer">
                            <button class="deleteOnNote" @click="deleteNote(note.id)">🗑</button><br>
                        </div>
                    </div></router-link>
                </div>            
            </section>   
        </section>   
                `,
                
    data() {
        return {
            notes: [],
        }
    },
    created() {
        noteService.getNotes()
        .then(notes => {
            this.notes = notes
        })
        .catch(err => {
            this.notes = []
        })
    },
    methods: {
        deleteNote(noteId) {
            noteService.deleteNote(noteId)
            .then(_ => {
            })
            .catch(err => {
                console.error('Error deleting');                                            
            })
        },     
        addNote() {
            var newNoteId = noteService.createNote();
            this.$router.push('/note/' + newNoteId)    
        },
        
        sort(sortBy) {
            switch (sortBy) {
                case 'date':
                    this.notes = this.notes.sort(this.compareByDate);
                    break;
                case 'priority':
                    this.notes = this.notes.sort(this.compareByPrio);
                    break;
            }
        },
        compareByDate(a, b) {
            return a.timeCreated - b.timeCreated
        },
        compareByPrio(a, b) {
            return a.priority - b.priority;
        }
    },
}
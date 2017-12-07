import noteService from '../services/noteService.js'

export default {
    template: `
        <section v-if="note" class="note-details-containor">
        <section :class="classObject">
            <div class="details-title" >   
                Title:
                <input type="text" v-model="note.title">
            </div>
            <div class="details-text">
                Text:
                <textarea v-model="note.text" rows=5 cols=50></textarea>
            </div>
            <div class="details-img">
                Image: <input type="text" v-model="note.image">
                <img class="img-in-details" v-if="note.image" :src="'../img/' + note.image">
            </div>
            <div>
                Priority: <select v-model="note.priority">
                    <option value="1">1</option> 
                    <option value="2">2</option> 
                    <option value="3">3</option> 
                    <option value="4">4</option> 
                    <option value="5">5</option>
                </select>
            </div>
            <div class="details-footer">
            <button @click="saveNote">{{(note.title) ? 'Save' : 'Add'}}</button>
            <button @click="deleteNote(note.id)">🗑</button>
            <router-link :to="'/'" tag="button">Back</router-link>
            </div>
            <div>
                Created On: {{convertDate}}
            </div>
        </section>
        </section>
    `,
    data() {
        return {
            note: null,
            noteId: +this.$route.params.noteId,
            isNew: '',
        }
    },
    methods: {
        saveNote() {
            this.note.color = this.priorityColor(this.note.priority);
            noteService.saveNote(this.note)
                .then(addedNote => {
                    this.$router.push('/')
                })
                .catch(err => {
                    console.error('Error saving');
                })
        },
        priorityColor(priority) {
            switch (priority) {
                case '1':
                    return '#ff0000';
                    break;
                case '2':
                    return '#FF8000';
                    break;
                case '3':
                    return '#00FF00';
                    break;
                case '4':
                    return '#0000FF';
                    break;
                case '5':
                    return '#000000';
                    break;
            }
        },
        deleteNote(noteId) {
            noteService.deleteNote(noteId)
            .then(_ => {
                this.$router.push('/')
            })
            .catch(err => {
                console.error('Error deleting');                
            })
        },
        
    },
    computed: {
        classObject() {
            return {
                'note-details': true,
                'new-note': this.isNew,
            }
        },
        convertDate() {
            var d = new Date(this.note.timeCreated)
            return d.toLocaleString('en-GB');
        },
    },
    created() {
        this.isNew = (this.$route.params.new) ? true : false;
        // console.log(this.ifNew)
        var noteId = +this.$route.params.noteId
        noteService.getNoteById(noteId)
            .then(note => this.note = Object.assign({}, note))
            .catch(err => {
                this.$router.push('/')
        })
    }
}



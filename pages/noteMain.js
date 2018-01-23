import noteService from '../services/noteService.js'
import navBar from '../cmps/navBar.js'

export default {
    template: `
        <section>
            <navBar></navBar>
            <div class="note-container">
                <section class="note-header">
                    <button class="compose-mail-button" @click="addNote"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                    <button class="note-top-button" @click="sort('date')"><i class="fa fa-sort-amount-desc" aria-hidden="true"></i> Date</button>
                    <button class="note-top-button" @click="sort('priority')"><i class="fa fa-sort-numeric-asc" aria-hidden="true"></i> Priority</button>
                </section>
                <section class="containor note-list">
                    <div v-for="note in notes" class="note-outer">
                        <router-link :to="'/note/' + note.id"><div class="note">
                            <div class="note-title">
                                <span class="title"> {{note.title}} </span> <br>
                                <span :style="{color: note.color}">Priority: {{note.priority}} </span>
                            </div>
                            <div class="note-main">
                                {{note.text}}
                                <img v-if="note.image" :src="'../img/' + note.image" />
                            </div>
                            <div class="note-footer">
                                <i class="fa fa-trash-o" aria-hidden="true" @click.prevent="deleteNote(note.id)"></i>
                            </div>
                        </div></router-link>
                    </div>
                </section>   
            </div>            
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
            swal({
                title: 'Are you sure?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.value) {
                  swal(
                    'Deleted!',
                    'The note has been deleted.',
                    'success'
                  )
                  noteService.deleteNote(noteId)
                  .then(_ => {
                    // this.$router.push('/note/main')
                  })
                  .catch(err => {
                    console.error('Error deleting');
                  })
                }})
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
    components:{
        navBar
    },
}
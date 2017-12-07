import noteService from '../services/noteService.js'

export default {
  template: `
    <div class="modal" :class="{'is-active' : isComposeActive}">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{(isNew) ? 'New Note' : 'Edit Note'}}</p>
        <router-link tag="button" to="/note/main/" class="delete" aria-label="close"></router-link>
      </header>
      <section class="modal-card-body">
        <h2></h2>
        <div>
          <div class="field">
            <div class="control">
              <input v-model="note.title" class="input" type="text" placeholder="Title" required>
            </div>
          </div>
          <div class="field">
            <div class="control">
                <textarea v-model="note.text" class="textarea mail-compose-body" rows="5" placeholder="Description (Optional)"></textarea>
            </div>
          </div>
          <div class="field">
              <div class="control">
                <input v-model="note.image" class="input" type="text" placeholder="Image (Optional)" required>
              </div>
            </div>
            <div class="field">
            <p class="control">                    
              <span class="select">
                    <select v-model="note.priority">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3" selected>3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </span>
                </p>                
              </div>
          <div class="field note-details-footer">
            <div class="control">
                <button class="button is-link" @click="saveNote">{{(note.title) ? 'Save' : 'Add'}}</button>
                <!-- <button @click="deleteNote(note.id)" v-if="!isNew"><i class="fa fa-trash-o" aria-hidden="true"></button> -->
                <!-- <button @click="deleteNote(note.id)" v-if="!isNew">🗑</button> -->
                <button class="button is-text" @click="cancelNote(note.id)">Cancel</button>               
                <span class="button note-details-delete" @click="deleteNote(note.id)" v-if="!isNew"><i class="fa fa-trash-o" aria-hidden="true"></i></span>               
                <!-- <i class="fa fa-trash-o" aria-hidden="true" @click="deleteNote(note.id)" v-if="!isNew"></i> -->
                <!-- <router-link to="/note/main" class="button">Cancel</router-link>                -->
            </div>
            <div class="control" v-if="!isNew">
                Created On: {{convertDate}}                
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
`,
  data() {
    return {
      isComposeActive: true,
      note: { 
              title: '',
              text: '',
              image: '',
              color: '#000000',
              priority: 3,
              timeCreated: Date.now()
            },
      noteId: +this.$route.params.noteId,
      isNew: '',
    }
  },
  methods: {
    closeModal() {
      this.$router.push('/note/main')
    },
    saveNote() {
      this.note.color = this.priorityColor(this.note.priority);
      noteService.saveNote(this.note)
        .then(addedNote => {
          this.$router.push('/note/main')
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
          this.$router.push('/note/main')
        })
        .catch(err => {
          console.error('Error deleting');
        })
    },
    cancelNote(noteId) {
      if (this.isNew) {
      noteService.deleteNote(noteId)
        .then(_ => {
          this.$router.push('/note/main')
        })
        .catch(err => {
          console.error('Error deleting');
        })
      } else this.$router.push('/note/main');
    }
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
        this.$router.push('/note/main')
      })
  }
}
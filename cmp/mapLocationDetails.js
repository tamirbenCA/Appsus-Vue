import mapService from '../services/mapService.js'

export default {
  template: `
    <div class="modal" :class="{'is-active' : isComposeActive}">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{(isNew) ? 'New Location' : 'Edit Location'}}</p>
        <router-link tag="button" to="/map/main/" class="delete" aria-label="close"></router-link>
      </header>
      <section class="modal-card-body">
        <h2></h2>
        <div>
          <div class="field">
            <div class="control">
              <input v-model="location.name" class="input" type="text" placeholder="Location Name" required>
            </div>
          </div>
          <div class="field">
            <div class="control">
                <textarea v-model="location.description" class="textarea mail-compose-body" rows="5" placeholder="Description (Optional)"></textarea>
            </div>
          </div>
          <div class="field">
              <div class="control">
                <input v-model="location.photo" class="input" type="text" placeholder="Image (Optional)">
              </div>
            </div>

          <div class="field note-details-footer">
            <div class="control">
                <button class="button is-link" @click="saveLocation">{{(location.name) ? 'Save' : 'Add'}}</button>
                <button class="button is-text" @click="cancelLocation(location.id)">Cancel</button>               
                <span class="button note-details-delete" @click="deleteLocation(location.id)" v-if="!isNew"><i class="fa fa-trash-o" aria-hidden="true"></i></span>
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
      location: { 
              name: '',
              description: '',
              photo: '',
              lat: '',
              lng: '',
              tag: '',
            },
      locationId: +this.$route.params.locationId,
      isNew: '',
    }
  },
  methods: {
    closeModal() {
      this.$router.push('/map/main')
    },
    saveLocation() {
      mapService.saveLocation(this.location)
        .then(addedLocation => {
          this.$router.push('/map/main')
        })
        .catch(err => {
          console.error('Error saving');
        })
    },
    deleteLocation(locationId) {
      mapService.deleteLocation(locationId)
        .then(_ => {
          this.$router.push('/map/main')
        })
        .catch(err => {
          console.error('Error deleting');
        })
    },
    cancelLocation(locationId) {
      if (this.isNew) {
      mapService.deleteLocation(locationId)
        .then(_ => {
          this.$router.push('/map/main')
        })
        .catch(err => {
          console.error('Error deleting');
        })
      } else this.$router.push('/map/main');
    }
  },
  created() {
    this.isNew = (this.$route.params.new) ? true : false;
    // console.log(this.ifNew)
    var locationId = +this.$route.params.locationId
    mapService.getLocationById(locationId)
      .then(location => this.location = Object.assign({}, location))
      .catch(err => {
        this.$router.push('/map/main')
      })
  }
}
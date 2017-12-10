export default {
    template: `
        <section class="search-map">
            <div class="search-container">
                <input class="search-box" type="search" placeholder="Search Location" v-model="term" @keyup.enter="searchLocation" @blur="searchLocation">
            </div>
            <div class="search-buttons">
              <button class="search-bar-button" @click="displaySavedLocations">Display Saved Locations</button>
              <button class="search-bar-button" @click="addLocation">Add New Location</button>
            </div>
        </section>
        `,
    data() {
      return {
        term: '',
        displayLocation: false,
        selectedLocation:null
      }
    },
    methods: {
      searchLocation() {
        this.$emit('searchLocation', this.term)
      },
      displaySavedLocations() {
        this.displayLocation = !this.displayLocation
        this.$emit('displaySavedLocations', this.displayLocation)
      },
      addLocation() {
        this.$emit('addLocation')
      }
    }
  }
export default {
    template: `
        <section class="search-map">
            <div>
                <input class="search-box" type="search" placeholder="Search Location" v-model="term" @keyup.enter="searchLocation" @blur="searchLocation">
            </div>
            <button class="search-bar-button" @click="displaySavedLocations">Display Saved Locations</button>
            <button class="search-bar-button" @click="addLocation">Add New Location</button>
        </section>
        `,
    data() {
      return {
        term: '',
        displayLocation: false
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
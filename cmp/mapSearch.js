export default {
    template: `
        <section class="search-map">
            <div>
                <input class="search-box" type="search" placeholder="Search Location" v-model="term" @keyup.enter="searchLocation" @blur="searchLocation">
            </div>
            <button class="display-locations-button" @click="displaySavedLocations">Display Saved Locations</button>
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
      }
    }
  }
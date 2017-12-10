export default {
    template: `
        <section class="search-map">
<<<<<<< HEAD
            <div class="search-container">
                <input class="search-box" type="search" placeholder="Search Location" v-model="term" @keyup.enter="searchLocation" @blur="searchLocation">
=======
            <div>
                <input class="search-box" id="searchTextField" type="search" placeholder="Search Location" v-model="term" @keyup.enter="searchLocation" @blur="searchLocation">
>>>>>>> 321647f06bb07f62b3364fcba813fccd30154910
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
      },
      initialize() {  
        var input = document.getElementById('searchTextField');
        var autocomplete = new google.maps.places.Autocomplete(input);
        }
    },
    created() {
      google.maps.event.addDomListener(window, 'load', this.initialize);      
    }
  }
import EventBusService from '../services/EventBusService.js'
import mapService from '../services/mapService.js';
import navBar from '../cmp/navBar.js';
import mapComp from '../cmp/mapComp.js';
import mapSearch from '../cmp/mapSearch.js';
// import locationPreview from '../cmp/locationPreview.js';
import locationDetails from '../cmp/locationDetails.js';

// {{ errorMsg }}    
// <div class="map"></div>

export default {
    template: `
    <section>
        <nav-bar></nav-bar>
        <section class="map-main-container">
            <div class="map-control-container">
                <map-search @searchLocation="searchLocation" @displaySavedLocations="displaySavedLocations" @addLocation="addLocation"></map-search>
            </div>
            <div class="map-box"> 
                <div class="location-detail-box">
                        <ul class="locations-list">
                        
                            <li v-for="currLocation in locations" @click="showDetails(currLocation)">
                                {{currLocation.name}}
                            </li>
                        </ul>
                        <div class="location-details" >
                            <location-details v-if="openDetails" :location="selectedLocation" @closeDetails="closeDetails"></location-details> 
                        </div>
                 </div>
                <map-comp @mapLoaded="mapLoaded"></map-comp>
            </div>  
        </section>
    </section>
    `,
    data() {
        return {
            locations: [],
            map: null,
            chosenLocation: null,
            selectedLocation: null,
            openDetails: null
        }
    },
    created() {
        mapService.getCurrPosition();
        EventBusService.$on('selectLocation', location => {
            this.chosenLocation = location;
            this.selectedLocation = this.chosenLocation;
            this.openDetails = true;
        })
        mapService.getCurrPosition();
        mapService.getLocations()
            .then(locations => {
                this.locations = locations
            })
    },
    methods: {
        closeDetails(event) {
            console.log('closing', event)
            this.openDetails = !this.openDetails;
            console.log(this.openDetails)
        },
        showDetails(location) {
            console.log('location', location)
            this.openDetails = true;
            this.selectedLocation = location;
            mapService.displayMap(location.lat, location.lng);
        },
        mapLoaded() {
            this.map = mapService.getMap();
            console.log('this map:', this.map)
        },
        searchLocation(searchTerm) {
            mapService.searchLocation(searchTerm)
                .then(location => {
                    this.chosenLocation = location
                    console.log('chosen location:', this.chosenLocation)
                })
        },
        displaySavedLocations(status) {
            //    console.log(this.locations, status)
            mapService.displayLocations(status);
        },
        addLocation() {
            console.log('add location', this.chosenLocation)
            var newLocationId = mapService.createNewLocation(this.chosenLocation);
            this.$router.push('/map/' + newLocationId)
        }
    },
    mounted() {
        // mapService.getPosition()         
    },
    components: {
        navBar,
        mapComp,
        mapSearch,
        // locationPreview,
        locationDetails
    },
}

import EventBusService from '../services/EventBusService.js'
import mapService from '../services/mapService.js';
import navBar from '../cmp/navBar.js';
import mapComp from '../cmp/mapComp.js';
import mapSearch from '../cmp/mapSearch.js';

// {{ errorMsg }}    
// <div class="map"></div>

export default {
    template: `
    <section>
        <nav-bar></nav-bar>
        <section class="map-main-container">
            <div class="map-control-container">
                <map-search @searchLocation="searchLocation" @displaySavedLocations="displaySavedLocations"></map-search>
            </div>
            <map-comp @mapLoaded="mapLoaded"></map-comp>
            
            
        </section>
    </section>
    `,
    data() {
        return {
            locations: [],
            map: null,
            chosenLocation: null
        }
    },
    created() {
        mapService.getCurrPosition();        
        EventBusService.$on('selectLocation', location => {
            this.chosenLocation = location;
            console.log(this.chosenLocation);
        })
        mapService.getCurrPosition();
        mapService.getLocations() 
        .then(locations => {
            this.locations = locations
        })
    },
    methods: {
        mapLoaded() {
            this.map = mapService.getMap();
            console.log('this map:', this.map)
       },
       searchLocation(searchTerm) {
           mapService.searchLocation(searchTerm);
       },
       displaySavedLocations(status) {
        //    console.log(this.locations, status)
           mapService.displayLocations(status);
       }
    },
    mounted() {
        // mapService.getPosition()         
    },
    components:{
        navBar,
        mapComp,
        mapSearch
    },
}
